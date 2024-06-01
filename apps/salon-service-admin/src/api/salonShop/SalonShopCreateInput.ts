import { InputJsonValue } from "../../types";

export type SalonShopCreateInput = {
  address?: string | null;
  image?: InputJsonValue;
  name?: string | null;
  ratings?: number | null;
  viewButton?: boolean | null;
};
