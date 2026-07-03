package com.cricket.cms.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public class PlayerDTO {

    @NotBlank(message = "Player Name is required")
    private String playerName;

    @NotNull(message = "Jersey Number is required")
    private Integer jerseyNumber;

    @NotBlank(message = "Role is required")
    @Pattern(
    	    regexp = "^(Batsman|Bowler|Keeper|All Rounder)$",
    	    message = "Role must be Batsman, Bowler, Keeper or All Rounder"
    	)
    	private String role;

    @NotNull(message = "Total Matches is required")
    @Min(value = 0, message = "Total Matches cannot be negative")
    private Integer totalMatches;

    @NotBlank(message = "Team Name is required")
    private String teamName;

    @NotBlank(message = "Country Name is required")
    private String countryName;

    private String description;

	public String getPlayerName() {
		return playerName;
	}

	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}

	public Integer getJerseyNumber() {
		return jerseyNumber;
	}

	public void setJerseyNumber(Integer jerseyNumber) {
		this.jerseyNumber = jerseyNumber;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Integer getTotalMatches() {
		return totalMatches;
	}

	public void setTotalMatches(Integer totalMatches) {
		this.totalMatches = totalMatches;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public String getCountryName() {
		return countryName;
	}

	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "PlayerDTO [playerName=" + playerName + ", jerseyNumber=" + jerseyNumber + ", role=" + role
				+ ", totalMatches=" + totalMatches + ", teamName=" + teamName + ", countryName=" + countryName
				+ ", description=" + description + "]";
	}
    
    
    
}