/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SalonShopService } from "../salonShop.service";
import { SalonShopCreateInput } from "./SalonShopCreateInput";
import { SalonShop } from "./SalonShop";
import { SalonShopFindManyArgs } from "./SalonShopFindManyArgs";
import { SalonShopWhereUniqueInput } from "./SalonShopWhereUniqueInput";
import { SalonShopUpdateInput } from "./SalonShopUpdateInput";
import { SalonShopXmlDto } from "../SalonShopXmlDto";

export class SalonShopControllerBase {
  constructor(protected readonly service: SalonShopService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SalonShop })
  async createSalonShop(
    @common.Body() data: SalonShopCreateInput
  ): Promise<SalonShop> {
    return await this.service.createSalonShop({
      data: data,
      select: {
        address: true,
        createdAt: true,
        id: true,
        image: true,
        name: true,
        ratings: true,
        updatedAt: true,
        viewButton: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SalonShop] })
  @ApiNestedQuery(SalonShopFindManyArgs)
  async salonShops(@common.Req() request: Request): Promise<SalonShop[]> {
    const args = plainToClass(SalonShopFindManyArgs, request.query);
    return this.service.salonShops({
      ...args,
      select: {
        address: true,
        createdAt: true,
        id: true,
        image: true,
        name: true,
        ratings: true,
        updatedAt: true,
        viewButton: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SalonShop })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async salonShop(
    @common.Param() params: SalonShopWhereUniqueInput
  ): Promise<SalonShop | null> {
    const result = await this.service.salonShop({
      where: params,
      select: {
        address: true,
        createdAt: true,
        id: true,
        image: true,
        name: true,
        ratings: true,
        updatedAt: true,
        viewButton: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SalonShop })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSalonShop(
    @common.Param() params: SalonShopWhereUniqueInput,
    @common.Body() data: SalonShopUpdateInput
  ): Promise<SalonShop | null> {
    try {
      return await this.service.updateSalonShop({
        where: params,
        data: data,
        select: {
          address: true,
          createdAt: true,
          id: true,
          image: true,
          name: true,
          ratings: true,
          updatedAt: true,
          viewButton: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SalonShop })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSalonShop(
    @common.Param() params: SalonShopWhereUniqueInput
  ): Promise<SalonShop | null> {
    try {
      return await this.service.deleteSalonShop({
        where: params,
        select: {
          address: true,
          createdAt: true,
          id: true,
          image: true,
          name: true,
          ratings: true,
          updatedAt: true,
          viewButton: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/salon-shops/xml")
  @swagger.ApiOkResponse({
    type: SalonShopXmlDto,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetSalonShopsAsXml(
    @common.Body()
    body: string[]
  ): Promise<SalonShopXmlDto[]> {
    return this.service.GetSalonShopsAsXml(body);
  }
}
