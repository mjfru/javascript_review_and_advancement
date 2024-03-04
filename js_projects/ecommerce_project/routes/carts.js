const express = require("express");

const cartsRepo = require("../repositories/carts");
const router = express.Router();

// Receive a POST request to add an item to a cart
router.post("/cart/products", async (req, res) => {
  // console.log(req.body.productId);
  let cart;
  if (!req.session.cartId) {
    // We don't have a cart, need to create one and store the cart ID on req.session.cartId property
    cart = await cartsRepo.create({ items: [] });
    req.session.cartId = cart.id;
  } else {
    // Get it from the repository
    cart = await cartsRepo.getOne(req.session.cartId);
  }
  console.log(cart);
  // Either increment quantity for existing product

  // Or add new product to items array
  res.send("Product added to cart!");
});

// Receive a GET request to show all items in the cart

// Recieve a POST request to delete an item from a cart

module.exports = router;
