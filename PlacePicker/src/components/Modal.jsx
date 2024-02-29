import { forwardRef, useRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({ children }, ref) => {
  const dialog = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        setModalIsOpen(true);
        dialog.current.showModal();
      },
      close: () => {
        setModalIsOpen(false);
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog className="modal" ref={dialog}>
      { modalIsOpen ? children : null }
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
