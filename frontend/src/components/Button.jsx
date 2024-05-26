import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function Button({
  type,
  title,
  goto,
  bgColor = "white",
  textColor = "black",
}) {
  const navigate = useNavigate();
  return type.toLowerCase() === "secondary" ? (
    <button
      type="button"
      className={`rounded-md bg-${bgColor} px-3 py-2 text-sm font-semibold text-${textColor} shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
    >
      {title}
    </button>
  ) : (
    <button
      type="button"
      className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      onClick={() => navigate(goto)}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
