const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
  app.get("/api", ProductController.index);
  app.post("/api/products", ProductController.createProduct);
  app.get('/api/products', ProductController.getAllProduct);
  app.get('/api/products/:id', ProductController.getProduct);

};
