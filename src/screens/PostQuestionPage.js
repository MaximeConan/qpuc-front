import React, { useState , Fragment} from 'react'

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
  
  return (
    <Styled.Root>
      <Styled.FormContainer>
        <Styled.Form>
          <h2>Ajoutez les indices de votre question</h2>
          {
            steps.map(({ input, step, indice }, index) => {
              return (
                <Styled.InputContainer key={index}>
                  <div>{`Étape: ${step}`}</div>
                  <Styled.Input placeholder="Renseignez votre indice" onChange={e => {
                    steps[index].indice = e.target.value
                    setSteps([...steps])
                  }} />
                </Styled.InputContainer>
              )
            })
          }
          <Styled.ButtonStepsContainer>
            <Styled.Button onClick={onAddStepClick}>Ajouter une étape</Styled.Button>
            <Styled.Button onClick={onRemoveStepClick}>Enlever une étape</Styled.Button>
          </Styled.ButtonStepsContainer>
        </Styled.Form>

          <Styled.Form onSubmit={e => onPostAnswers(e)}>
          <h2>Ajoutez la réponse à votre question</h2>
            <Styled.Input placeholder="Ajoutez une réponse" value={answer} onChange={e => setAnswer(e.target.value)} />
            <Styled.Button onClick={onPostAnswers}>Ajouter une réponse</Styled.Button>
            <Styled.AnswersContainer>
              {answersList.map((answer, index) => <Styled.AnswerTag key={index}>{answer}</Styled.AnswerTag>)}  
            </Styled.AnswersContainer>
          </Styled.Form>
      </Styled.FormContainer>
      <Styled.FormContainer>
        <Styled.Button onClick={onPostQuestionSubmit}>Soumettre votre question</Styled.Button>
      </Styled.FormContainer>
    </Styled.Root>
  )
}

export default PostQuestionPage