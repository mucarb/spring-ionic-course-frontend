import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../config/api.config";
import { CustomerDTO } from "../../models/customer.dto";
import { ImageUtilService } from "../image-util.service";
import { StorageService } from "../storage.service";

@Injectable()
export class CustomerService {

  constructor(
    public http: HttpClient,
    public storage: StorageService,
    public imageUtilService: ImageUtilService) { }

  findById(id: string) {
    return this.http.get(`${API_CONFIG.baseUrl}/customers/${id}`);
  }

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

  uploadPicture(picture) {
    let pictureBlob = this.imageUtilService.dataUriToBlob(picture);
    let formData: FormData = new FormData();
    formData.set('file', pictureBlob, 'file.png');
    return this.http.post(`${API_CONFIG.baseUrl}/customers/picture`,
      formData,
      {
        observe: 'response',
        responseType: 'text',
      });
  }

}