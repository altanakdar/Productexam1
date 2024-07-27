import React, { useState } from "react";
import ProductItem from "./ProductItem";
import AddNewProduct from "./AddNewProduct";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [productData, setProductData] = useState({
        title: "",
        image: "",
        price:"",
        description: "",
    });

    function handleSubmit(productData){
        const newProduct = {
            ...productData,
            id:Math.random(),
            price: Number(productData.price),
        };
        setProducts([newProduct, ...products ]); 
    }

    function fetchProducts(){
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err))
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold mb-5">Products Component</h2>
            <button onClick={fetchProducts} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Get All Products</button>
            <AddNewProduct
             handleSubmit={handleSubmit}
             productData={productData}
             setProductData={setProductData}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {products.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Product;
