import { DoctorEntity } from "./Doctor.entity";
import { NewDoctorAddressEntity } from "./doctorAddress/NewDoctorAddressEntity";
import { UpdatableDoctorAddressEntity } from "./doctorAddress/UpdatableDoctorAddressEntity";

export type UpdatableDoctorEntity = Omit<
  DoctorEntity,
  | "practitionerId"
  | "createdAt"
  | "modifiedAt"
  | "addressId"
  | "address"
  | "createdByUserId"
  | "modifiedByUserId"
  | "deletedAt"
> & {
  address: NewDoctorAddressEntity | UpdatableDoctorAddressEntity | null;
};
