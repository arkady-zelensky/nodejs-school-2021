import { DSDoctorAddressCreateData } from "./address/DSDoctorAddressCreateData";

export class DSDoctorCreateData {
  firstName: string;
  lastName: string;
  gender: string;
  address: DSDoctorAddressCreateData;
  version: number;
}
