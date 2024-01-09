function Icon({
  icon,
  alt,
  width,
  height,
  marginLeft,
  marginRight,
  func,
  color,
}) {
  const onClick = () => {
    if (func) func();
  };
  return (
    <img
      src={icon}
      alt={alt}
      onClick={onClick}
      style={{
        width: width ? width : "auto",
        height: height ? height : "auto",
        marginLeft: marginLeft ? marginLeft : "0px",
        marginRight: marginRight ? marginRight : "0px",
        cursor: func ? "pointer" : "auto",
        filter: color ? color : "",
      }}
    />
  );
}

export default Icon;
