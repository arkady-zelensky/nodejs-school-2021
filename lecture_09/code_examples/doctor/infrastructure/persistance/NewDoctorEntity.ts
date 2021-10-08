import { DoctorEntity } from "./Doctor.entity";
import { NewDoctorAddressEntity } from "./doctorAddress/NewDoctorAddressEntity";

export type NewDoctorEntity = Omit<
  DoctorEntity,
  | "practitionerId"
  | "createdAt"
  | "modifiedAt"
  | "addressId"
  | "address"
  | "createdByUserId"
  | "modifiedByUserId"
  | "deletedAt"
  | "practitionerEntityId"
> & {
  address: NewDoctorAddressEntity;
};
