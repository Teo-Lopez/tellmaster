import axios from "axios";

class gamesService {
  constructor() {
    this.baseURL = "http://localhost:5000/api/savedGames/";
    this.service = axios.create({ baseURL: this.baseURL, withCredentials: true });
  }

  getUserSaves(userId) {
    return this.service
      .get(`/?userId=${userId}`)
      .then((res) => res.data.savedGamesFound)
      .catch((err) => console.log(err));
  }

  createSavedGame({ description, trial, successTargetChapter, failureTargetChapter, pxGranted }) {
    return this.service
      .post("", {
        gameId,
        currentChapter,
        character,
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  updateSavedGame({ savedGameId, gameId, currentChapter, character }) {
    return this.service.patch("", { savedGameId, gameId, currentChapter, character }).then((res) => res.data);
  }

  deleteSave(savedGameId) {
    return this.service
      .delete("", { savedGameId })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
}

export default gamesService;
