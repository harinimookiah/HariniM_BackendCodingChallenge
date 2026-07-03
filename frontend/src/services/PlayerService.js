import axios from "axios";

const BASE_URL = "http://localhost:8081/api/players";

class PlayerService {

    getAllPlayers() {
        return axios.get(BASE_URL);
    }

    getPlayerById(playerId) {
        return axios.get(BASE_URL + "/" + playerId);
    }

    addPlayer(player) {
        return axios.post(BASE_URL, player);
    }

    updatePlayer(playerId, player) {
        return axios.put(BASE_URL + "/" + playerId, player);
    }

}

export default new PlayerService();