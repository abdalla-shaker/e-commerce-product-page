import CartShoppingContext from "./store/CartShoppingContext.jsx";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";

function App() {
  return (
    <CartShoppingContext>
      <Header />
      <Main />

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="abdalla-shaker.github.io/portfolio">Abdalla shaker</a>.
      </div>
    </CartShoppingContext>
  );
}

export default App;
