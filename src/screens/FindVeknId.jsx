import React, { useEffect } from "react";
import { getPlayerList } from "../services/vekn";

export const FindVeknid = () => {

    useEffect(() => {
        getPlayerList().then((response) => {
            console.log(response);
        }
        );
    }, []);

    return (
        <>
            <h1>Find Vekn Id</h1>
        </>
    );
};