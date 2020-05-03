const primaryColor = '#ff7091'
const secondaryColor = '#f3c623'
const primaryTextColor = '#FFF'
const darkGrey = '#222'

export default {
	breakpoints: [ 768, 981, 1024, 1240 ],
	devices: {
		sm: '@media (max-width: 768px)',
		md: '@media (max-width: 981px)',
		lg: '@media (max-width: 1024px)',
		xl: '@media (max-width: 1240px)'
	},
	colors: {
		primaryColor,
		secondaryColor,
		primaryTextColor,
		darkGrey
	},
	spaces: {
		small: '1em',
		medium: '2em',
		large: '3em'
	},
	components: {
		nav: {
			height: '80px'
		}
	},
	borderRadius: {
		small: '3px',
		medium: '5px',
		large: '8px'
	}
}
