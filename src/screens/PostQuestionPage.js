import React, { useState} from 'react'
import { FileAddOutlined, DeleteOutlined } from '@ant-design/icons'
import { Alert, Tooltip } from 'antd'

import * as Styled from './__styles__/PostQuestionPage.styles'

const PostQuestionPage = () => {
  const [steps, setSteps] = useState([{ input: 'input-0', step: 1, indice: '' }])
  const [answer, setAnswer] = useState()
  const [answersList, setAnswersList] = useState([])

  const onAddStepClick = () => {
      const newInput = `input-${steps.length}`
      setSteps([...steps, {input: newInput, step: steps.length + 1, indice: ''}])
  }

  const onRemoveStepClick = step => {
    const newSteps = steps.filter(item => item.step !== step)
    setSteps(newSteps)
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
              steps.map(({ step, indice }, index) => {
                console.log(indice)
                return (
                  <Styled.StepsInputContainer key={index}>
                    <Styled.InputContainer>
                      <input placeholder={`Renseignez votre indice n°${step}`} value={indice} onChange={e => {
                        steps[index].indice = e.target.value
                        setSteps([...steps])
                      }} />
                      {index !== 0 && 
                        <Tooltip title="Retirer cette étape">
                          <Styled.Icon onClick={() => onRemoveStepClick(step)}>
                            <DeleteOutlined />
                          </Styled.Icon>
                        </Tooltip>
                      }
                      <Tooltip title={indice === '' ? `Vous devez remplir le champs avant d'en ajouter` : `Ajouter une étape`}>
                        <Styled.Icon onClick={indice !== '' && onAddStepClick}>
                          <FileAddOutlined />
                        </Styled.Icon>
                      </Tooltip>
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
                {answersList.map((answer, index) => {
                  return (
                    <Styled.AnswerTag
                      key={index}
                    >
                      <div>
                        {answer}
                          <DeleteOutlined onClick={() => onAnswerDelete(answer)}/>
                      </div>
                    </Styled.AnswerTag>
                  )
                })}  
              </Styled.AnswersContainer>
            </Styled.Form>
        </Styled.FormContainer>
        <Styled.TipsContainer>
            <Styled.Tips>
              <FileAddOutlined />
              <h4>Je suis un titre 4</h4>
              <p>
                Additional description and information about copywriting.
                Additional description and information about copywriting.
                Additional description and information about copywriting.
              </p>
            </Styled.Tips>
            <Styled.Tips>
              <FileAddOutlined />
              <h4>Je suis un titre 4</h4>
              <p>
                Additional description and information about copywriting.
                Additional description and information about copywriting.
                Additional description and information about copywriting.
              </p>
            </Styled.Tips>
            <Styled.Tips>
              <FileAddOutlined />
              <h4>Je suis un titre 4</h4>
              <p>
                Additional description and information about copywriting.
                Additional description and information about copywriting.
                Additional description and information about copywriting.
              </p>
            </Styled.Tips>
        </Styled.TipsContainer>
      </Styled.Content>
    </Styled.Root>
  )
}

export default PostQuestionPage