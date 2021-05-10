import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import CharacterForm from './CharacterForm'
import savedGamesService from '../../../services/savedGames.service'
import chapterService from '../../../services/chapter.service'
import { Button } from '../../shared/Buttons'

function NewSaveGame({
	loggedInUser,
	setUser,
	match,
	updateSavedGames,
	history
}) {
	const ChapterService = new chapterService()
	const SavedGamesService = new savedGamesService()
	const [, setCharacter] = useState(null)
	const [showForm, setShowForm] = useState(false)

	function toogleForm() {
		setShowForm(!showForm)
	}

	function newSave(chosenCharacter) {
		ChapterService.getChaptersFromGame(match.params.gameId)
			.then(chapters => {
				return SavedGamesService.createSavedGame({
					gameId: match.params.gameId,
					currentChapter: chapters[0]._id,
					character: chosenCharacter
				})
			})
			.then(savedGame => {
				updateSavedGames(savedGame)
				history.push(`/chapter/${savedGame._id}`)
				return SavedGamesService.assignSaveToUser(
					loggedInUser._id,
					savedGame._id
				)
			})
			.then(updatedUser => {
				setUser(updatedUser)
			})
	}

	//TODO MODAL DE APP.JS
	return (
		<>
			<Button onClick={toogleForm}>
				También puedes crear un nuevo personaje
			</Button>
			{showForm && (
				<CharacterForm
					hideForm={toogleForm}
					setUser={setUser}
					loggedInUser={loggedInUser}
					setCharacter={setCharacter}
				/>
			)}
		</>
	)
}

export default withRouter(NewSaveGame)
