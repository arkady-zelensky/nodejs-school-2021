import { DSDoctorAddressCreateData } from "./address/DSDoctorAddressCreateData";
import { DSDoctorAddressDTO } from "./address/DSDoctorAddressDTO";
import { DSDoctorAddressUpdateData } from "./address/DSDoctorAddressUpdateData";

export class DSDoctorUpdateData {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  address:
    | DSDoctorAddressDTO
    | DSDoctorAddressUpdateData
    | DSDoctorAddressCreateData;
  version: number;
}
