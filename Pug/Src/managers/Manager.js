const fs = require("fs");

path = "./Files/productos.JSON"

class Manager{
    get = async()=>{
        if(fs.existsSync(path)){
        let data = await fs.promises.readFile(path, "utf-8")
        let products = JSON.parse(data)
        if (products) return products;
        }
        else return{status:"error", error: "List not found"}
    }

    save = async (product)=>{

        try{
        if(fs.existsSync(path)){
            let data = await fs.promises.readFile(path, "utf-8")
            let products = JSON.parse(data)
            let id = products.length
            id++
            product.id = id      
            products.push(product)
            await fs.promises.writeFile(path,JSON.stringify(products,null,2))
            return {status:"success", message:"Product added"}
            

        }else{
        product.id = 1
        await fs.promises.writeFile(path,JSON.stringify([product],null,2))
        return {status:"success", message:"Product added"}

        }
       
    }
    catch(error){
        return{status:"error", message:error}
    }
}
}

module.exports = Manager;