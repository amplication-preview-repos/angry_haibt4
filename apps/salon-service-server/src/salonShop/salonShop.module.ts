import { Module } from "@nestjs/common";
import { SalonShopModuleBase } from "./base/salonShop.module.base";
import { SalonShopService } from "./salonShop.service";
import { SalonShopController } from "./salonShop.controller";
import { SalonShopResolver } from "./salonShop.resolver";

@Module({
  imports: [SalonShopModuleBase],
  controllers: [SalonShopController],
  providers: [SalonShopService, SalonShopResolver],
  exports: [SalonShopService],
})
export class SalonShopModule {}
