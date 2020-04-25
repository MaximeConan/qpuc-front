import React, { useState} from 'react'
import { FileAddOutlined, DeleteOutlined } from '@ant-design/icons'

import * as Styled from './__styles__/PostQuestionPage.styles'

const PostQuestionPage = () => {
  const [steps, setSteps] = useState([{ input: 'input-0', step: 1, indice: '' }])
  const [answer, setAnswer] = useState()
  const [answersList, setAnswersList] = useState([])

  const onAddStepClick = () => {
      const newInput = `input-${steps.length}`
      setSteps([...steps, {input: newInput, step: steps.length + 1, indice: ''}])
  }

  const onRemoveStepClick = () => {
    setSteps(steps.splice(-1,1))
    console.log(steps)
  }

  const onPostQuestionSubmit = e => {
    e.preventDefault()
  }

  const onPostAnswers = e => {
    e.preventDefault()
    setAnswersList([...answersList, answer])
    setAnswer('')
  }

  const onAnswerDelete = answer => {
    setAnswersList(answersList.filter(item => item !== answer))
  }
  
  return (
    <Styled.Root>
      <Styled.Content>
        <Styled.FormContainer>
          <Styled.Form>
            <h2>Ajoutez les indices de votre question</h2>
            {
              steps.map(({ input, step, indice }, index) => {
                console.log(step, index)
                return (
                  <Styled.StepsInputContainer key={index}>
                    <Styled.InputContainer>
                      <input placeholder={`Renseignez votre indice n°${step}`} onChange={e => {
                        steps[index].indice = e.target.value
                        setSteps([...steps])
                      }} />
                      {index !== 0 && 
                      <Styled.Icon onClick={onRemoveStepClick}>
                        <DeleteOutlined />
                      </Styled.Icon>}
                      <Styled.Icon onClick={onAddStepClick}>
                        <FileAddOutlined />
                      </Styled.Icon>
                    </Styled.InputContainer>
                  </Styled.StepsInputContainer>
                )
              })
            }
          </Styled.Form>

            <Styled.Form onSubmit={e => onPostAnswers(e)}>
            <h2>Ajoutez la réponse à votre question</h2>
            <p>(vous pouvez ajouter plusieurs réponses)</p>
              <Styled.Input placeholder="Ajoutez une réponse" value={answer} onChange={e => setAnswer(e.target.value)} />
              <Styled.Button onClick={onPostAnswers}>Ajouter une réponse</Styled.Button>
              <Styled.AnswersContainer>
                {answersList.map((answer, index) => <Styled.AnswerTag key={index} onClick={() => onAnswerDelete(answer)}>{answer}</Styled.AnswerTag>)}  
              </Styled.AnswersContainer>
            </Styled.Form>
        </Styled.FormContainer>
        <Styled.TipsContainer>Hellos</Styled.TipsContainer>
      </Styled.Content>
    </Styled.Root>
  )
}

export default PostQuestionPage