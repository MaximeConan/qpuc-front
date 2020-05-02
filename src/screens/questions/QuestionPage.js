import React, { useEffect, useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isNil } from 'lodash'

import { getQuestion } from '../../actions/questionActions'
import { selectQuestion, selectIsLoading } from '../../selectors/questionSelectors'

import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

import * as Styled from './__styles__/QuestionPage.styles'

const QuestionPage = () => {
	const [ index, setIndex ] = useState(1)
	const [ answer, setAnswer ] = useState('')
	const [ solution, setSolution ] = useState('')
	const [ toggleSolution, setToggleSolution ] = useState(false)
	const [ solutionToShow, setSolutionToShow ] = useState(false)
	const [ iscorrectAnswer, setIsCorrectAnswer ] = useState(false)
	const [ timer, setTimer ] = useState({ isLaunched: false, time: { hours: 0, minutes: 0, seconds: 0 } })

	const dispatch = useDispatch()
	const data = useSelector(selectQuestion)
	const isLoading = useSelector(selectIsLoading)

	console.log(data)

	useEffect(() => {
		dispatch(getQuestion(1))
	}, [dispatch])

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

	const onAnswerSubmit = (e) => {
		e.preventDefault()

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

	return !isLoading && !isNil(data) ? (
		<Styled.Root>
			<Styled.Content>
				<Styled.FormContainer>
					{iscorrectAnswer ? (
						<Styled.SuccessMessage>
							Bien joué !{' '}
							<span role="img" aria-label="emoji">
								😁
							</span>
							<span role="img" aria-label="emoji">
								🚀
							</span>
						</Styled.SuccessMessage>
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
								<Button label="Envoyer la réponse" width="100%" onClick={(e) => onAnswerSubmit(e)} />
								{solutionToShow ? (
									<div>
										<Styled.ErrorMessage>
											Malheureusement c'est la mauvaise réponse{' '}
											<span role="img" aria-label="emoji">
												😥
											</span>
										</Styled.ErrorMessage>
										{!toggleSolution ? (
											<Styled.ToggleSolution onClick={onToggleSolution}>
												Du mal à trouver la réponse ? Tu peux cliquer ici{' '}
												<span role="img" aria-label="emoji">
													🙋
												</span>
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
					{data.question.length !==data.questionLength && (
						<Styled.Timer>{`⌛ | Prochain indice dans: ${10 - secondsToString.charAt(1)}`}</Styled.Timer>
					)}
					{data.question.map(({ step, indice }, index) => {
						return <Styled.Tips key={index}>{`${step}: ${indice}`}</Styled.Tips>
					})}
					{data.questionLength ? (
						data.question.length === data.questionLength && (
							<Styled.CatchPhrase>Je suis, je suis, je suiiiiiiiiiis ....</Styled.CatchPhrase>
						)
					) : (
						<Styled.Loader size="large" />
					)}
				</Styled.TipsContainer>
			</Styled.Content>
		</Styled.Root>
	) : (
		<Styled.Loader />
	)
}

export default QuestionPage
