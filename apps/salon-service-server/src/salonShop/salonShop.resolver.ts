import * as graphql from "@nestjs/graphql";
import { SalonShopResolverBase } from "./base/salonShop.resolver.base";
import { SalonShop } from "./base/SalonShop";
import { SalonShopService } from "./salonShop.service";

@graphql.Resolver(() => SalonShop)
export class SalonShopResolver extends SalonShopResolverBase {
  constructor(protected readonly service: SalonShopService) {
    super(service);
  }
}
