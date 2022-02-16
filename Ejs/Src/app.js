const express = require("express");
const productRouter = require('./routes/products')

const app = express()
const server = app.listen(8080,()=>{
    console.log("Listening on port 8080")
})


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/", productRouter);

app.set("views", "./views");
app.set("view engine", "ejs");
