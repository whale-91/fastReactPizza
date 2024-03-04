import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import Username from "../../ui/Username";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cartItems = useSelector(getCart);
  const dispatch = useDispatch();
  function handleClearCart() {
    dispatch(clearCart());
  }
  const userName = useSelector((e) => e.user.username);
  if (cartItems.length === 0) return <EmptyCart></EmptyCart>;
  return (
    <div className=" px-4 py-3">
      {/* <Link
        to="/menu"
        className=" text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Back to menu
      </Link> */}
      <LinkButton to={"/menu"}>&larr; Back to menu</LinkButton>
      <h2 className=" mt-7 flex items-center text-xl font-semibold">
        Your cart, {userName}
      </h2>
      <ul className=" mt-3 divide-y divide-stone-200 border-b">
        {cartItems.map((e) => (
          <CartItem item={e} key={e.pizzaId}></CartItem>
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        {/* <Link to="/order/new">Order pizzas</Link> */}
        <Button type="primary" to={"/order/new"}>
          order pizzas
        </Button>
        <Button type="secondary" onClick={handleClearCart}>
          clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
