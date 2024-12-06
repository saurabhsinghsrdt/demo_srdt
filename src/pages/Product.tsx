import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsLoader } from "../store/userSlice";
import ShoppingCart from "../components/ShoppingCart";
import AddProduct from "./AddProduct";

const Product = () => {
  const dispatch = useDispatch();

  const [addProductPopup, setAddProductPopup] = useState<boolean>(false);

  const { loading, data, error } = useSelector((state: any) => state.user);

  console.log(data, "gggggggggggggggg");

  useEffect(() => {
    dispatch(productsLoader());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="centered-container">
        <img src="https://media.tenor.com/kMCwoAD4RNAAAAAj/loading-gif-loading.gif" alt="Loading" className="centered-image" />
      </div>
    );
  }
  if (error) {
    return <div>{error || "ERROR"}</div>;
  }

  return (
    <div className="mx-auto px-2">
      <div className="flex justify-end">
      <button
  onClick={() => setAddProductPopup(true)}
  className="w-full sm:w-40 mt-4 h-12 sm:mr-9 bg-black text-white rounded-full hover:bg-blue-600"
>
  Add Product
</button>

      </div>
      <div className="w-full flex flex-row flex-wrap justify-center gap-x-4">
        {data?.products && !loading &&
          data?.products?.map((item: any) => {
            return (
              <ShoppingCart product={item} addToCard={2} />
            );
          })}
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50
              transition-all duration-300 ease-in-out transform ${addProductPopup
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75 pointer-events-none"
          }`}
      >

        {addProductPopup && (
          <AddProduct
            closePopup={() => setAddProductPopup(false)}
          />
        )

        }
      </div>
    </div>
  );
};

export default Product;