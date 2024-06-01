import { SalonShopWhereInput } from "./SalonShopWhereInput";
import { SalonShopOrderByInput } from "./SalonShopOrderByInput";

export type SalonShopFindManyArgs = {
  where?: SalonShopWhereInput;
  orderBy?: Array<SalonShopOrderByInput>;
  skip?: number;
  take?: number;
};
