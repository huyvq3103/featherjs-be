import { Service, SequelizeServiceOptions } from "feathers-sequelize";
import { Application } from "../../declarations";
import { Params } from "@feathersjs/feathers";
import { BadRequest } from "@feathersjs/errors";

export class Cart extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }
  async create(data: any, params?: Params | undefined): Promise<any> {
    const cart = await this.Model.findOne({
      where: {
        productId: data.productId,
      },
    });
    if (cart) {
      throw new BadRequest("Cart da ton tai");
    }
    await this.Model.create(data);

    return Promise.resolve("ok");
  }
}
