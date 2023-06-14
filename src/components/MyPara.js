import React from "react";

const MyPara = (props) => {
    console.log('My paragraph running');

    return (
        <>
            {props.show && (<p>I am paragraph!</p>)}
        </>
    )
}

export default MyPara;