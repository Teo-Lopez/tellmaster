import axios from "axios";

class gamesService {
  constructor() {
    this.baseURL = "http://localhost:5000/api/games/";
    this.service = axios.create({ baseURL: this.baseURL, withCredentials: true });
  }

  getLastGames() {
    return this.service
      .get("?limit=10")
      .then((res) => res.data.games)
      .catch((err) => console.log(err));
  }
}

export default gamesService;