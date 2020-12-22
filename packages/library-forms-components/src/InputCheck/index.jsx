import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

class InputCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.checked ? this.props.checked : false,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.checked !== this.props.checked) {
      this.handlerOnchangeValue(this.props.checked);
    }
  }

  async handlerOnchangeValue(newValue) {
    this.setState({ value: newValue });
  }

  render() {
    const {
      name,
      onChange,
      form,
      id,
      labelField,
      className,
      divClassName,
      readOnly,
      mandatory,
      tooltip,
      withLink,
    } = this.props;
    return (
      <div
        id={`${id}_Container`}
        className={`${divClassName}`}
        title={tooltip || labelField}
      >
        <div className="form-group form-check">
          <input
            id={id}
            type="checkbox"
            name={name}
            className={`form-check-input ${className || ""}`}
            checked={this.state.value}
            disabled={readOnly && readOnly === true ? readOnly : false}
            onChange={async (event) => {
              this.handlerOnchangeValue(event.target.checked);
              if (onChange) {
                onChange(event);
              }
            }}
          />
          <label
            id={`${id}_labelField`}
            className={
              mandatory ? "form-check-label mandatory" : "form-check-label"
            }
            htmlFor={id}
          >
            {`${labelField}${mandatory ? " *" : ""}`}
            {withLink && withLink(form.values)}
          </label>
        </div>
      </div>
    );
  }
}

InputCheck.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  labelField: PropTypes.string,
  className: PropTypes.string,
  divClassName: PropTypes.string,
  readOnly: PropTypes.bool,
  mandatory: PropTypes.bool,
  meta: PropTypes.any,
  tooltip: PropTypes.string,
  withLink: PropTypes.func,
};

export default InputCheck;
