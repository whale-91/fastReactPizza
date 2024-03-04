import { Link } from "react-router-dom";

function Button({ onClick, children, isSubmitting, to, type }) {
  const base =
    " inline-block  rounded-full bg-yellow-400  font-semibold  uppercase tracking-wide text-stone-800  transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-xm",

    secondary:
      " inline-block px-4 py-2.5 md:px-6 md:py-3.5 rounded-full bg-transparent border-2 border-stone-300  font-semibold  uppercase tracking-wide text-stone-800  transition-colors duration-300 hover:text-stone800 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 disabled:cursor-not-allowed ",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button
        onClick={onClick}
        disabled={isSubmitting}
        className={styles[type]}
      >
        {children}
      </button>
    );
  return (
    <button disabled={isSubmitting} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;