package com.cricket.cms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.cricket.cms.dto.PlayerDTO;
import com.cricket.cms.entity.Player;
import com.cricket.cms.service.PlayerService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/players")
@Validated
public class PlayerController {

    @Autowired
    private PlayerService playerService;

    @PostMapping
    public Player addPlayer(
            @Valid @RequestBody PlayerDTO playerDTO) {

        return playerService.addPlayer(playerDTO);
    }

    @GetMapping
    public List<Player> getAllPlayers() {

        return playerService.getAllPlayers();
    }

    @GetMapping("/{playerId}")
    public Player getPlayerById(
            @PathVariable Long playerId) {

        return playerService.getPlayerById(playerId);
    }

    @PutMapping("/{playerId}")
    public Player updatePlayer(
            @PathVariable Long playerId,
            @Valid @RequestBody PlayerDTO playerDTO) {

        return playerService.updatePlayer(
                playerId,
                playerDTO);
    }

    @DeleteMapping("/{playerId}")
    public String deletePlayer(
            @PathVariable Long playerId) {

        playerService.deletePlayer(playerId);

        return "Player Deleted Successfully";
    }
    
    @GetMapping("/team/{teamName}")
    public List<Player> getPlayersByTeamName(
            @PathVariable String teamName) {

        return playerService.getPlayersByTeamName(teamName);
    }
}