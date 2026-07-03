import React, { useState } from "react";
import PlayerService from "../services/PlayerService";

function AddPlayer() {

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

    const savePlayer = (e) => {

        e.preventDefault();

        if (!validate())
            return;

        PlayerService.addPlayer(player)
            .then(() => {

                alert("Player added successfully.");

                setPlayer({
                    playerName: "",
                    jerseyNumber: "",
                    role: "",
                    totalMatches: "",
                    teamName: "",
                    countryName: "",
                    description: ""
                });

                setErrors({});

            })
            .catch(() => {

                alert("Unable to add player. Please check the entered details.");

            });

    };

    return (

        <div className="form-container">

            <h2>Add Player</h2>

            <form onSubmit={savePlayer}>

                <label>Player Name</label>

                <input
                    type="text"
                    name="playerName"
                    placeholder="Enter Player Name"
                    value={player.playerName}
                    onChange={handleChange}
                />

                <p className="error">{errors.playerName}</p>

                <label>Jersey Number</label>

                <input
                    type="number"
                    name="jerseyNumber"
                    placeholder="Enter Jersey Number"
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
                    placeholder="Enter Total Matches"
                    value={player.totalMatches}
                    onChange={handleChange}
                />

                <p className="error">{errors.totalMatches}</p>

                <label>Team Name</label>

                <input
                    type="text"
                    name="teamName"
                    placeholder="Enter Team Name"
                    value={player.teamName}
                    onChange={handleChange}
                />

                <p className="error">{errors.teamName}</p>

                <label>Country Name</label>

                <input
                    type="text"
                    name="countryName"
                    placeholder="Enter Country Name"
                    value={player.countryName}
                    onChange={handleChange}
                />

                <p className="error">{errors.countryName}</p>

                <label>Description</label>

                <textarea
                    name="description"
                    placeholder="Enter Description"
                    value={player.description}
                    onChange={handleChange}
                ></textarea>

                <br />

                <button type="submit">
                    Add Player
                </button>

            </form>

        </div>

    );

}

export default AddPlayer;