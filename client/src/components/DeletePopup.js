import React from 'react';

const DeletePopup = ({ handleDeleteTrue, handleDeleteFalse }) => {
  return (
    <div className="delete-modal">
      <div className="delete-modal-content">
        <h1>Confirm Delete?</h1>
        <button onClick={handleDeleteTrue}>Yes</button>
        <button onClick={handleDeleteFalse}>No</button>
      </div>
    </div>
  );
};

export default DeletePopup;
