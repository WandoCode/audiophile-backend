"use strict";

/**
 * layout-data controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::layout-data.layout-data",
  ({ strapi }) => ({
    async find(ctx) {
      const entity = await strapi.service("api::layout-data.layout-data").find({
        populate: [
          "mainDescriptionImages.mobile",
          "mainDescriptionImages.tablet",
          "mainDescriptionImages.desktop",
          "image1",
          "image2",
          "image3",
        ],
      });

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
