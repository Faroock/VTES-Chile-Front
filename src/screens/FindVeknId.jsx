import React, { useEffect, useState } from "react";
import { getPlayerList } from "../services/vekn";
import { PlayerList } from "../components/PlayerList";

export const FindVeknid = () => {
    const [playerList, setPlayerList] = useState([]);

    useEffect(() => {
        getPlayerList().then((response) => {
            setPlayerList(response);
        }
        );
    }, []);

    return (
        <>
            <PlayerList playerList={playerList} />
        </>
    );
};