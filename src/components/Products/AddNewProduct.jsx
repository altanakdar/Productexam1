import React from "react";
import ProductInput from "./ProductInput";

const productInputs = [
  {
    label: "Title*",
    type: "text",
    placeholder: "Ürün ismi giriniz",
    name: "title",
  },
  {
    label: "Image*",
    type: "text",
    placeholder: "Ürün görseli giriniz",
    name: "image",
  },
  {
    label: "Description*",
    type: "text",
    placeholder: "Ürün açıklaması giriniz",
    name: "description",
  },
  {
    label: "Price*",
    type: "number",
    placeholder: "Ürün fiyatı giriniz",
    name: "price",
  },
];

const AddNewProduct = ({ handleSubmit, productData, setProductData }) => {
  
  function handleChange({ target: { name, value } }) {
    setProductData({ ...productData, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    handleSubmit(productData);

    setProductData({
      title: "",
      image: "",
      price: "",
      description: "",
    });
  }

  return (
    <div>
      <form
        className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mt-10 space-y-6"
        onSubmit={onSubmit}
      >
        {productInputs.map((input, index) => (
          <ProductInput
            key={index}
            value={productData[input.name]}
            {...input}
            handleChange={handleChange}
          />
        ))}
        <div className="flex items-center justify-center">
          <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 ml-4">
            Add New Produt
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewProduct;
