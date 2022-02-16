const express = require('express')
const router = express.Router();
const Manager = require('../managers/Manager')
let admin = new Manager()

router.get('/products', (req,res)=>{
    admin.get().then(products=>res.render("products", { products: products }))
})

router.get("/", (req, res) => {
    res.render("form");
  });

router.post('/',(req,res)=>{
    let product = req.body
    admin.save(product).then(result=>console.log(result))
    res.redirect("/");
})

module.exports = router;