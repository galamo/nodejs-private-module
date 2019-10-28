const pm = require("./PrivateModule");
console.log("using inside product class file, ", pm.message);
module.exports = class Product {
  constructor(_id, _price) {
    this.id = _id;
    this.price = _price;
  }
};
