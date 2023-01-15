"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query("api::product.product").findOne({
      where: { slug },
      populate: [
        "image.desktop",
        "image.tablet",
        "image.mobile",
        "gallery.first.mobile",
        "gallery.second.mobile",
        "gallery.third.mobile",
        "gallery.first.tablet",
        "gallery.second.tablet",
        "gallery.third.tablet",
        "gallery.first.desktop",
        "gallery.second.desktop",
        "gallery.third.desktop",
        "categoryImage.mobile",
        "categoryImage.tablet",
        "categoryImage.desktop",
        "others.shared.mobile",
        "others.shared.tablet",
        "others.shared.desktop",
        "cartImage",
      ],
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
  async findAll(ctx) {
    const entries = await strapi.entityService.findMany(
      "api::product.product",
      {
        fields: ["slug"],
      }
    );

    return entries;
  },
}));
