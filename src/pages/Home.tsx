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
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-between" }}>
      {data?.products && !loading &&
        data?.products?.map((item: any) => {
          return (
            <ShoppingCart product={item}/>
          );
        })}
    </div>
  );
};

export default Product;
