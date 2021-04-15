import "./styles.css";
import "./taimoor.css";
// Common Pages
import Homepage from "./Homepage.js";
import Product from "./Product.js";
import Catalog from "./Catalog";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

// Admin Pages
import AdminPanel from "./AdminPanel";

// Customer Pages
import CustomerPanel from "./CustomerPanel";
import ShoppingCart from "./ShoppingCart";
import Checkout from "./Checkout";
import SignupCustomer from "./SignUpCustomer";
import SecurityPage from "./SecurityPage";
import OrderConfirmation from "./OrderConfirmation";

// Seller Pages
import SellerPanel from "./SellerPanel";
import SignupSeller from "./SignUpSeller";
import UploadCNIC from "./UploadCNIC";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          {/* //  Admin Pages */}
          <Route path="/AdminPanel" exact component={AdminPanel} />

          {/* Customer Pages */}
          <Route path="/CustomerPanel" exact component={CustomerPanel} />
          <Route path="/ShoppingCart" exact component={ShoppingCart} />
          <Route path="/Checkout" exact component={Checkout} />
          <Route path="/OrderConfirmation" exact component={OrderConfirmation} />
          <Route path="/SignupCustomer" exact component={SignupCustomer} />
          <Route path="/SecurityPage" exact component={SecurityPage} />

          {/* Sellers Pages */}
          <Route path="/SellerPanel" exact component={SellerPanel} />
          <Route path="/SignupSeller" exact component={SignupSeller} />
          <Route path="/UploadCNIC" exact component={UploadCNIC} />

          {/* Common Pages */}
          <Route path="/" exact component={Homepage} />
          <Route path="/Homepage" exact component={Homepage} />
          <Route path="/Catalog" exact component={Catalog} />
          <Route path="/Product" exact component={Product} />
          <Route path="/Login" exact component={Login} />
          <Route path="/ForgotPassword" exact component={ForgotPassword} />
          <Route path="/ResetPassword" exact component={ResetPassword} />

        </div>
      </Switch>
    </Router>
  );
}