import React from "react"
import Link from "gatsby-link"

export default () =>
	<div style= {{ color: `blue` }}>
		<h1>Hello world!</h1>
		<p>asdf</p>
		<div>
			<Link to="/page-2/">HERES A LINK</Link>
		</div>
		<div>
			<Link to="/counter/">Counter</Link>
		</div>
	</div>