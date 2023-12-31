// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from "sequelize";
import { Application } from "../declarations";
import { HookReturn } from "sequelize/types/hooks";

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get("sequelizeClient");
  const cart = sequelizeClient.define(
    "cart",
    {
      quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
    },
    {
      hooks: {
        beforeCount(options: any): HookReturn {
          options.raw = true;
        },
      },
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (cart as any).associate = function (models: any): void {
    // Define associations here
    const { products } = models;
    cart.belongsTo(products, {
      foreignKey: "productId",
    });
    // See https://sequelize.org/master/manual/assocs.html
  };

  return cart;
}
