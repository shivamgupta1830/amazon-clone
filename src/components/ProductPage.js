import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { callAPI } from "../utils/CallApi";
import { IND_CURRENCY } from "../utils/constants";
import ProductDetails from "./ProductDetails";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState("1");
  const dispatch = useDispatch();

  const getProduct = () => {
    callAPI(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };

  const addQuantityToProduct = () => {
    setProduct((product.quantity = quantity));
    return product;
  };

  useEffect(() => {
    getProduct();
  });

  if (!product?.title) return <h1>Loading Product...</h1>;

  return (
    product && (
      <div className="h-screen bg-amazonclone-background">
        <div className="max-w-[1500px] min-w-[1000px] m-auto p-4">
          <div className="grid grid-cols-10 gap-2">
            {/* left */}
            <div className="col-span-3 rounded m-auto bg-white p-8">
              <img src={`${product.image}`} alt="#" />
            </div>

            {/* middle */}
            <div className="col-span-5 rounded bg-white divide-y divide-gray-400 p-4">
              <div className="mb-3">
                <ProductDetails product={product} ratings={true} />
              </div>
              <div className="text-base xl:text-lg mt-3">
                {product.description}
              </div>
            </div>

            {/* right */}
            <div className="col-span-2 p-4 bg-white">
              <div className="text-xl xl:text-2xl font-semibold text-red-700 text-right">
                {IND_CURRENCY.format(product.price)}
              </div>
              <div className="text-base xl:text-xl font-semibold text-gray-500 text-right">
                RRP:{" "}
                <span className="line-through">
                  {IND_CURRENCY.format(product.oldPrice)}{" "}
                </span>
              </div>
              <div className="text-sm xl:text-base font-semibold text-blue-500 mt-3">
                FREE Returns
              </div>
              <div className="text-sm xl:text-base font-semibold text-blue-500">
                Free Delivery
              </div>
              <div className="text-base xl:text-lg font-semibold text-green-700 mt-1">
                In Stock
              </div>
              <div className="text-base xl:text-lg">
                Quantity:{" "}
                <select
                  className="p-2 bg-white border rounded-md focus:border-indigo-600"
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <Link to={"/checkout"}>
                <button
                  className="btn"
                  onClick={() => dispatch(addToCart(addQuantityToProduct()))}
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
