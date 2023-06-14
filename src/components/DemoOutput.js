import React from "react";
import MyPara from "./MyPara";

const DemoOutput = (props) => {

    console.log('Demo output');

    return (
        <>
            <MyPara show={props.show}></MyPara>
        </>

    )
}

export default React.memo(DemoOutput); 