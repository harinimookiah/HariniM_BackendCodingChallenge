package com.cricket.cms.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cricket.cms.entity.Player;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

}