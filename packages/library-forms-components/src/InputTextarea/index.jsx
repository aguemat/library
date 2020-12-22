import React from "react";
import PropTypes from "prop-types";
import { TextareaStyled } from "./InputTextarea.styled";
import "bootstrap/dist/css/bootstrap.min.css";

class InputTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue ? this.props.defaultValue : "",
    };
  }

  handlerOnchangeValue(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const {
      name,
      onChange,
      id,
      labelField,
      placeholder,
      className,
      divClassName,
      readOnly,
      mandatory,
      visible,
      tooltip,
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
            id={id}
            name={name}
            placeholder={placeholder}
            className={`inputForm inputTextarea ${className}`}
            readOnly={readOnly}
            rows={rows || 5}
            value={this.state.value}
            onChange={async (event) => {
              this.handlerOnchangeValue(event);
              if (onChange) {
                onChange(event);
              }
            }}
          />
        </div>
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
  defaultValue: PropTypes.string,
  typeStyleErrorMessage: PropTypes.string,
  rows: PropTypes.number,
};

export default InputTextarea;
