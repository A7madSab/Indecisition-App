import React, { Component } from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModel from "./OptionModal";
import "../styles/styles.scss";

class IndecisionApp extends Component {
  state = {
    options: ["op1", "op2", "op3"],
    selectOption: undefined
  };

  handelAddOption = option => {
    if (!option) {
      return "Enter Valid Input";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Option already there";
    }
    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  };

  handlePick = () => {
    console.log("clicked");
    if (this.state.options) {
      let index = Math.floor(Math.random() * this.state.options.length);
      this.setState({
        selectOption: this.state.options[index]
      });
    } else {
      alert("Create some Tasks to choose from");
    }
    console.log(this.state.options);
  };

  handelDeleteOption = optionText => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== optionText)
    }));
  };

  handelDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }));
  };

  CloseModal = () => {
    this.setState(() => ({
      selectOption: undefined
    }));
  };

  setButtonStatus = () => (this.state.options.length === 0 ? true : false);

  render() {
    let title = "IndecisionApp";
    let subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />

        <div className="container">
          <Action
            setButtonStatus={this.setButtonStatus}
            handlePick={this.handlePick}
            options={this.state.options}
          />

          <div className="widget">
            <Options
              options={this.state.options}
              handelDeleteOptions={this.handelDeleteOptions}
              handelDeleteOption={this.handelDeleteOption}
            />

            <AddOption handelAddOption={this.handelAddOption} />
          </div>

          <OptionModel
            CloseModal={this.CloseModal}
            selectOption={this.state.selectOption}
          />
        </div>
      </div>
    );
  }
}

export default IndecisionApp;
