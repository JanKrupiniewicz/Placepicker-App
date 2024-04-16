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
        <dialog className="rounded-xl md:w-1/3" ref={dialog}>
            {children}
        </dialog>
    );
});

export default Modal;