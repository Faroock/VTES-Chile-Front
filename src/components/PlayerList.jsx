import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from "@mui/material";
import { CircularProgress, Box } from '@mui/material';
import React, { useEffect, useState } from "react";

const columnas = [
    { id: 'veknid', label: 'Vekn ID', minWidth: 50 },
    { id: 'firstname', label: 'First Name', minWidth: 100 },
    { id: 'lastname', label: 'Last Name', minWidth: 100 },
    { id: 'country', label: 'Country', minWidth: 20 },
    { id: 'rtp_constructed', label: 'Constructed', minWidth: 100 },
    { id: 'rtp_limited', label: 'Limited', minWidth: 100 },
]

export const PlayerList = ({ playerList = [] }) => {
    const [players, setPlayers] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalPlayers, setTotalPlayers] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setPlayers(playerList.slice(0, 10));
        setTotalPlayers(playerList.length);
        setLoading(false);
    }, [playerList]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        setPlayers(playerList.slice(newPage * rowsPerPage, (newPage + 1) * rowsPerPage));
    };

    const [search, setSearch] = useState('');
    const handleSearch = (event) => {
        const filter = event.target.value;
        setSearch(filter);
        const filteredPlayers = playerList.filter((player) => {
            const name = player.firstname + ' ' + player.lastname;
            return name.toLowerCase().includes(filter.toLowerCase()) || player.veknid.includes(filter);
        }
        );
        setPlayers(filteredPlayers.slice(0, rowsPerPage));
        setTotalPlayers(filteredPlayers.length);
    };

    return (
        <>
            <Paper sx={{ width: '100%', overflowX: 'hidden' }}>
                <TextField id='search' label='Buscar jugador' variant='outlined' sx={{ width: '100%' }} 
                    value={search} onChange={handleSearch}
                />
                <TableContainer sx={{ maxHeight: 540 }}>
                    {loading ? <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 540 }}>
                        <CircularProgress />
                    </Box> :
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columnas.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {players.map((player) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={player.veknid}>
                                        {columnas.map((column) => {
                                            const value = player[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    }
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 50]}
                    component="div"
                    count={totalPlayers}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={(event) => {
                        setRowsPerPage(+event.target.value);
                        setPage(0);
                        setPlayers(playerList.slice(0, +event.target.value));
                    }}
                />
            </Paper>
        </>
    );
};