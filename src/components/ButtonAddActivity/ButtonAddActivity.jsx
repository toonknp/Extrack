import React from "react";

import "./ButtonAddActivity.scss";

function ButtonAddActivity() {
    const buttonSize = {
        height: '55px'
    }
  return (
    <div>
      <a href='/new-activity'>
        <img src="../../../public/assets/plus-sign.png" alt="" style={buttonSize}/>
      </a>
    </div>
  );
}

export default ButtonAddActivity;