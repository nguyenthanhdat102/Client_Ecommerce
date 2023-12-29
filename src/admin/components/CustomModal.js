import React from "react";
import { Button, Modal } from "react-bootstrap";

const CustomModal = ({
   children,
   title,
   stateModal,
   setStateModal,
   OkbtnName,
   CancelBtnName,
   handleOk,
}) => {
   return (
      <Modal
         show={stateModal}
         onHide={() => setStateModal(false)}
         backdrop="static"
         keyboard={false}
      >
         <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
         </Modal.Header>
         <Modal.Body>{children}</Modal.Body>
         <Modal.Footer>
            <Button variant="success" onClick={handleOk}>
               {OkbtnName}
            </Button>
            <Button variant="danger" onClick={() => setStateModal(false)}>
               {CancelBtnName}
            </Button>
         </Modal.Footer>
      </Modal>
   );
};

export default CustomModal;
