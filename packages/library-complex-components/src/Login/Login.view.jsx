import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { CenterContainer, ButtonsContainer } from "./Login.styled";
import { InputText, InputTextFormik } from "@aguemat/react-forms-components";
import { Button, Title } from "@aguemat/react-basic-components";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = (props) => {
  const { t, actionOnSubmit, formik } = props;
  return (
    <CenterContainer className="row justify-content-center align-items-center">
      <div className="col-10 col-sm-8 col-lg-5">
        <Title type="h3" className="text-center">
          {t("login.title")}
        </Title>
        <form
          className="form-horizontal bordered-row"
          onSubmit={actionOnSubmit}
        >
          <div className="row">
            <div className="col-12 login-padding-sup">
              {formik ? (
                <Field
                  id="user"
                  className="form-control input-login-sup"
                  name="user"
                  component={InputTextFormik}
                  fieldType="text"
                  placeholder={t("login.labels.use")}
                  typeStyleErrorMessage="in"
                />
              ) : (
                <InputText
                  id="user"
                  className="form-control input-login-sup"
                  name="user"
                  fieldType="text"
                  placeholder={t("login.labels.user")}
                />
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-12 login-padding-sup">
              {formik ? (
                <Field
                  id="password"
                  className="form-control input-login-inf"
                  name="password"
                  component={InputTextFormik}
                  fieldType="password"
                  placeholder={t("login.labels.password")}
                  typeStyleErrorMessage="in"
                />
              ) : (
                <InputText
                  id="password"
                  className="form-control input-login-sup"
                  name="password"
                  fieldType="password"
                  placeholder={t("login.labels.password")}
                />
              )}
            </div>
          </div>
          <ButtonsContainer className="text-center">
            <Button
              type="submit"
              className="btn btn-lg btn-block"
              variant="primary"
            >
              {t("login.button.signin")}
            </Button>
          </ButtonsContainer>
        </form>
      </div>
    </CenterContainer>
  );
};

LoginForm.propTypes = {
  actionOnSubmit: PropTypes.func,
  t: PropTypes.any,
  formik: PropTypes.bool,
};

export default LoginForm;
