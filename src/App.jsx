import { useState } from "react";
import "./app.css";
import Cart from "./Components/Cart";
import Nav from "./Components/Nav";
import Product from "./Components/Product";
import Productbox from "./Components/Productbox";

function App() {
  //====================== State variables Declared here===============//
  const [viewCart, setViewCart] = useState(false);
  const [cartItemCount, setCartItemCount] = useState();
  const [lightBox, setLightBox] = useState(false);
  const [lightBoxButtons] = useState(true);
  const [menu, setMenu] = useState(false);
  console.log(menu);

  // ====================== Function Declarations =========================//

  function Carthandler() {
    return viewCart ? setViewCart(false) : setViewCart(true);
  }

  //====================== return statment=========================//
  return (
    <div className="container">
      {/* Main content involves three components
        1. Navigation 
        2. Cart 
        3. Product Details 
     */}
      <div className={lightBox ? "main" : ""}>
        <Nav
          Carthandler={Carthandler}
          ItemCount={cartItemCount}
          menu={menu}
          setMenu={setMenu}
        />
        <Cart
          CardStatus={viewCart}
          ItemCount={cartItemCount}
          SetItemCount={setCartItemCount}
          menu={menu}
        />
        <Product
          SetItemCount={setCartItemCount}
          lightBox={lightBox}
          setLightBox={setLightBox}
        />
      </div>
      {/* Below component will appear top of all the components that why it is conditionally rendered to give background effects */}
      {lightBox && (
        <div className={"light-box"}>
          <Productbox
            onBigImageClick={setLightBox}
            intialValueOfLightBox={lightBox}
            lightBoxButtons={lightBoxButtons}
          />
        </div>
      )}
    </div>
  );
}

export default App;
