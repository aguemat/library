import React, { Component } from "react";
import PropTypes from "prop-types";
import { withFormik } from "formik";
import { withTranslation } from "react-i18next";
import { dataModel, validationDataModel } from "./Login.data.form";
import LoginForm from "../Login.view";

class FormikLogin extends Component {
  render() {
    const { t, handleSubmit } = this.props;
    return <LoginForm t={t} actionOnSubmit={handleSubmit} formik />;
  }
}

FormikLogin.propTypes = {
  actionOnSubmit: PropTypes.func,
  t: PropTypes.any,
};

const LoginFormF = withFormik({
  mapPropsToValues: () => dataModel,
  validationSchema: validationDataModel,
  handleSubmit: (values, { props }) => {
    props.actionOnSubmit(values);
  },

  displayName: "LoginForm",
})(withTranslation()(FormikLogin));

export default LoginFormF;
