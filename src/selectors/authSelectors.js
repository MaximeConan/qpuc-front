import { get } from 'lodash'
import { IDLE } from '../enums/formStatustypes'

export const selectFormStatus = (state) => get(state, 'auth.formStatus', IDLE)
