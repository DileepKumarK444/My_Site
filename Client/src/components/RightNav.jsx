import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const RightNav = ({ data, handleClick }) => {
  //   console.log("datataa");
  const [active, setActive] = useState(data[0]._id);

  console.log(data);
  return (
    <>
      {data.map((item, index) => (
        <li key={index} data-id={item._id} onClick={handleClick}>
          <a
            data-id={item._id}
            // href={`#head${item.id}`}
            onClick={() => setActive(item._id)}
            className={`${active == item._id && "active"}`}
          >
            {item.module}
          </a>
        </li>
      ))}
    </>
  );
};

export default RightNav;
