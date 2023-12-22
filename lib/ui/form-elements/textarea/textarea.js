import { Component, createRef } from "react";
import styles from "./textarea.module.scss";

import FormElement from "../form-element";
import Validation from "../validation";

export default class TextArea extends Component {
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
    return this.input.current.value || null;
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
  clear() {
    this.input.current.value = "";
    this.setState({
      has_error: false,
      error_message: null,
    });
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
      variant,
      placeholder,
      rows = 3,
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
        <textarea
          ref={this.input}
          className={styles.element}
          id={id}
          name={name}
          type="text"
          placeholder={placeholder}
          rows={rows}
          onChange={this.onChange}
        />
      </FormElement>
    );
  }
}
