import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsLoader } from "../store/userSlice";
import ShoppingCart from "../components/ShoppingCart";

const Product = () => {
  const dispatch = useDispatch();

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
      <div className="w-full flex flex-row flex-wrap justify-center gap-x-4">
      {data?.products && !loading &&
        data?.products?.map((item: any) => {
          return (
            <ShoppingCart product={item} addToCard={2}/>
          );
        })}
    </div>
    </div>
  );
};

export default Product;
