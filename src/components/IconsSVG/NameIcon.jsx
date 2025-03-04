import PropTypes from "prop-types";
const NameIcon = ({ strokeColor = "#FAFAFA", ...props }) => {
  return (
    <svg fill="none" viewBox="0 0 14 15" {...props}>
      <path
        d="M13 14.25C13 13.2033 13 12.68 12.8708 12.2541C12.58 11.2953 11.8297 10.545 10.8709 10.2542C10.445 10.125 9.92167 10.125 8.875 10.125H5.125C4.07833 10.125 3.55499 10.125 3.12914 10.2542C2.17034 10.545 1.42003 11.2953 1.12918 12.2541C1 12.68 1 13.2033 1 14.25M10.375 4.125C10.375 5.98896 8.86396 7.5 7 7.5C5.13604 7.5 3.625 5.98896 3.625 4.125C3.625 2.26104 5.13604 0.75 7 0.75C8.86396 0.75 10.375 2.26104 10.375 4.125Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

NameIcon.propTypes = {
  strokeColor: PropTypes.string,
};
export default NameIcon;
