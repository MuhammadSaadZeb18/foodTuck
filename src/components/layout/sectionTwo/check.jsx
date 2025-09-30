import "../../layout/sectionTwo/check.css";
import { useState } from "react";
import React from "react";
const Check = () => {
  const [checked1, setIsChecked1] = useState(false);
  const [checked2, setIsChecked2] = useState(false);
  const [checked3, setIsChecked3] = useState(false);
  return (
    <div className="checks">
      <ul>
        <li>
          <span
            onClick={() => setIsChecked1(!checked1)}
            className={
              checked1
                ? "material-symbols-outlined  checked"
                : "material-symbols-outlined noncheck"
            }
          >
            check
          </span>
          <h4>Experienced Chefs</h4>
        </li>
        <li>
          <span
            onClick={() => setIsChecked2(!checked2)}
            className={
              checked2
                ? "material-symbols-outlined checked"
                : "material-symbols-outlined noncheck"
            }
          >
            check
          </span>

          <h4>Fresh & Organic Foods</h4>
        </li>
        <li>
          <span
            onClick={() => setIsChecked3(!checked3)}
            className={
              checked3
                ? "material-symbols-outlined checked"
                : "material-symbols-outlined noncheck"
            }
          >
            check
          </span>

          <h4>Experienced Chefs</h4>
        </li>
      </ul>
    </div>
  );
};

export default Check;
