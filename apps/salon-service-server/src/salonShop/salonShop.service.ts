import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalonShopServiceBase } from "./base/salonShop.service.base";

@Injectable()
export class SalonShopService extends SalonShopServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
