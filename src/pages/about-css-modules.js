import React from "react";
import styles from "./about-css-modules.module.css";
import Container from "../components/container";

const User = props =>
	<div classNames={styles.user}>
		<img src={props.avatar} className={styles.avatar} alt="" />

		<div className={styles.description}>
			<h2 className={styles.username}>
				{props.username}
			</h2>
			<p className={styles.excerpt}>
				{props.excerpt}
			</p>
		</div>
	</div>

export default () => (
	<Container>
		<h1>CSS Modules</h1>
		<p>CSS Modules test.</p>

		<User
			username="Justin Kim"
			avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
			excerpt="Hello, here is a description"
		/>

		<User
			username="Second User"
			avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
			excerpt="second user"
		/>
	</Container>
);