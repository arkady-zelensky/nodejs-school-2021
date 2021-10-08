import { AddressEntity } from "./Address.entity";

export type NewDoctorAddressEntity = Omit<AddressEntity, "addressId">;
