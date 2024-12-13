import { useNavigate } from "react-router-dom";

export default function Addtocart({ img, fruitname, price, addToCart }) {
  const navigate = useNavigate(); // Initialize the navigate function

  function handleBill() {
    navigate("/bill"); // Navigate to the Bill page
  }

  return (
    <div className="flex flex-col items-center">
      <img src={img} className="mt-3 w-56" alt={fruitname} />
      <div className="text-2xl font-medium hover:text-pink-800 text-center">
        {fruitname}
        <br />${price}
      </div>
      <button onClick={addToCart} className="btn btn-warning mb-2">
        Add to Cart
      </button>
      <button className="btn btn-warning mb-2" onClick={handleBill}>
        Add Bill
      </button>
    </div>
  );
}
