import { Appointment } from "../appointment/Appointment";

export type Property = {
  address: string | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  description: string | null;
  forSale: boolean | null;
  id: string;
  price: number | null;
  size: number | null;
  updatedAt: Date;
};
