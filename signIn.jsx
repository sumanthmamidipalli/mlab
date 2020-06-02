import React from "react";

function Signin(props) {
  return (
    <div className="signin">
      <h4>
        <a href="/#">{props.children}</a>
      </h4>
    </div>
  );
}

export default Signin;
