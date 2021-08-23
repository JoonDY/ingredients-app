import React from 'react';

const DeletePopup = ({ message, handleDeleteTrue, handleDeleteFalse }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h1>{message}</h1>
        {handleDeleteTrue && <button onClick={handleDeleteTrue}>Yes</button>}
        {handleDeleteFalse && <button onClick={handleDeleteFalse}>No</button>}
      </div>
    </div>
  );
};

export default DeletePopup;
