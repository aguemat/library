import React from "react";
import PropTypes from "prop-types";
import { TitleH1, TitleH2, TitleH3, TitleH4, TitleH5 } from "./Title.styled";
import "bootstrap/dist/css/bootstrap.min.css";

const Title = (props) => {
  const { type, className } = props;

  if (type === "h1") {
    return <TitleH1 className={className}>{props.children}</TitleH1>;
  } else if (type === "h2") {
    return <TitleH2 className={className}>{props.children}</TitleH2>;
  } else if (type === "h3") {
    return <TitleH3 className={className}>{props.children}</TitleH3>;
  } else if (type === "h4") {
    return <TitleH4 className={className}>{props.children}</TitleH4>;
  } else if (type === "h5") {
    return <TitleH5 className={className}>{props.children}</TitleH5>;
  } else {
    return <TitleH1 className={className}>{props.children}</TitleH1>;
  }
};

Title.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5"]),
};

export default Title;
