import React from "react";

class AddOption extends React.Component {
  constructor(state) {
    super(state);
    this.state = {
      error: undefined
    };
    this.HandelSubmit = this.HandelSubmit.bind(this);
  }

  HandelSubmit(e) {
    e.preventDefault();
    const option = e.target.Todo.value.trim();

    const error = this.props.handelAddOption(option);
    if (error) {
      this.setState(() => ({ error: error }));
    } else {
      e.target.reset();
    }
  }

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.HandelSubmit}>
          <input
            className="add-option--input"
            name="Todo"
            type="text"
            placeholder="Add Option"
          />
          <button className="button" type="submit">
            Add Option
          </button>
        </form>
      </div>
    );
  }
}

export default AddOption;
