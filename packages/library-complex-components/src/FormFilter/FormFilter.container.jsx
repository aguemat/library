import React, { Component } from "react";
import PropTypes from "prop-types";
import Filter from "./FormFilter.view";

class FilterEmployerContainer extends Component {
  async handlerOnSubmitFilter(values) {
    let newFilter = {};

    const valuesFilters = Object.entries(values);
    valuesFilters.forEach((value) => {
      if (value[1] && value[1].toString().length > 0) {
        newFilter[value[0]] = value[1];
      }
    });

    this.props.setFilters(newFilter);
  }

  handlerOnCleanFilter() {
    this.props.setFilters(undefined);
  }

  render() {
    const {
      dataModel,
      validationDataModel,
      initialValues,
      title,
      textButtonClean,
      textButtonSumbit,
      classNamefilterContainer,
      classNameButtonsContainer,
      formName,
      iconDown,
      iconUp,
    } = this.props;
    return (
      <Filter
        dataModel={dataModel}
        validationDataModel={validationDataModel}
        initialValues={initialValues}
        title={title}
        textButtonClean={textButtonClean}
        textButtonSumbit={textButtonSumbit}
        onSubmit={(values) => {
          this.handlerOnSubmitFilter(values);
        }}
        onReset={() => {
          this.handlerOnCleanFilter();
        }}
        formName={formName}
        iconDown={iconDown}
        iconUp={iconUp}
        classNamefilterContainer={classNamefilterContainer}
        classNameButtonsContainer={classNameButtonsContainer}
      >
        {this.props.children}
      </Filter>
    );
  }
}

FilterEmployerContainer.propTypes = {
  setFilters: PropTypes.func.isRequired,
  dataModel: PropTypes.object.isRequired,
  validationDataModel: PropTypes.any.isRequired,
  initialValues: PropTypes.object,
  title: PropTypes.string,
  textButtonClean: PropTypes.string,
  textButtonSumbit: PropTypes.string,
  formName: PropTypes.string.isRequired,
  classNamefilterContainer: PropTypes.string,
  classNameButtonsContainer: PropTypes.string,
  iconDown: PropTypes.string,
  iconUp: PropTypes.string,
};

export default FilterEmployerContainer;
