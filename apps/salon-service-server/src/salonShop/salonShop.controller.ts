import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalonShopService } from "./salonShop.service";
import { SalonShopControllerBase } from "./base/salonShop.controller.base";

@swagger.ApiTags("salonShops")
@common.Controller("salonShops")
export class SalonShopController extends SalonShopControllerBase {
  constructor(protected readonly service: SalonShopService) {
    super(service);
  }
}
