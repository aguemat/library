import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import LoginForm from "./Login.view";

class NormalLogin extends Component {
  render() {
    const { t, actionOnSubmit } = this.props;
    return <LoginForm t={t} actionOnSubmit={actionOnSubmit} />;
  }
}

NormalLogin.propTypes = {
  actionOnSubmit: PropTypes.func,
  t: PropTypes.any,
};

export default withTranslation()(NormalLogin);
