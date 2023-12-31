const Product = require("../models/product.model");
module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

module.exports.createProduct = (request, response) => {
  Product.create(request.body)
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};

module.exports.getAllProduct = (request, response) => {
  Product.find({})
      .then(product => {
          console.log(product); //console logs are optional, but they are highly recommended for troubleshooting!
          response.json(product);
      })
      .catch(err => {
          console.log(err)
          response.json(err)
      })
}

module.exports.getProduct = (request, response) => {
  Product.findOne({_id:request.params.id})
      .then(product => response.json(product))
      .catch(err => response.json(err));
}