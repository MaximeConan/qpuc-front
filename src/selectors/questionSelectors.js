import { get } from 'lodash'

export const selectIsLoading = state => get(state, 'question.isLoading', false)
export const selectQuestion = state => get(state, 'question.data', null)
