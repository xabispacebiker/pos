odoo.define('pos_default_empty_image.models', function (require) {
    "use strict";

    var models = require('point_of_sale.models');

    models.load_fields('product.product', ['image_1920']);

});