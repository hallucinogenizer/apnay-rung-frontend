import "./styles.css";
import "./taimoor.css";
// Common Pages
import Homepage from "./Homepage.js";
import Product from "./Product.js";
import Catalog from "./Catalog";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import Artisans from "./Artisans.js";
import AddReview from "./AddReview";
import AboutUs from "./AboutUs";

// Admin Pages
import AdminPanel from "./AdminPanel";
import ViewAllOrders from "./ViewOrders";
import QueryForms from "./QueryForms";
import ViewSellers from "./ViewSellers";
import ViewAllProducts from "./ViewAllProducts";

// Customer Pages
import CustomerPanel from "./CustomerPanel";
import ShoppingCart from "./ShoppingCart";
import Checkout from "./Checkout";
import SignupCustomer from "./SignUpCustomer";
import SecurityPage from "./SecurityPage";
import OrderConfirmation from "./OrderConfirmation";
import CustomerSettings from "./CustomerSettings";
import AddQuery from "./AddQuery";

// Seller Pages
import SellerPanel from "./SellerPanel";
import SignupSeller from "./SignUpSeller";
import UploadCNIC from "./UploadCNIC";
import SellerSettings from "./SellerSettings";
import ViewTutorials from "./ViewTutorials";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Inventory from "./Inventory";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          {/* //  Admin Pages */}
          <Route path="/AdminPanel" exact component={AdminPanel} />
          <Route path="/ViewAllOrders" exact component={ViewAllOrders} />
          <Route path="/ViewAllProducts" exact component={ViewAllProducts} />
          <Route path="/ViewQueryForms" exact component={QueryForms} />
          <Route path="/ViewSellers" exact component={ViewSellers} />
          <Route path="/QueryForms" exact component={QueryForms} />



          {/* Customer Pages */}
          <Route path="/CustomerPanel" exact component={CustomerPanel} />
          <Route path="/ShoppingCart" exact component={ShoppingCart} />
          <Route path="/Checkout" exact component={Checkout} />
          <Route path="/OrderConfirmation" exact component={OrderConfirmation} />
          <Route path="/SignupCustomer" exact component={SignupCustomer} />
          <Route path="/SecurityPage" exact component={SecurityPage} />
          <Route path="/CustomerSettings" exact component={CustomerSettings} />
          <Route path="/AddReview" exact component={AddReview}/>
          <Route path="/AddQuery" exact component={AddQuery}/>


          {/* Sellers Pages */}
          <Route path="/SellerPanel" exact component={SellerPanel} />
          <Route path="/SignupSeller" exact component={SignupSeller} />
          <Route path="/UploadCNIC" exact component={UploadCNIC} />
          <Route path="/SellerSettings" exact component={SellerSettings} />
          <Route path="/ViewTutorials" exact component={ViewTutorials} />
          <Route path="/AddProduct" exact component={AddProduct} />
          <Route path="/UpdateProduct" exact component={UpdateProduct} />
          <Route path="/Inventory" exact component={Inventory} />



          {/* Common Pages */}
          <Route path="/" exact component={Homepage} />
          <Route path="/Homepage" exact component={Homepage} />
          <Route path="/Catalog" exact component={Catalog} />
          <Route path="/Product" exact component={Product} />
          <Route path="/Login" exact component={Login} />
          <Route path="/ForgotPassword" exact component={ForgotPassword} />
          <Route path="/ResetPassword" exact component={ResetPassword} />
          <Route path="/Artisans" exact component={Artisans} />
          <Route path="/AboutUs" exact component={AboutUs} />



        </div>
      </Switch>
    </Router>
  );
}