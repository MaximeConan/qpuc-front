import React, { useState } from 'react'
import { FileAddOutlined, DeleteOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'

import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

import * as Styled from './__styles__/PostQuestionPage.styles'

const PostQuestionPage = () => {
	const [ steps, setSteps ] = useState([ { input: 'input-0', step: 1, indice: '' } ])
	const [ answer, setAnswer ] = useState()
	const [ answersList, setAnswersList ] = useState([])

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

	const onPostQuestionSubmit = (e) => {
		e.preventDefault()
	}

	const onPostAnswers = (e) => {
		e.preventDefault()
		setAnswersList([ ...answersList, answer ])
		setAnswer('')
	}

	const onAnswerDelete = (answer) => {
		setAnswersList(answersList.filter((item) => item !== answer))
	}

	return (
		<Styled.Root>
			<Styled.Content>
				<Styled.FormContainer>
					<Styled.Form>
						<h2>Ajoutez les indices de votre question</h2>
						{steps.map(({ step, indice }, index) => {
							console.log(indice)
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
											spaces={{ bottom: 0, right: 1 }}
										/>
										{index !== 0 && (
											<Tooltip title="Retirer cette étape">
												<Button
													onClick={(e) => onRemoveStepClick(e, step)}
													spaces={{ bottom: 0 }}
												>
													<DeleteOutlined />
												</Button>
											</Tooltip>
										)}
										<Tooltip
											title={
												indice === '' ? (
													`Vous devez remplir le champs avant d'en ajouter`
												) : (
													`Ajouter une étape`
												)
											}
										>
											<Button onClick={(e) => onAddStepClick(e, indice)} spaces={{ bottom: 0 }}>
												<FileAddOutlined />
											</Button>
										</Tooltip>
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
						<Button onClick={onPostAnswers} label="Ajouter une réponse" width="50%" />
						<Styled.AnswersContainer>
							{answersList.map((answer, index) => {
								return (
									<Styled.AnswerTag key={index}>
										<div>{answer}</div>
										<Tooltip title="Supprimer cette réponse">
											<DeleteOutlined onClick={() => onAnswerDelete(answer)} />
										</Tooltip>
									</Styled.AnswerTag>
								)
							})}
						</Styled.AnswersContainer>
					</Styled.Form>
				</Styled.FormContainer>
				<Styled.TipsContainer>
					<Styled.Tips>
						<InfoCircleOutlined />
						<h4>Je suis un titre 4</h4>
						<p>
							Additional description and information about copywriting. Additional description and
							information about copywriting. Additional description and information about copywriting.
						</p>
					</Styled.Tips>
					<Styled.Tips>
						<InfoCircleOutlined />
						<h4>Je suis un titre 4</h4>
						<p>
							Additional description and information about copywriting. Additional description and
							information about copywriting. Additional description and information about copywriting.
						</p>
					</Styled.Tips>
					<Styled.Tips>
						<InfoCircleOutlined />
						<h4>Je suis un titre 4</h4>
						<p>
							Additional description and information about copywriting. Additional description and
							information about copywriting. Additional description and information about copywriting.
						</p>
					</Styled.Tips>
				</Styled.TipsContainer>
			</Styled.Content>
		</Styled.Root>
	)
}

export default PostQuestionPage
