import React from "react";
import PropTypes from "prop-types";
import { LinkRouterDomStyled, LinkNormalStyled } from "./Link.styled";
import "bootstrap/dist/css/bootstrap.min.css";

const Link = (props) => {
  const { type, variant, className, to, ...resProps } = props;

  if (type && type === "routerDom") {
    return (
      <LinkRouterDomStyled
        variant={variant || "default"}
        to={to}
        className={className}
      >
        {props.children}
      </LinkRouterDomStyled>
    );
  } else {
    return (
      <LinkNormalStyled
        variant={variant || "default"}
        href={to || "#"}
        className={className}
        {...resProps}
      >
        {props.children}
      </LinkNormalStyled>
    );
  }
};

Link.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["routerDom"]),
  variant: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

export default Link;
