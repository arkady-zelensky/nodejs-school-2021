import { AbstractRepository, EntityRepository, In } from "typeorm";
import { DoctorEntity } from "./Doctor.entity";
import { IDoctorRepository } from "../../application/boundaries/IDoctorRepository";
import { DSDoctorDTO } from "../../application/dataStructures/DSDoctorDTO";
import { DoctorMapper } from "./DoctorMapper";
import { DSDoctorCreateData } from "../../application/dataStructures/DSDoctorCreateData";
import { DSDoctorUpdateData } from "../../application/dataStructures/DSDoctorUpdateData";

@EntityRepository(DoctorEntity)
export class DoctorRepository
  extends AbstractRepository<DoctorEntity>
  implements IDoctorRepository
{
  public async findById(
    practitionerEntityId: string
  ): Promise<DSDoctorDTO | null> {
    const doctor = await this.repository.findOne({
      where: {
        practitionerEntityId,
        isLatest: true,
      },
    });

    if (!doctor) {
      return null;
    }

    return DoctorMapper.toDTO(doctor);
  }

  public async findByIds(ids: string[]): Promise<DSDoctorDTO[]> {
    const doctors = await this.repository.find({
      where: {
        practitionerEntityId: In(ids),
        isLatest: true,
      },
    });

    return doctors.map(DoctorMapper.toDTO);
  }

  public async create(createData: DSDoctorCreateData): Promise<DSDoctorDTO> {
    const entityToCreate = DoctorMapper.toNewEntity(createData);

    const createdDoctor = await this.repository.save(entityToCreate);

    const doctor = await this.repository.findOne({
      where: {
        practitionerId: createdDoctor.practitionerId,
        isLatest: true,
      },
    });

    return DoctorMapper.toDTO(doctor);
  }

  public async update(updateData: DSDoctorUpdateData): Promise<DSDoctorDTO> {
    const entityToUpdate = DoctorMapper.toUpdateEntity(updateData);

    await this.dumpLatestPractitionerByEntityId(
      entityToUpdate.practitionerEntityId
    );

    const updatedDoctor = await this.repository.save(entityToUpdate);

    const doctor = await this.repository.findOne({
      where: {
        practitionerId: updatedDoctor.practitionerId,
        isLatest: true,
      },
    });

    return DoctorMapper.toDTO(doctor);
  }

  private async dumpLatestPractitionerByEntityId(
    practitionerEntityId: string
  ): Promise<void> {
    await this.repository.update(
      {
        practitionerEntityId,
      },
      {
        isLatest: false,
      }
    );
  }
}
