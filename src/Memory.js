import React from "react";
import "./styles.css";
// import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Memory = (props, panel) => {
  panel = props.panel.split(" ").join("");
  console.log(props.panel);
  panel_string = `/${panel}`;

  try {
    page = props.page.split(" ").join("");
    page_string = `/${page}`;
  } catch {
    page_string = "";
  }

  try {
    current = props.current.split(" ").join("");
    current_string = `/${current}`;
  } catch {
    current_string = "";
  }

  return (
    <div className="memory">
      <span>
        <Link to={panel_string}>{props.panel}</Link>
      </span>
      {page_string !== "" ? <Link to={page_string}>/{props.page}</Link> : null}
      {current_string !== "" ? (
        <span className="current-page">
          <Link to={current_string}>/{props.current}</Link>
        </span>
      ) : null}
    </div>
  );
};

export default Memory;
