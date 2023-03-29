import './modal.css';
import { Fragment } from "react";

const Modal = ({ className, children }) => {
    return (
        <Fragment>
            <section id="background"></section>
            <Card className={className} children={children}></Card>
        </Fragment>
    )
}

export default Modal;