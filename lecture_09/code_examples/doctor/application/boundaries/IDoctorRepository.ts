import { DSDoctorCreateData } from "../dataStructures/DSDoctorCreateData";
import { DSDoctorDTO } from "../dataStructures/DSDoctorDTO";
import { DSDoctorUpdateData } from "../dataStructures/DSDoctorUpdateData";

export interface IDoctorRepository {
  findById(id: string): Promise<DSDoctorDTO | null>;
  findByIds(ids: string[]): Promise<DSDoctorDTO[]>;
  create(createData: DSDoctorCreateData): Promise<DSDoctorDTO>;
  update(updateData: DSDoctorUpdateData): Promise<DSDoctorDTO>;
}
