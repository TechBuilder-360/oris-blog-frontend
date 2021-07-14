import React from 'react';
import { Spinner } from "react-bootstrap";
import classes from "./Spinner.module.css";

const SpinnerComponent = () => {
    return (
        <div className={classes.spinner}>
          <Spinner variant="secondary" animation="border" size=" lg" />
        </div>
    )
}

export default SpinnerComponent
