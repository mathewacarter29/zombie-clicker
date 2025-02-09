import React from 'react';
import classes from './Window.module.css'

type WindowProps = {};
function Window(props: React.PropsWithChildren<WindowProps>) {
    return (
        <div className={classes.window}>
            {props.children}
        </div>
    );
}

export default Window;