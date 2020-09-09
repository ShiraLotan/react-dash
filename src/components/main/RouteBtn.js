import React from "react";
import { useHistory } from "react-router-dom";

export default function RouteBtn({widgets}){
    const history = useHistory();

    return(
        <div className="RouteBtn">
            <span onClick={()=> history.push("/feature", widgets)}>To Features</span>
        </div>
    )
}