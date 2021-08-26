import React from 'react';
import { ModalContent, ModalWrapper } from '../../shared/globals';

const DeletePopup = ({ message, handleDeleteTrue, handleDeleteFalse }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <h1>{message}</h1>
        {handleDeleteTrue && <button onClick={handleDeleteTrue}>Yes</button>}
        {handleDeleteFalse && <button onClick={handleDeleteFalse}>No</button>}
      </ModalContent>
    </ModalWrapper>
  );
};

export default DeletePopup;
