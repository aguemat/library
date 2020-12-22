import React from "react";
import PropTypes from "prop-types";
import { TextP, TextSpan } from "./Text.styled";
import "bootstrap/dist/css/bootstrap.min.css";

const Text = (props) => {
  const { type, className, align, themeFontSize, fontSize } = props;

  if (type === "span") {
    return (
      <TextSpan
        className={className}
        align={align}
        themeFontSize={themeFontSize}
        fontSize={fontSize}
      >
        {props.children}
      </TextSpan>
    );
  } else if (type === "p") {
    return (
      <TextP
        className={className}
        align={align}
        themeFontSize={themeFontSize}
        fontSize={fontSize}
      >
        {props.children}
      </TextP>
    );
  } else {
    return (
      <TextP
        className={className}
        align={align}
        themeFontSize={themeFontSize}
        fontSize={fontSize}
      >
        {props.children}
      </TextP>
    );
  }
};

Text.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["span", "p"]),
  themeFontSize: PropTypes.oneOf(["sm", "md", "lg", "xlg", "xxlg"]),
  fontSize: PropTypes.number,
  align: PropTypes.string,
};

export default Text;
