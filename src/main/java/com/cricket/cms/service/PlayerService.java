package com.cricket.cms.service;

import java.util.List;

import com.cricket.cms.dto.PlayerDTO;
import com.cricket.cms.entity.Player;

public interface PlayerService {

    Player addPlayer(PlayerDTO playerDTO);

    List<Player> getAllPlayers();

    Player getPlayerById(Long playerId);

    Player updatePlayer(Long playerId, PlayerDTO playerDTO);

    void deletePlayer(Long playerId);

}