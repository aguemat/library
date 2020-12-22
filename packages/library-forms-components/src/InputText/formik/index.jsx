import React from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { ErrorMessage } from "formik";
import TextErrorMessage from "../../TextErrorMessage";

class InputText extends React.Component {
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
      fieldType,
      className,
      divClassName,
      readOnly,
      mandatory,
      maxLength,
      visible,
      tooltip,
      decimals,
      typeStyleErrorMessage,
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
          {fieldType === "number" ? (
            <>
              <NumberFormat
                {...resInput}
                id={id}
                name={name}
                maxLength={maxLength || 255}
                placeholder={placeholder}
                className={`inputForm inputText ${className}`}
                readOnly={readOnly}
                decimalScale={decimals || undefined}
                value={this.state.value}
                onChange={async (event) => {
                  this.handlerOnchangeValue(event);
                  onChange(event);
                }}
              />
            </>
          ) : (
            <>
              <input
                {...resInput}
                id={id}
                name={name}
                placeholder={placeholder}
                type={fieldType}
                maxLength={maxLength || 255}
                className={`inputForm inputText ${className}`}
                readOnly={readOnly}
                value={this.state.value}
                onChange={async (event) => {
                  this.handlerOnchangeValue(event);
                  onChange(event);
                }}
              />
            </>
          )}
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

InputText.propTypes = {
  field: PropTypes.any,
  form: PropTypes.any,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  labelField: PropTypes.string,
  fieldType: PropTypes.string.isRequired,
  className: PropTypes.string,
  divClassName: PropTypes.string,
  readOnly: PropTypes.bool,
  mandatory: PropTypes.bool,
  maxLength: PropTypes.number,
  visible: PropTypes.bool,
  tooltip: PropTypes.string,
  format: PropTypes.string,
  decimals: PropTypes.number,
  typeStyleErrorMessage: PropTypes.string,
};

export default InputText;
