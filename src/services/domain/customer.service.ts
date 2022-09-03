import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../config/api.config";
import { CustomerDTO } from "../../models/customer.dto";
import { StorageService } from "../storage.service";

@Injectable()
export class CustomerService {

  constructor(public http: HttpClient, public storage: StorageService) { }

  findByEmail(email: string) {
    return this.http.get(`${API_CONFIG.baseUrl}/customers/email?value=${email}`);
  }

  insert(obj: CustomerDTO) {
    return this.http.post(`${API_CONFIG.baseUrl}/customers`,
      obj,
      {
        observe: 'response',
        responseType: 'text',
      });
  }

}