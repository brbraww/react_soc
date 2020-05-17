import React from "react";
import preloader from "../../../assets/img/Spinner.svg";

let Preloader = (props) => {
    return <div>
        <img src={preloader} alt='...loading...' />
    </div>
}

export default Preloader;