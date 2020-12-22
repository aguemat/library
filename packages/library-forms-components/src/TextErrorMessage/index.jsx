import React from "react";
import { withTranslation } from "react-i18next";
import { FieldErrorContainer } from "./TextErrorMessage.styled";

const FieldError = (props) => (
  <FieldErrorContainer className="error" type={props.type || "default"}>
    {props.t(props.children)}
  </FieldErrorContainer>
);

export default withTranslation()(FieldError);
