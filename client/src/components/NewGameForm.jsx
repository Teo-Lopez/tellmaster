import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import gamesService from "../services/games.service";
import { withRouter } from "react-router-dom";

function NewGameForm(props) {
  const { loggedInUser, updateLastGames, match, location, history } = props;
  const GamesService = new gamesService();
  const [title, setTitle] = useState("");
  const [minLevel, setMinLevel] = useState(1);
  const [description, setDescription] = useState("");

  function submitForm(e) {
    e.preventDefault();
    GamesService.createGame({ creator: loggedInUser._id, title, minLevel, description })
      .then((createdGame) => {
        updateLastGames();
        console.log(createdGame);
      })
      .catch((err) => console.log(err))
      .finally(() => history.push("/"));
  }

  function onChange(e) {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "minLevel":
        setMinLevel(value);
        break;
      default:
        throw Error("Algo ha ido mal con el formulario");
    }
  }

  return (
    <div>
      <h2>Crear un nuevo juego es muy sencillo tan solo necesitas...</h2>
      <Form onSubmit={submitForm}>
        <Form.Group controlId="title">
          <Form.Label>Elegir un titulo:</Form.Label>
          <Form.Control name="title" onChange={onChange} value={title} type="text" placeholder="El titulo de tu historia!" />
        </Form.Group>

        <Form.Group controlId="minLevel">
          <Form.Label>Un nivel mínimo para comenzar la aventura:</Form.Label>
          <p>{minLevel}</p>
          <Form.Control name="minLevel" onChange={onChange} value={minLevel} type="range" min="1" max="20" step="1" placeholder="Ej: 5" />
          <Form.Text className="text-muted">
            Las aventuras básicas comienzan en nivel 1, de 8 a 14 ya son todo un reto, a partir de ahí los heroes pueden luchar contra los
            mismos dioses.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>El resumen de tu aventura! Hazlo atractivo de forma que la gente quiera jugarla ;)</Form.Label>
          <Form.Control name="description" onChange={onChange} value={description} type="text" placeholder="El titulo de tu historia!" />
        </Form.Group>
        <Button type="submit">Crear</Button>
      </Form>
    </div>
  );
}

export default withRouter(NewGameForm);
