import React, { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import { Transition } from "react-transition-group";
import {
  ButtonStyled,
  ButtonsContainer,
  FilterContainer,
  Animation,
  LinkShowFilterStyled,
} from "./FormFilter.styled";
import { Button, Title } from "@aguemat/react-basic-components";

const EmployerFilterForm = (props) => {
  const {
    onReset,
    title,
    dataModel,
    validationDataModel,
    initialValues,
    textButtonClean,
    textButtonSumbit,
    classNamefilterContainer,
    classNameButtonsContainer,
    formName,
    iconDown,
    iconUp,
  } = props;
  const [showFilter, setShowFilter] = useState(true);

  const handlerShowFilter = () => {
    setShowFilter(!showFilter);
  };

  const setInitialValues = (initialValues, dataModel) => {
    const newValues = { ...dataModel };
    if (initialValues) {
      const items = Object.keys(newValues);
      items.forEach((item) => {
        if (initialValues[item]) {
          newValues[item] = initialValues[item];
        }
      });
      return newValues;
    }

    return dataModel;
  };

  return (
    <>
      <div className="row">
        <div className="col-10">
          <Title type="h5">
            {title}
            <LinkShowFilterStyled
              borderVariant="primary"
              variant="primary"
              onClick={() => handlerShowFilter()}
            >
              {showFilter ? (
                <i className={iconUp || "fas fa-angle-up"} />
              ) : (
                <i className={iconDown || "fas fa-angle-down"} />
              )}
            </LinkShowFilterStyled>
          </Title>
        </div>
      </div>
      <Transition in={showFilter} timeout={200} unmountOnExit>
        {(state) => (
          <Animation state={state} className="row">
            <div className="col-12">
              <FilterContainer className={classNamefilterContainer || ""}>
                <Formik
                  initialValues={
                    initialValues
                      ? setInitialValues(initialValues, dataModel)
                      : dataModel
                  }
                  validationSchema={validationDataModel}
                  displayName={formName || "defaultForm"}
                  onSubmit={(values) => {
                    props.onSubmit(values);
                  }}
                >
                  {(propsFormik) => (
                    <Form>
                      {props.children}
                      <div className="row">
                        <ButtonsContainer
                          className={`${
                            classNameButtonsContainer
                              ? classNameButtonsContainer
                              : ""
                          } col-12`}
                        >
                          <ButtonStyled
                            type="button"
                            variant="secondary"
                            onClick={() => {
                              onReset();
                              propsFormik.resetForm();
                            }}
                          >
                            {textButtonClean || "Clear"}
                          </ButtonStyled>
                          <Button type="submit" variant="primary">
                            {textButtonSumbit || "Submit"}
                          </Button>
                        </ButtonsContainer>
                      </div>
                    </Form>
                  )}
                </Formik>
              </FilterContainer>
            </div>
          </Animation>
        )}
      </Transition>
    </>
  );
};

EmployerFilterForm.propTypes = {
  handleSubmit: PropTypes.func,
  initialValues: PropTypes.object,
  onReset: PropTypes.func,
  title: PropTypes.string,
  dataModel: PropTypes.object,
  validationDataModel: PropTypes.any,
  textButtonClean: PropTypes.string,
  textButtonSumbit: PropTypes.string,
  formName: PropTypes.string.isRequired,
  classNamefilterContainer: PropTypes.string,
  classNameButtonsContainer: PropTypes.string,
  iconDown: PropTypes.string,
  iconUp: PropTypes.string,
};

export default EmployerFilterForm;
