import prevIcon from "./../../assets/left-arrow.svg";

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      style={{ ...style, display: "block" }}
      src={prevIcon}
      alt="previous"
      onClick={onClick}
    />
  );
}

export default PrevArrow;
