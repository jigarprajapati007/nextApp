import React from "react";
import Image from "next/image";
import adventure from "../assets/Adventure.jpg";
export const Picture = () => {
  return (
    <div className="side-picture">
      <h1 className="img-h1-title">Adventure Is Exciting</h1>
      <h1 className="img-h1">
        Adventures are exciting experiences that can be bold and sometimes
        risky. They can include activities like traveling, exploring.
      </h1>
      <Image className="picture" src={adventure} alt={"adventure"} />
    </div>
  );
};
