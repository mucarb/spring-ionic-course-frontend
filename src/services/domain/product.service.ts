import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../config/api.config";
import { ProductDTO } from "../../models/product.dto";

@Injectable()
export class ProductService {

  constructor(public http: HttpClient) {
  }

  findById(productId: string) {
    return this.http.get<ProductDTO>(`${API_CONFIG.baseUrl}/products/${productId}`)
  }

  findByCategory(category_id: string) {
    return this.http.get<ProductDTO[]>(`${API_CONFIG.baseUrl}/products?categories=${category_id}`);
  }

}