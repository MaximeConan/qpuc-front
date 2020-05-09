import { get } from 'lodash'

export const selectToken = (state) => get(state, 'token', null)
