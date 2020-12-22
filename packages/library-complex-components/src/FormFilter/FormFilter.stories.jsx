import React from "react";
import FormFilter from ".";
import { action } from "@storybook/addon-actions";
import { Field } from "formik";
import { InputTextFormik } from "@aguemat/react-forms-components";
import * as Yup from "yup";

export default {
  title: "Complex/Forms/Filter Form",
  component: FormFilter,
};

const dataModel = {
  name: "",
  surname: "",
};

const validationDataModel = Yup.object().shape({
  name: Yup.string().required("Field Required"),
  surname: Yup.string().optional("Field Required"),
});

const Template = (args) => (
  <FormFilter {...args}>
    <div className="row">
      <div className="col-12">
        <Field
          id="name"
          className="form-control"
          labelField="Name"
          name="name"
          component={InputTextFormik}
          fieldType="text"
          placeholder=""
        />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Field
          id="surname"
          className="form-control"
          labelField="Surname"
          name="surname"
          component={InputTextFormik}
          fieldType="text"
          placeholder=""
        />
      </div>
    </div>
  </FormFilter>
);

export const FormFilterTemplate = Template.bind({});
FormFilterTemplate.args = {
  dataModel: dataModel,
  validationDataModel: validationDataModel,
  title: "Filter Test",
  setFilters: action("Filter submitted"),
  textButtonSumbit: "Send",
  textButtonClean: "Clean",
  formName: "TestFilterForm",
};
