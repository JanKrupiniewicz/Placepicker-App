import { forwardRef, useRef, useImperativeHandle } from "react";

const Modal = forwardRef(function Modal({children}, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => ({
        openModal: () => {
            dialog.current.showModal();
        },
        closeModal: () => {
            dialog.current.close();
        },
    }));

    return (
        <dialog ref={dialog}>
            {children}
        </dialog>
    );
});

export default Modal;