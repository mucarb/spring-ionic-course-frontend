import { PaymentDTO } from "./payment.dto";
import { PurchaseItem } from "./purchase-item.dto";
import { RefDTO } from "./ref.dto";

export interface PurchaseDTO {
  customer: RefDTO;
  deliveryAddress: RefDTO;
  payment: PaymentDTO;
  items: PurchaseItem[];
}