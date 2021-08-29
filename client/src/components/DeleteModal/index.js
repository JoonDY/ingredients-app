import React from 'react';
import { ModalContent, ModalWrapper, H3 } from '../../shared/globals';
import { YesButton, NoButton } from './styles';

const DeleteModal = ({ handleDeleteTrue, handleDeleteFalse }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <H3>Confirm Delete?</H3>
        <div className="flex-center">
          <YesButton onClick={handleDeleteTrue}>Yes</YesButton>
          <NoButton onClick={handleDeleteFalse}>No</NoButton>
        </div>
      </ModalContent>
    </ModalWrapper>
  );
};

export default DeleteModal;
