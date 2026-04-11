import React from "react";
import Tilt from "react-parallax-tilt";

const TiltCard = ({
  children,
  className = "",
  glareEnable = true,
  scale = 1.05,
}) => {
  return (
    <Tilt
      className={className}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={1000}
      scale={scale}
      transitionSpeed={400}
      gyroscope={true}
      glareEnable={glareEnable}
      glareMaxOpacity={0.3}
      glareColor="#ffffff"
      glarePosition="all"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </Tilt>
  );
};

export default TiltCard;
