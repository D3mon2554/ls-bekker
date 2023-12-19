import { Component, createRef } from "react";
import styles from "./select-dropdown.module.scss";

import FormElement from "../form-element";
import Validation from "../validation";

export default class Text extends Component {
  constructor(props) {
    super(props);
    this.input = createRef();
    this.state = {
      has_error: false,
      error_message: null,
      icon: this.props.icon || null,
      icon_color: this.props.icon_color || null,
      icon_size: this.props.icon_size || 20,
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    if (this.props.value) {
      this.input.current.value = this.props.value;
    }
  }
  get value() {
    if (!this.input.current) return null;
    return this.input.current.value == -1 ? null : this.input.current.value;
  }

  clear() {
    this.input.current.value = -1;
  }

  validate() {
    const result = Validation(this.value, {
      ...this.props.validation_constraints,
      required: this.props.required,
    });
    this.setState({
      has_error: !result.valid,
      error_message: result.message,
    });
    return !result.valid;
  }

  onChange() {
    this.setState({
      has_error: false,
      error_message: null,
    });
    this.props.onChange && this.props.onChange(this.value);
  }

  render() {
    const {
      id,
      name,
      label,
      options = [],
      default_option_label = "Select an Option",
      variant,
      placeholder,
      required = false,
    } = this.props;
    return (
      <FormElement
        input_id={id}
        label={label}
        variant={variant}
        required={required}
        error={this.state.has_error}
        error_message={this.state.error_message}
        icon={this.state.icon}
        icon_color={this.state.icon_color}
        icon_size={this.state.icon_size}
      >
        <select
          ref={this.input}
          className={styles.element}
          id={id}
          name={name}
          type="text"
          placeholder={placeholder}
          onChange={this.onChange}
        >
          <option value={-1}>{default_option_label}</option>
          {options &&
            options.map((option, index) => {
              return (
                <option key={`${name}_option_${index}`} value={option.value}>
                  {option.label}
                </option>
              );
            })}
        </select>
      </FormElement>
    );
  }
}
