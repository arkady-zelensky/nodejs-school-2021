import CODE_SET_DICTIONARY from "../../../code-set/dictionary";
import CodeSetHelper from "../../../code-set/dictionary/CodeSetHelper";
import { DoctorEntity } from "./Doctor.entity";
import { DSDoctorDTO } from "../../application/dataStructures/DSDoctorDTO";
import { DSDoctorCreateData } from "../../application/dataStructures/DSDoctorCreateData";
import { DSDoctorUpdateData } from "../../application/dataStructures/DSDoctorUpdateData";
import { NewDoctorEntity } from "./NewDoctorEntity";
import { UpdatableDoctorEntity } from "./UpdatableDoctorEntity";

export class DoctorMapper {
  public static toDTO(doctorEntity: DoctorEntity): DSDoctorDTO {
    const {
      address,
      firstName,
      practitionerEntityId,
      lastName,
      gender,
      version,
    } = doctorEntity;

    return {
      id: practitionerEntityId,
      firstName,
      lastName,
      gender: CodeSetHelper.toCodeSetKey(CODE_SET_DICTIONARY.GENDER, gender),
      address: {
        city: address.city,
        id: address.addressId,
        line: address.line,
      },
      version,
    };
  }

  public static toNewEntity(createData: DSDoctorCreateData): NewDoctorEntity {
    const { address, firstName, lastName, gender, version } = createData;

    return {
      isLatest: true,
      version,
      gender: CodeSetHelper.toCodeSetId(CODE_SET_DICTIONARY.GENDER, gender),
      firstName,
      lastName,
      address: {
        city: address.city,
        line: address.line,
      },
    };
  }

  public static toUpdateEntity(
    updateData: DSDoctorUpdateData
  ): UpdatableDoctorEntity {
    const { id, version, address, firstName, lastName, gender } = updateData;

    return {
      practitionerEntityId: id,
      isLatest: true,
      version,
      gender: CodeSetHelper.toCodeSetId(CODE_SET_DICTIONARY.GENDER, gender),
      firstName,
      lastName,
      address: {
        city: address.city,
        line: address.line,
      },
    };
  }
}
