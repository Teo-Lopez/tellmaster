import React, { useState } from 'react'
import NewGameForm from './NewGameForm'
import ModeSelect from './ModeSelect'
function NewGame({ loggedInUser, updateLastGames }) {
	const [simple, setSimple] = useState(null)
	if (simple === null) {
		return <ModeSelect setMode={setSimple} />
	} else {
		return (
			<div styled={{ height: '100%', display: 'flex' }}>
				<NewGameForm simple={simple} updateLastGames={updateLastGames} loggedInUser={loggedInUser}></NewGameForm>
			</div>
		)
	}
}

export default NewGame
