import { JsonValue } from "type-fest";

export type SalonShop = {
  address: string | null;
  createdAt: Date;
  id: string;
  image: JsonValue;
  name: string | null;
  ratings: number | null;
  updatedAt: Date;
  viewButton: boolean | null;
};
