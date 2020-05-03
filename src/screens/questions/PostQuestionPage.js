import React, { useState } from 'react'
import { isEmpty } from 'lodash'
import { useDispatch } from 'react-redux'
import { FileAddOutlined, DeleteOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'

import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import LeftContainer from '../../components/Layout/LeftContainer'
import RightContainer from '../../components/Layout/RightContainer'
import GlobalContainer from '../../components/Layout/GlobalContainer'

import useBreakpoint from '../../hooks/useBreakpoint'
import { SM, MD } from '../../enums/breakpointsTypes'
import { createQuestion } from '../../actions/questionActions'

import * as Styled from './__styles__/PostQuestionPage.styles'

const PostQuestionPage = () => {
	const [ steps, setSteps ] = useState([ { input: 'input-0', step: 1, indice: '' } ])
	const [ answer, setAnswer ] = useState()
	const [ answersList, setAnswersList ] = useState([])

	const breakpoint = useBreakpoint()
	const dispatch = useDispatch()

	const onAddStepClick = (e, indice) => {
		e.preventDefault()
		const newInput = `input-${steps.length}`
		indice !== '' && setSteps([ ...steps, { input: newInput, step: steps.length + 1, indice: '' } ])
	}

	const onRemoveStepClick = (e, step) => {
		e.preventDefault()
		const newSteps = steps.filter((item) => item.step !== step)
		setSteps(newSteps)
	}

	const onPostAnswers = (e) => {
		e.preventDefault()
		setAnswersList([ ...answersList, { answer } ])
		setAnswer('')
	}

	const onAnswerDelete = (answer) => {
		setAnswersList(answersList.filter((item) => item !== answer))
	}

	const onPostQuestion = () => {
		if (!isEmpty(steps[0].indice) && !isEmpty(answersList)) {
			const sanitizedSteps = steps.map(({ input, ...rest }) => rest)
			const sanitizedAnswerList = answersList.map((answer, index) => {
				return { ...answer, is_principal: index === 0 ? true : false }
			})

			dispatch(createQuestion(sanitizedSteps, sanitizedAnswerList))
		}
	}

	return (
		<GlobalContainer>
			<LeftContainer>
				<Styled.Form>
					<h2>Ajoutez les indices de votre question</h2>
					{steps.map(({ step, indice }, index) => {
						return (
							<Styled.StepsInputContainer key={index}>
								<Styled.InputContainer>
									<Input
										placeholder={`Renseignez votre indice n°${step}`}
										value={indice}
										onChange={(e) => {
											steps[index].indice = e.target.value
											setSteps([ ...steps ])
										}}
										spaces={{
											bottom: breakpoint === SM || breakpoint === MD ? 1 : 0,
											right: breakpoint === SM || breakpoint === MD ? 0 : 1
										}}
									/>
									<Styled.ButtonsContainer>
										{index !== 0 && (
											<Button
												onClick={(e) => onRemoveStepClick(e, step)}
												spaces={{
													bottom: 0,
													right: breakpoint === SM || breakpoint === MD ? 0 : 1
												}}
												width={breakpoint === SM || breakpoint === MD ? '48%' : null}
											>
												<Tooltip title="Retirer cette étape">
													<DeleteOutlined />
												</Tooltip>
											</Button>
										)}
										<Button
											onClick={(e) => onAddStepClick(e, indice)}
											spaces={{ bottom: 0 }}
											width={breakpoint === SM || breakpoint === MD ? '48%' : null}
										>
											<Tooltip
												title={
													indice === '' ? (
														`Vous devez remplir le champs avant d'en ajouter`
													) : (
														`Ajouter une étape`
													)
												}
											>
												<FileAddOutlined />
											</Tooltip>
										</Button>
									</Styled.ButtonsContainer>
								</Styled.InputContainer>
							</Styled.StepsInputContainer>
						)
					})}
				</Styled.Form>

				<Styled.Form onSubmit={(e) => onPostAnswers(e)}>
					<h2>Ajoutez la réponse à votre question</h2>
					<p>(vous pouvez ajouter plusieurs réponses)</p>
					<Input
						placeholder="Ajoutez une réponse"
						value={answer}
						onChange={(e) => setAnswer(e.target.value)}
					/>
					<Button
						onClick={onPostAnswers}
						label="Ajouter une réponse"
						width={breakpoint === SM || breakpoint === MD ? '100%' : '50%'}
					/>
					<Styled.AnswersContainer>
						{answersList.map((answer, index) => {
							return (
								<Styled.AnswerTag key={index}>
									<div>{answer.answer}</div>
									<Tooltip title="Supprimer cette réponse">
										<DeleteOutlined onClick={() => onAnswerDelete(answer)} />
									</Tooltip>
								</Styled.AnswerTag>
							)
						})}
					</Styled.AnswersContainer>
				</Styled.Form>
			</LeftContainer>
			<RightContainer>
				<Styled.Tips>
					<InfoCircleOutlined />
					<h4>Informations avant de publier</h4>
					<p>
						Additional description and information about copywriting. Additional description and information
						about copywriting. Additional description and information about copywriting.
					</p>
				</Styled.Tips>
				<Styled.Tips>
					<InfoCircleOutlined />
					<h4>Vous êtes prêt à publier votre question ?</h4>
					<Button label="Publier ma question" onClick={onPostQuestion} />
				</Styled.Tips>
			</RightContainer>
		</GlobalContainer>
	)
}

export default PostQuestionPage
