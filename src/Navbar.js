import "./styles.css";

export default function App() {
  return (
    <div className="Topbar">
      <img class="logo" src="/css/logo.png" alt="logo" />
      <a href="#home">Home</a>
      <a href="panel.html" class="active">
        {" "}
        Panel
      </a>
      <a href="#contact">Contact Us</a>
      <p>
        Rohan Hussain <br /> Admin
      </p>
      {/* <input type="button" class="logout_button" value="Logout" /> */}
      {/* // <input type="button" class="notif" value="" />
      //{" "}
      <div class="container">
        // <img src="/css/admin_panel/ellipse.png" id="ellipse" />
        //{" "} */}
    </div>
  );
}
