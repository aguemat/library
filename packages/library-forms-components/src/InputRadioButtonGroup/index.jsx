/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

class InputRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      options: [],
    };
  }

  componentDidMount() {
    this.parseOptions();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.options !== this.props.options) {
      this.parseOptions();
    }
    if (
      this.state.selectedOption &&
      prevState.selectedOption !== this.state.selectedOption
    ) {
      this.setValue(this.state.selectedOption.value);
    }
  }

  setValue(newValue) {
    const newSelection = this.state.options.find(
      (elememnt) => elememnt.value === newValue
    );
    if (newSelection) {
      this.setState({ selectedOption: newSelection });
    }
  }

  parseOptions() {
    const {
      options,
      optionLabel,
      optionValue,
      multilanguage,
      translateFunction,
    } = this.props;
    if (options && options.length > 0) {
      const newOptions = options.map((op) => {
        let dat = null;
        if (multilanguage) {
          dat = {
            value: op[optionValue],
            label: translateFunction(op[optionLabel]),
          };
        } else {
          dat = { value: op[optionValue], label: op[optionLabel] };
        }

        if (
          this.props.field &&
          this.props.field.value &&
          this.props.field.value === op[optionValue]
        ) {
          this.setState({ selectedOption: dat });
        }
        return dat;
      });

      this.setState({ options: newOptions });
    }
  }

  async handleChange(selectedOption) {
    const { onChangeValue } = this.props;
    this.setState({ selectedOption });
    if (onChangeValue) {
      onChangeValue(selectedOption.value);
    }
  }

  render() {
    const {
      name,
      labelField,
      id,
      divClassName,
      mandatory,
      visible,
      tooltip,
      readOnly,
    } = this.props;

    return (
      <div
        id={`${id}_Container`}
        className={`${
          visible !== undefined && visible === false ? "field-hidden" : ""
        } form-group`}
      >
        <div
          className={`labelDiv ${divClassName}`}
          title={tooltip || labelField}
        >
          <label
            id={`${id}_labelField`}
            className={mandatory ? "control-label mandatory" : "control-label"}
            htmlFor={id}
          >
            {`${labelField}${mandatory ? " *" : ""}`}
          </label>
        </div>
        <div className={`${divClassName}`}>
          {this.state.options && (
            <>
              {this.state.options.map((op) => {
                return (
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name={name}
                      id={id}
                      value={op.value}
                      disabled={readOnly}
                      checked={
                        this.state.selectedOption &&
                        this.state.selectedOption.value === op.value
                      }
                      onChange={(event) => this.handleChange(op, event)}
                    />
                    <label class="form-check-label" for={id}>
                      {op.label}
                    </label>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    );
  }
}

InputRadio.propTypes = {
  id: PropTypes.string,
  labelField: PropTypes.string,
  divClassName: PropTypes.string,
  visible: PropTypes.bool,
  mandatory: PropTypes.bool,
  options: PropTypes.any,
  tooltip: PropTypes.string,
  optionLabel: PropTypes.string,
  optionValue: PropTypes.string,
  multilanguage: PropTypes.bool,
  translateFunction: PropTypes.func,
  readOnly: PropTypes.bool,
  onChangeValue: PropTypes.func,
};

export default InputRadio;
