import React, { useEffect, useState } from "react";
import PlayerService from "../services/PlayerService";

function PlayerList() {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        loadPlayers();
    }, []);

    const loadPlayers = () => {

        PlayerService.getAllPlayers()

            .then((response) => {

                setPlayers(response.data);

            })

            .catch(() => {

                alert("Unable to load player details.");

            });

    };

    return (

        <div className="table-container">

            <h2>Player List</h2>

            <table>

                <thead>

                    <tr>

                        <th>Player ID</th>
                        <th>Player Name</th>
                        <th>Jersey Number</th>
                        <th>Role</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        players.length > 0 ?

                            players.map((player) => (

                                <tr key={player.playerId}>

                                    <td>{player.playerId}</td>
                                    <td>{player.playerName}</td>
                                    <td>{player.jerseyNumber}</td>
                                    <td>{player.role}</td>

                                </tr>

                            ))

                            :

                            <tr>

                                <td colSpan="4">
                                    No Players Available
                                </td>

                            </tr>

                    }

                </tbody>

            </table>

        </div>

    );

}

export default PlayerList;