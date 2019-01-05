import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
// Styles
import "./stylesButton.sass";

const Button = ({
  theme,
  size,
  onClick,
  className,
  type,
  disabled,
  children,
  id
}) => {
  // Union of classes for styles

  const classNames = classnames({
    [`Button`]: true,
    [`${theme}`]: theme,
    [`${size}`]: size,
    [`disabled`]: disabled,
    [`${className}`]: className
  });
  // Render Button with Props
  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      type={type}
      id={id}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: null,
  size: "Big",
  className: "",
  disabled: false,
  type: "",
  id: ""
};

Button.propTypes = {
  theme: PropTypes.oneOf(["Primary"]).isRequired,
  size: PropTypes.oneOf(["Small", "Medium", "Big"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string
};

export default Button;
