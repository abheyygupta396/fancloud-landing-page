import React from "react";

const Image = ({ id, src, className, alt, style = {} }) => {
  return (
    <img
      id={id}
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      style={style}
    />
  );
};

export default Image;
