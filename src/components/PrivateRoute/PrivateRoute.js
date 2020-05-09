import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectToken } from '../../selectors/tokenSelectors'

const PrivateRoute = ({ children, ...rest }) => {
	const token = useSelector(selectToken)

	return (
		<Route
			{...rest}
			render={({ location }) =>
				token ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/connexion',
							state: { from: location }
						}}
					/>
				)}
		/>
	)
}

export default PrivateRoute
