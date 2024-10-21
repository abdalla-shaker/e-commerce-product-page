import Images from "./Images.jsx";
import ProductDetails from "./ProductDetails";

import "./main.css";
import "./main-responsive.css";

export default function Main() {
  return (
    <main id="main">
      <div className="container main-cont flex justify-between items-center">
        <Images />
        <ProductDetails />
      </div>
    </main>
  );
}
