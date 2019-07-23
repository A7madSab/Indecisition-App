import React from "react";
import Modal from "react-modal";

const OptionModel = props => (
  <div>
    <Modal
      contentLabel="Select Option"
      isOpen={!!props.selectOption}
      onRequestClose={props.CloseModal}
      closeTimeoutMS={200}
      className="modal"
    >
      <h1 className="modal__title">Select Option</h1>
      <p className="modal__body">{props.selectOption}</p>
      <button className="button" onClick={props.CloseModal}>
        Close
      </button>
    </Modal>
  </div>
);

Modal.setAppElement("#root");

export default OptionModel;
