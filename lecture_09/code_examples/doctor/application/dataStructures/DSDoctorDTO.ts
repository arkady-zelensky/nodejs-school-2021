import { DSDoctorAddressDTO } from "./address/DSDoctorAddressDTO";

export class DSDoctorDTO {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  address: DSDoctorAddressDTO;
  version: number;
}
