import { useEffect, useState, useCallback } from 'react'

import theme from '../__theme__/theme'
import { LG, MD, SM, XL } from '../enums/breakpointsTypes'

const useBreakpoint = () => {
	const [ breakpoint, setBreakpoint ] = useState(null)

	const onResize = useCallback((e) => {
		setBreakpoint(resolveBreakpoint(e.target.innerWidth))
	}, [])

	useEffect(
		() => {
			setBreakpoint(resolveBreakpoint(window.innerWidth))
			window.addEventListener('resize', onResize)

			return () => {
				window.removeEventListener('resize', onResize)
			}
		},
		[ onResize ]
	)

	const resolveBreakpoint = (width) => {
		switch (true) {
			case width <= theme.breakpoints[0]: {
				return SM
			}
			case width <= theme.breakpoints[1]: {
				return MD
			}
			case width <= theme.breakpoints[2]: {
				return LG
			}
			case width <= theme.breakpoints[3]:
			default: {
				return XL
			}
		}
	}

	return breakpoint
}

export default useBreakpoint
