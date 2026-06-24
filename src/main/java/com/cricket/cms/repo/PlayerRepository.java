package com.cricket.cms.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cricket.cms.entity.Player;
import java.util.List;
@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

	List<Player> findByTeamName(String teamName);
}