import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styled";
import "bootstrap/dist/css/bootstrap.min.css";

const Button = (props) => {
  const { type, expand, variant, className, ...resProps } = props;
  return (
    <ButtonStyled
      {...resProps}
      variant={variant || "default"}
      type={type}
      className={className}
      block={expand}
      // variant="primary"
    >
      {props.children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["submit", "button", "reset"]),
  variant: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["lg", "sm"]),
  expand: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
