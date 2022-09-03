import { CityDTO } from "./city.dto";

export interface AddressDTO {
  id: string;
  publicPlace: string;
  number: string;
  complement: string;
  neighborhood: string;
  zipCode: string;
  city: CityDTO;
}