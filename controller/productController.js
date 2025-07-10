import { Product } from "../model/Product.js";

export const createProduct = async(req,res)=>{
    try {
        const {name,price,description} = req.body
        const image = req.file.path;

        const newProduct = new Product({name,price,description,image});
        await newProduct.save();

        res.status(201).json({sucecess:true,product:newProduct})
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

export const getAllProducts = async(req,res)=>{
    const products = await Product.find();
    res.json(products);
}

export const getSingleProduct = async(req,res)=>{
    const product = await Product.findById(req.params.id);

    if(!product) return res.status(404).json({message:"NOT Found"});

    product.views +=1;
    await product.save();
    res.json(product);
};

export const updateProduct = async(req,res)=>{
    const { name,price,description } =req.body
    const product = await Product.findById(req.params.id);
    if(!product) return res.status(404).json({message:"Not found"});

    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    if(req.file) product.image = req.file.path;

    await product.save();
    res.json({sucecess:true,product});

}

export const deleteProduct = async(req,res)=>{
    await Product.findByIdAndDelete(req.params.id);
    res.json({sucecess:true,message:"Product Deleted"});
}