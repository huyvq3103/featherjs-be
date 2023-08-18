import { HookContext, HooksObject } from "@feathersjs/feathers";
import { Model } from "sequelize";

export default {
  before: {
    all: [],
    find: [
      async (context: HookContext) => {
        const { params, app } = context;

        params.sequelize = {
          attributes: ["quantity", "id"],

          include: [
            {
              model: app.service("products").Model,
            },
          ],
          raw: false,
        };
      },
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
