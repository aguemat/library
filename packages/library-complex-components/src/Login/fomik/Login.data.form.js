import * as Yup from "yup";

export const dataModel = {
    user: '', 
    password: ''
}

export const validationDataModel = Yup.object().shape({
    user: Yup.string()
      .required('forms.validations.required'),
    password: Yup.string()
      .required('forms.validations.required'),
  });