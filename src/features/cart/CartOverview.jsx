import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";
import { formatCurrency } from "../../utilities/helpers";

function CartOverview() {
  const cartQuantity = useSelector(getTotalQuantity);
  const cartTotalPrice = useSelector(getTotalPrice);
  if (!cartQuantity) return null;
  return (
    <div className="flex h-min items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className=" space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>
          {cartQuantity === 0
            ? ""
            : cartQuantity === 1
              ? `${cartQuantity} pizza`
              : `${cartQuantity} pizzas`}
        </span>
        <span>{formatCurrency(cartTotalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
