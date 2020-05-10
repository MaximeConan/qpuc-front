import { get } from 'lodash'

import { IDLE } from '../enums/formStatustypes'

export const selectIsLoading = (state) => get(state, 'question.isLoading', false)
export const selectQuestion = (state) => get(state, 'question.data', null)
export const selectFormStatus = (state) => get(state, 'question.formStatus', IDLE)
