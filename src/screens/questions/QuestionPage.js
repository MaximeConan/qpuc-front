import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'

import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

import * as Styled from './__styles__/QuestionPage.styles'

const QuestionPage = () => {
	const [ data, setData ] = useState(null)
	const [ isLoading, setIsLoading ] = useState(false)
	const [ index, setIndex ] = useState(1)
	const [ currentQuestion, setCurrentQuestion ] = useState([])
	const [ questionLength, setQuestionLength ] = useState(0)
	const [ answer, setAnswer ] = useState('')
	const [ solution, setSolution ] = useState('')
	const [ toggleSolution, setToggleSolution ] = useState(false)
	const [ solutionToShow, setSolutionToShow ] = useState(false)
	const [ iscorrectAnswer, setIsCorrectAnswer ] = useState(false)
	const [ timer, setTimer ] = useState({ isLaunched: false, time: { hours: 0, minutes: 0, seconds: 0 } })

	useEffect(() => {
		setIsLoading(true)
		axios
			.get('http://127.0.0.1/question/read/1')
			.then((res) => {
				setData(res.data)
				setQuestionLength(res.data.question_length)
				setTimer({ ...timer, isLaunched: true })
				setIsLoading(false)
			})
			.catch((error) => {
				console.error(error)
				setIsLoading(false)
			})

		axios
			.get('http://127.0.0.1/question/read/solution/1')
			.then((res) => {
				setSolution(res.data.answer_correct.text)
			})
			.catch((error) => console.error(error))
	}, [])

	useEffect(
		() => {
			const { hours, minutes, seconds } = timer.time
			setTimeout(() => {
				setTimer({
					...timer,
					time: {
						hours: minutes === 59 ? hours + 1 : hours,
						minutes: seconds === 59 ? minutes + 1 : minutes,
						seconds: seconds === 59 ? 0 : seconds + 1
					}
				})
			}, 1000)
		},
		[ timer ]
	)

	useEffect(
		() => {
			if (data && currentQuestion.length !== questionLength) {
				setTimeout(() => {
					setIndex(index + 1)
					setCurrentQuestion([ ...currentQuestion, data.question[index] ])
				}, 10000)
			} else if (data && currentQuestion.length === 0) {
				setCurrentQuestion([ ...currentQuestion, data.question[0] ])
			}
		},
		[ data, currentQuestion, questionLength ]
	)

	const onAnswerSubmit = (e) => {
		e.preventDefault()
		axios
			.post('http://127.0.0.1/question/repondre/1', {
				text: answer,
				duration: `${timer.time.hours}:${timer.time.minutes}:${timer.time.seconds}`
			})
			.then(function(response) {
				setSolutionToShow(!response.data.eval_answer)
				setIsCorrectAnswer(response.data.eval_answer)
			})
			.catch(function(error) {
				console.log(error)
			})

		setAnswer('')
	}

	const onToggleSolution = () => {
		if (toggleSolution) {
			setToggleSolution(false)
		} else {
			setToggleSolution(true)
		}
	}

	const hours = timer.time.hours < 10 ? `0${timer.time.hours}` : `${timer.time.hours}`
	const minutes = timer.time.minutes < 10 ? `0${timer.time.minutes}` : `${timer.time.minutes}`
	const seconds = timer.time.seconds < 10 ? `0${timer.time.seconds}` : `${timer.time.seconds}`
	const secondsToString = seconds.toString()

	return !isLoading ? (
		<Styled.Root>
			<Styled.Content>
				<Styled.FormContainer>
					{iscorrectAnswer ? (
						<Styled.SuccessMessage>Bien joué ! 😁🚀</Styled.SuccessMessage>
					) : (
						<Fragment>
							<Styled.Timer>{`🏁 | Temps passé : ${hours}:${minutes}:${seconds}`}</Styled.Timer>
							<Styled.Form onSubmit={(e) => onAnswerSubmit(e)}>
								<Input
									type="text"
									placeholder="Entrez la réponse"
									name="answer"
									value={answer}
									onChange={(e) => setAnswer(e.target.value)}
								/>
								<Button label="Envoyer la réponse" width="100%" />
								{solutionToShow ? (
									<div>
										<Styled.ErrorMessage>
											Malheureusement c'est la mauvaise réponse 😥
										</Styled.ErrorMessage>
										{!toggleSolution ? (
											<Styled.ToggleSolution onClick={onToggleSolution}>
												Du mal à trouver la réponse ? Tu peux cliquer ici 🙋
											</Styled.ToggleSolution>
										) : (
											<div>{solution}</div>
										)}
									</div>
								) : null}
							</Styled.Form>
						</Fragment>
					)}
				</Styled.FormContainer>
				<Styled.TipsContainer>
					{currentQuestion.length !== questionLength && (
						<Styled.Timer>{`⌛ | Prochain indice dans: ${10 - secondsToString.charAt(1)}`}</Styled.Timer>
					)}
					{currentQuestion.map(({ step, indice }, index) => {
						return <Styled.Tips key={index}>{`${step}: ${indice}`}</Styled.Tips>
					})}
					{currentQuestion.length === questionLength && (
						<Styled.CatchPhrase>Je suis, je suis, je suiiiiiiiiiis ....</Styled.CatchPhrase>
					)}
				</Styled.TipsContainer>
			</Styled.Content>
		</Styled.Root>
	) : (
		<Styled.Loader />
	)
}

export default QuestionPage
