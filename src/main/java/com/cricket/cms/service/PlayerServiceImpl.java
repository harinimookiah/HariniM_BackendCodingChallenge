package com.cricket.cms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cricket.cms.dto.PlayerDTO;
import com.cricket.cms.entity.Player;
import com.cricket.cms.exception.ResourceNotFoundException;
import com.cricket.cms.repo.PlayerRepository;

@Service
public class PlayerServiceImpl implements PlayerService {

    private final PlayerRepository playerRepository;

    PlayerServiceImpl(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    @Override
    public Player addPlayer(PlayerDTO playerDTO) {

        Player player = new Player();

        player.setPlayerName(playerDTO.getPlayerName());
        player.setJerseyNumber(playerDTO.getJerseyNumber());
        player.setRole(playerDTO.getRole());
        player.setTotalMatches(playerDTO.getTotalMatches());
        player.setTeamName(playerDTO.getTeamName());
        player.setCountryName(playerDTO.getCountryName());
        player.setDescription(playerDTO.getDescription());

        return playerRepository.save(player);
    }

    @Override
    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    @Override
    public Player getPlayerById(Long playerId) {

        return playerRepository.findById(playerId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Player not found with id : " + playerId));
    }

    @Override
    public Player updatePlayer(Long playerId,
                               PlayerDTO playerDTO) {

        Player player = playerRepository.findById(playerId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Player not found with id : " + playerId));

        player.setPlayerName(playerDTO.getPlayerName());
        player.setJerseyNumber(playerDTO.getJerseyNumber());
        player.setRole(playerDTO.getRole());
        player.setTotalMatches(playerDTO.getTotalMatches());
        player.setTeamName(playerDTO.getTeamName());
        player.setCountryName(playerDTO.getCountryName());
        player.setDescription(playerDTO.getDescription());

        return playerRepository.save(player);
    }

    @Override
    public void deletePlayer(Long playerId) {

        Player player = playerRepository.findById(playerId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Player not found with id : " + playerId));

        playerRepository.delete(player);
    }
    
   
    @Override
    public List<Player> getPlayersByTeamName(String teamName) {

        List<Player> players =
                playerRepository.findByTeamName(teamName);

        if(players.isEmpty()) {
            throw new ResourceNotFoundException(
                    "No players found for team : " + teamName);
        }

        return players;
    }
}