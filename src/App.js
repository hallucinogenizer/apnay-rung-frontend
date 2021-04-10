import "./styles.css";
// Common Pages
// import Product from "./Product";
import Notifications from "./Notifications";
import Homepage from "./Homepage.js";

// Admin Pages
import AdminPanel from "./AdminPanel";
import AdminNavbar from "./AdminNavbar";
import AdminSettings from "./AdminSettings";
import ApproveSellers from "./ApproveSellers";
import ViewSellers from "./ViewSellers";
import ViewCustomers from "./ViewCustomers";

// Customer Pages
import CustomerNavbar from "./CustomerNavbar";
import CustomerPanel from "./CustomerPanel";
import ShoppingCart from "./ShoppingCart";
import Checkout from "./Checkout";
import SignUpCustomer from "./SignUpCustomer";
import Catalog from "./Catalog";
import NewCheckout from "./NewCheckout";
import OrderConfirmation from "./OrderConfirmation";

// Seller Pages
import SellerPanel from "./SellerPanel";
import Tutorials from "./Tutorials";
import SellerNavbar from "./SellerNavbar";
import ViewOrders from "./ViewOrders";
import Inventory from "./Inventory";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          {/* //  Admin Pages */}
          <Route path="/AdminPanel" exact component={AdminPanel} />
          <Route path="/AdminSettings" exact component={AdminSettings} />
          <Route path="/ApproveSellers" exact component={ApproveSellers} />
          <Route path="/ViewSellers" exact component={ViewSellers} />
          <Route path="/ViewCustomers" exact component={ViewCustomers} />
          {/* Customer Pages */}
          <Route path="/CustomerNavbar" exact component={CustomerNavbar} />
          <Route path="/CustomerPanel" exact component={CustomerPanel} />
          <Route path="/ShoppingCart" exact component={ShoppingCart} />
          <Route path="/Checkout" exact component={Checkout} />
          {/* <Route path="/Catalog" exact component={Catalog} /> */}

          {/* <Route path="/CustomerSettings" exact component={CustomerSettings} /> */}
          {/* <Route path="/CustomerSettings" exact component={CustomerSettings} /> */}
          {/* <Route path="/ViewAllProducts" exact component={ViewAllProducts} /> */}
          {/* <Route path="/QueryForms" exact component={QueryForms} /> */}
          {/* <SignupCustomer /> */}
          {/* Sellers Pages */}
          <Route path="/SellerPanel" exact component={SellerPanel} />
          <Route path="/Tutorials" exact component={Tutorials} />
          <Route path="/ViewOrders" exact component={ViewOrders} />
          {/* <Route path="/Inventory" exact component={Inventory} /> */}
          {/* Common Pages */}
          {/* <Route path="/Catalog" exact component={Catalog} /> */}
          {/* <Route path="/Homepage" exact component={Homepage} /> */}
          {/* <Route path="/Notifications" exact component={Notifications} /> */}
          {/* <Homepage /> */}
          {/* <CustomerPanel /> */}
          {/* <Catalog /> */}
          {/* <SecurityPage /> */}
          {/* <SignUpCustomer /> */}
          <NewCheckout />
        </div>
      </Switch>
    </Router>
  );
}


    </Router>
  );
}
