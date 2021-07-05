import nextIcon from "./../../assets/next.svg";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      style={{ ...style, display: "block" }}
      src={nextIcon}
      alt="next"
      onClick={onClick}
    />
  );
}

export default NextArrow;
