import "./styles.css";
import "./taimoor.css";
// Common Pages
import Homepage from "./Homepage.js";
import Product from "./Product.js";
import Catalog from "./Catalog";
// import Login from "./TempLogin";

// Admin Pages
import AdminPanel from "./AdminPanel";

// Customer Pages
// import CustomerPanel from "./CustomerPanel";
// import ShoppingCart from "./ShoppingCart";
// import Checkout from "./Checkout";
// import SignupCustomer from "./TempSignup";
// import SecurityPage from "./TempSecurity";
import OrderConfirmation from "./OrderConfirmation";

// Seller Pages
// import SellerPanel from "./SellerPanel";
// import SignupSeller from "./SellerTempSignup";
// import UploadCNIC from "./TempCNIC";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          {/* //  Admin Pages */}
          <Route path="/AdminPanel" exact component={AdminPanel} />
          {/* Customer Pages */}
          {/* <Route path="/CustomerPanel" exact component={CustomerPanel} /> */}
          {/* <Route path="/ShoppingCart" exact component={ShoppingCart} /> */}
          {/* <Route path="/Checkout" exact component={Checkout} /> */}
          <Route path="/Product" exact component={Product} />
          <Route
            path="/OrderConfirmation"
            exact
            component={OrderConfirmation}
          />
          {/* <SignupCustomer /> */}
          {/* <Route path="/SignupCustomer" exact component={SignupCustomer} /> */}
          {/* Sellers Pages */}
          {/* <Route path="/SellerPanel" exact component={SellerPanel} /> */}
          {/* Common Pages */}
          <Route path="/" exact component={Homepage} />
          <Route path="/Catalog" exact component={Catalog} />
        </div>
      </Switch>
    </Router>
  );
}
