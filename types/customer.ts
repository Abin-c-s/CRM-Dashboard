export type CustomerStatus = "active" | "inactive" ;

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: CustomerStatus;
  company: string;
  lastContact: string;
  notes?: string;
}