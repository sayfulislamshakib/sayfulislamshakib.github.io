import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Copyright {greeting.full_name}
<<<<<<< HEAD
          {/* {greeting.title2} */}
=======
>>>>>>> 3647925d8827e9929dd94a7b4c052a77c2ea76a4
        </p>
      </Fade>
    </div>
  );
}
