import React, { useState } from "react";
import PlayerService from "../services/PlayerService";

function UpdatePlayer() {

    const [playerId, setPlayerId] = useState("");

    const [player, setPlayer] = useState({
        playerName: "",
        jerseyNumber: "",
        role: "",
        totalMatches: "",
        teamName: "",
        countryName: "",
        description: ""
    });

    const [errors, setErrors] = useState({});

    const handleIdChange = (e) => {
        setPlayerId(e.target.value);
    };

    const handleChange = (e) => {
        setPlayer({
            ...player,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {

        let temp = {};

        if (!player.playerName.trim())
            temp.playerName = "Player Name is required";

        if (!player.jerseyNumber)
            temp.jerseyNumber = "Jersey Number is required";

        if (!player.role)
            temp.role = "Role is required";

        if (!player.totalMatches)
            temp.totalMatches = "Total Matches is required";

        if (!player.teamName.trim())
            temp.teamName = "Team Name is required";

        if (!player.countryName.trim())
            temp.countryName = "Country Name is required";

        setErrors(temp);

        return Object.keys(temp).length === 0;

    };

    const loadPlayer = () => {

        if (playerId === "") {

            alert("Please enter Player ID");

            return;

        }

        PlayerService.getPlayerById(playerId)

            .then((response) => {

                setPlayer(response.data);

                setErrors({});

            })

            .catch(() => {

                alert("Player not found");

            });

    };

    const updatePlayer = (e) => {

        e.preventDefault();

        if (!validate())
            return;

        PlayerService.updatePlayer(playerId, player)

            .then(() => {

                alert("Player updated successfully.");

            })

            .catch(() => {

                alert("Unable to update player.");

            });

    };

    return (

        <div className="form-container">

            <h2>Update Player</h2>

            <label>Player ID</label>

            <input
                type="number"
                placeholder="Enter Player ID"
                value={playerId}
                onChange={handleIdChange}
            />

            <br /><br />

            <button onClick={loadPlayer}>
                Search
            </button>

            <br /><br />

            <form onSubmit={updatePlayer}>

                <label>Player Name</label>

                <input
                    type="text"
                    name="playerName"
                    value={player.playerName}
                    onChange={handleChange}
                />

                <p className="error">{errors.playerName}</p>

                <label>Jersey Number</label>

                <input
                    type="number"
                    name="jerseyNumber"
                    value={player.jerseyNumber}
                    onChange={handleChange}
                />

                <p className="error">{errors.jerseyNumber}</p>

                <label>Role</label>

                <select
                    name="role"
                    value={player.role}
                    onChange={handleChange}
                >
                    <option value="">Select Role</option>
                    <option value="Batsman">Batsman</option>
                    <option value="Bowler">Bowler</option>
                    <option value="Keeper">Keeper</option>
                    <option value="All Rounder">All Rounder</option>
                </select>

                <p className="error">{errors.role}</p>

                <label>Total Matches</label>

                <input
                    type="number"
                    name="totalMatches"
                    value={player.totalMatches}
                    onChange={handleChange}
                />

                <p className="error">{errors.totalMatches}</p>

                <label>Team Name</label>

                <input
                    type="text"
                    name="teamName"
                    value={player.teamName}
                    onChange={handleChange}
                />

                <p className="error">{errors.teamName}</p>

                <label>Country Name</label>

                <input
                    type="text"
                    name="countryName"
                    value={player.countryName}
                    onChange={handleChange}
                />

                <p className="error">{errors.countryName}</p>

                <label>Description</label>

                <textarea
                    name="description"
                    value={player.description}
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Update Player
                </button>

            </form>

        </div>

    );

}

export default UpdatePlayer;