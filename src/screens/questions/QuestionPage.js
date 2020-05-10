import React, { useEffect, useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isNil } from 'lodash'

import { getQuestion, postAnswer } from '../../actions/questionActions'
import { selectQuestion, selectIsLoading, selectFormStatus } from '../../selectors/questionSelectors'

import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import LeftContainer from '../../components/Layout/LeftContainer'
import RightContainer from '../../components/Layout/RightContainer'
import GlobalContainer from '../../components/Layout/GlobalContainer'

import * as Styled from './__styles__/QuestionPage.styles'

const QuestionPage = () => {
	const [ index, setIndex ] = useState(1)
	const [ answer, setAnswer ] = useState('')
	const [ iscorrectAnswer, setIsCorrectAnswer ] = useState(false)
	const [ currentQuestion, setCurrentQuestion ] = useState([])
	const [ timer, setTimer ] = useState({ isLaunched: false, time: { hours: 0, minutes: 0, seconds: 0 } })

	const dispatch = useDispatch()
	const data = useSelector(selectQuestion)
	const isLoading = useSelector(selectIsLoading)
	const formStatus = useSelector(selectFormStatus)

	useEffect(
		() => {
			dispatch(getQuestion())
		},
		[ dispatch ]
	)

	useEffect(
		() => {
			if (data && currentQuestion.length !== data.questionLength && currentQuestion.length !== 0) {
				setTimeout(() => {
					setIndex(index + 1)
					setCurrentQuestion([ ...currentQuestion, data.question[index] ])
				}, 10000)
			} else if (data && currentQuestion.length === 0) {
				setCurrentQuestion([ ...currentQuestion, data.question[0] ])
			}
		},
		[ data, currentQuestion ]
	)

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

	console.log(currentQuestion)

	const onAnswerSubmit = (e) => {
		e.preventDefault()
		dispatch(postAnswer(data.id, answer, timer.time))
		setAnswer('')
	}

	const hours = timer.time.hours < 10 ? `0${timer.time.hours}` : `${timer.time.hours}`
	const minutes = timer.time.minutes < 10 ? `0${timer.time.minutes}` : `${timer.time.minutes}`
	const seconds = timer.time.seconds < 10 ? `0${timer.time.seconds}` : `${timer.time.seconds}`
	const secondsToString = seconds.toString()

	return !isLoading ? (
		<GlobalContainer>
			{!isNil(currentQuestion) && !isNil(data) ? (
				<Fragment>
					<LeftContainer>
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
									<Button
										label="Envoyer la réponse"
										width="100%"
										onClick={(e) => onAnswerSubmit(e)}
									/>
									{data.isCorrectAnswer === false ? (
										<div>
											<Styled.ErrorMessage>
												Malheureusement c'est la mauvaise réponse{' '}
												<span role="img" aria-label="emoji">
													😥
												</span>
											</Styled.ErrorMessage>
										</div>
									) : (
										!isNil(data.isCorrectAnswer) && <div>Félicitations</div>
									)}
								</Styled.Form>
							</Fragment>
						)}
					</LeftContainer>
					<RightContainer>
						{currentQuestion.length !== data.questionLength && (
							<Styled.Timer>{`⌛ | Prochain indice dans: ${10 - secondsToString.charAt(1)}`}</Styled.Timer>
						)}

						{currentQuestion.map(({ step, indice }, index) => {
							return <Styled.Tips key={index}>{`${step}: ${indice}`}</Styled.Tips>
						})}

						{currentQuestion.length === data.questionLength && (
							<Styled.CatchPhrase>Je suis, je suis, je suiiiiiiiiiis ....</Styled.CatchPhrase>
						)}
					</RightContainer>
				</Fragment>
			) : (
				<h1>Désolé, mais tu as déjà répondu à toutes les questions du jour !</h1>
			)}
		</GlobalContainer>
	) : (
		<Styled.Loader />
	)
}

export default QuestionPage
