import { SalonShop as TSalonShop } from "../api/salonShop/SalonShop";

export const SALONSHOP_TITLE_FIELD = "name";

export const SalonShopTitle = (record: TSalonShop): string => {
  return record.name?.toString() || String(record.id);
};
