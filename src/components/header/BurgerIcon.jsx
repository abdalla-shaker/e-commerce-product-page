// eslint-disable-next-line react/prop-types
export default function BurgerIcon({ isActive, clickHandler }) {
  return (
    <div
      className={`burger-icon ${isActive ? "active" : ""}`}
      onClick={clickHandler}
    >
      <span className="line line-1"></span>
      <span className="line line-2"></span>
      <span className="line line-3"></span>
    </div>
  );
}
