import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { CustomerDTO } from "../../models/customer.dto";
import { StorageService } from "../storage.service";

@Injectable()
export class CustomerService {

  constructor(public http: HttpClient, public storage: StorageService) { }

  findByEmail(email: string): Observable<CustomerDTO> {
    // temporario
    let token = this.storage.getLocalUser().token;
    let authHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + token });
    return this.http.get<CustomerDTO>(`${API_CONFIG.baseUrl}/customers/email?value=${email}`, { 'headers': authHeader });
  }

}