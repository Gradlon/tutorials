import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/SkiDayList'

window.React = React

render(
	<SkiDayList days={
		[
			{
				resort: 			"Squa Valley",
				date:					new date("1/2/2016"),
				powder: 			true,
				backcountry: 	false
			},
			{
				resort: 			"Kirkwood",
				date:					new date("3/2/2016"),
				powder: 			false,
				backcountry: 	false
			},
			{
				resort: 			"Mt. Tallac",
				date:					new date("4/2/2016"),
				powder: 			false,
				backcountry: 	true
			},
		]
	}/>,
	document.getElementById('react-container')
)
