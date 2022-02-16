const express = require("express");
const handlenbars = require("express-handlebars");
const productRouter = require('./routes/products')

const app = express()
const server = app.listen(8081,()=>{
    console.log("Listening on port 8081")
})


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/", productRouter);

app.engine("handlebars", handlenbars.engine());
app.set("views", "./views");
app.set("view engine", "handlebars");
