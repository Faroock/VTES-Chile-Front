import React, { useEffect, useState } from "react";
import { getPlayerList } from "../services/vekn";
import { PlayerList } from "../components/PlayerList";
import { CircularProgress, Box } from '@mui/material';
import { Helmet } from 'react-helmet';


export const FindVeknid = () => {
    const [playerList, setPlayerList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPlayerList().then((response) => {
            setPlayerList(response);
            setLoading(false);
        }
        );
    }, []);

    return (
        <>
            {loading ? <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 540 }}>
                <CircularProgress />
            </Box> : 
            <>
                <Helmet>
                    <title>Buscar jugador en VEKN</title>
                </Helmet>
                <PlayerList playerList={playerList} />
            </>
            }
        </>
    );
};