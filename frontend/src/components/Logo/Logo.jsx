import PropTypes from "prop-types";

function Logo({ width }) {
  return (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5VwjGCFk83r3h03YOrtmdGNHNvO_c3L6-pBbgVYTu4g&s"
      alt="SIT"
      width={width}
    />
  );
}

export default Logo;

Logo.propTypes = {
  width: PropTypes.string.isRequired,
};
