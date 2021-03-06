import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import styled from 'styled-components'
import gamesService from '../../../services/games.service'
import { withRouter } from 'react-router-dom'
import { Button } from '../../shared/Buttons'

const FormWrapper = styled.div`
	max-width: 800px;
	background-color: ${props => props.theme.colors.greenish};
	padding: 60px;
	margin: auto;

	input {
		margin-top: 5px;
		margin-bottom: 20px;
		background-color: rgb(235, 235, 235);
	}
`

function NewGameForm(props) {
	const { loggedInUser, history, simple } = props
	const GamesService = new gamesService()
	const [title, setTitle] = useState('')
	const [minLevel, setMinLevel] = useState(1)
	const [description, setDescription] = useState('')

	function submitForm(e) {
		e.preventDefault()
		if (simple) {
			setMinLevel(1)
		}

		GamesService.createGame({
			creator: loggedInUser._id,
			title,
			minLevel,
			description,
			simple
		}).then(createdGame => {
			history.push(`/modify/${createdGame._id}`)
		})
	}

	function onChange(e) {
		const { name, value } = e.currentTarget
		switch (name) {
			case 'title':
				setTitle(value)
				break
			case 'description':
				setDescription(value)
				break
			case 'minLevel':
				setMinLevel(value)
				break
			default:
				throw Error('Algo ha ido mal con el formulario')
		}
	}

	return (
		<FormWrapper>
			<h2>Crear un nuevo juego es muy sencillo tan solo necesitas...</h2>
			<Form onSubmit={submitForm}>
				<Form.Group controlId='title'>
					<Form.Label>Elegir un titulo:</Form.Label>
					<Form.Control
						name='title'
						onChange={onChange}
						value={title}
						type='text'
						placeholder='El titulo de tu historia!'
					/>
				</Form.Group>

				{!simple && (
					<Form.Group controlId='minLevel'>
						<Form.Label>Un nivel mínimo para comenzar la aventura:</Form.Label>
						<p>{minLevel}</p>
						<Form.Control
							name='minLevel'
							onChange={onChange}
							value={minLevel}
							type='range'
							min='1'
							max='20'
							step='1'
							placeholder='Ej: 5'
						/>
						<Form.Text className='text-muted'>
							Las aventuras básicas comienzan en nivel 1, de 8 a 14 ya son todo
							un reto, a partir de ahí los heroes pueden luchar contra los
							mismos dioses.
						</Form.Text>
					</Form.Group>
				)}

				<Form.Group controlId='description'>
					<Form.Label>
						¡El resumen de tu aventura! Hazlo atractivo de forma que la gente
						quiera jugarla ;)
					</Form.Label>
					<Form.Control
						name='description'
						onChange={onChange}
						value={description}
						type='text'
						placeholder='Tu resumen'
					/>
				</Form.Group>
				<Button onClick={submitForm} type='submit'>
					<p>Crear Historia</p>
				</Button>
			</Form>
		</FormWrapper>
	)
}

export default withRouter(NewGameForm)
