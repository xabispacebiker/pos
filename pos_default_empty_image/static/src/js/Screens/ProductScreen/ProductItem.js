odoo.define("pos_default_empty_image.ProductItem", function (require) {
    "use strict";

    const ProductItem = require("point_of_sale.ProductItem");
    const Registries = require("point_of_sale.Registries");

    const PDEIProductItem = (ProductItem) =>
        class extends ProductItem {
            get hasImage() {
                const product = this.props.product;
                return Boolean(product.image_1920)
            }
        };

    Registries.Component.extend(ProductItem, PDEIProductItem);

    return ProductItem
});