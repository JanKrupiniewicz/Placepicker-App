import { forwardRef, useRef, useImperativeHandle } from "react";

const Modal = forwardRef(function Modal({}, ref) {
    return (
        <dialog ref={ref}>
            <h2>Are you sure you want to delete the place ?</h2>
            <form method="dialog">
                <button value="cancel">Cancel</button>
                <button value="confirm">Delete</button>
            </form>
        </dialog>
    );
});

export default Modal;