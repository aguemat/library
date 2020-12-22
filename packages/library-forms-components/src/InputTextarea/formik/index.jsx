import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "formik";
import TextErrorMessage from "../../TextErrorMessage";
import { TextareaStyled } from "../InputTextarea.styled";
import "bootstrap/dist/css/bootstrap.min.css";

class InputTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:
        this.props.field && this.props.field.value
          ? this.props.field.value
          : "",
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.field.value !== this.props.field.value) {
      this.setValue(this.props.field.value);
    }
  }

  setValue(newValue) {
    this.setState({ value: newValue });
  }

  handlerOnchangeValue(event) {
    this.setValue(event.target.value);
  }

  render() {
    const {
      field: { name, onChange, ...resInput },
      id,
      labelField,
      placeholder,
      className,
      divClassName,
      readOnly,
      mandatory,
      visible,
      tooltip,
      typeStyleErrorMessage,
      rows,
    } = this.props;

    return (
      <div
        id={`${id}_Container`}
        className={`${
          visible !== undefined && visible === false ? "field-hidden" : ""
        } form-group`}
      >
        {labelField && (
          <div
            className={`labelDiv ${divClassName} no-padding`}
            title={tooltip || labelField}
          >
            <label
              id={`${id}_labelField`}
              className={
                mandatory ? "control-label mandatory" : "control-label"
              }
              htmlFor={id}
            >
              {`${labelField}${mandatory ? " *" : ""}`}
            </label>
          </div>
        )}
        <div className={`${divClassName} no-padding`}>
          <TextareaStyled
            {...resInput}
            id={id}
            name={name}
            placeholder={placeholder}
            className={`inputForm inputTextarea ${className}`}
            readOnly={readOnly}
            rows={rows || 5}
            value={this.state.value}
            onChange={async (event) => {
              this.handlerOnchangeValue(event);
              onChange(event);
            }}
          />
        </div>
        <ErrorMessage
          name={name}
          component={TextErrorMessage}
          type={typeStyleErrorMessage || "default"}
        />
      </div>
    );
  }
}

InputTextarea.propTypes = {
  field: PropTypes.any,
  form: PropTypes.any,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  labelField: PropTypes.string,
  className: PropTypes.string,
  divClassName: PropTypes.string,
  readOnly: PropTypes.bool,
  mandatory: PropTypes.bool,
  visible: PropTypes.bool,
  tooltip: PropTypes.string,
  typeStyleErrorMessage: PropTypes.string,
  rows: PropTypes.number,
};

export default InputTextarea;
