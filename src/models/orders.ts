export interface orders
{
  orderId: number;
  invoiceId: number;
  paymentOptions: string;
  status: string;
  date: string;
  amount: number;
  qty: number;
  Items: string[];
  requiredTime: string;
}
