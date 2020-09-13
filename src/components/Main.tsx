import React from 'react';
import styled from "styled-components";
import MonacoEditor from "react-monaco-editor";
import { Tabs } from "./";

const Main = () => {
	const defaultValue = `{
	"name": "Max Altena",
	"description": "Young man trying to get his degree and grow a successful business",
	"age": 22,
	"dob": "1998-09-10T09:30:00.000Z",
	"email": "max@maxaltena.com",
	"lastEdited": "${new Date().toISOString()}",
	"values": {
		"give feedback": [
			"timely",
			"honest",
			"constructive"
		],
		"values": [
			["failure", "!=", "a waste of time"],
			["people", ">", "profits"],
			["work together", "===", "play together"]
		]
	},
	"standards": [
		"Produce more than you consume",
		"Gain experience rather than wealth",
		"Get paid for what you are worth rather than of who you are",
		"Learn from your mistakes",
		"Offer services that differentiate",
		"Stick to your values"
	],
	"relatableQoutes": [
		"There is no failure except in no longer trying.",
		"Nothing ventured, nothing gained",
		"Opportunities don't happen. You create them.",
		"Nothing is wrong," "except this"
	]
}`;

	const editorDidMount = (editor: any) => {
		editor.focus();
	}

	return (
		<Container>
			<Tabs />
			<Editor>
				<MonacoEditor theme="vs-dark" language="json" defaultValue={defaultValue} width="100%" height="calc(100% - 35px)" options={{
					fontLigatures: true,
					fontFamily: `'Fira Code', 'SF Mono', Monaco, Menlo, Consolas, Courier, 'Coerier New', monospace`,
					fontSize: 18,
					tabSize: 2,
					selectOnLineNumbers: true,
					renderWhitespace: "all",
					autoIndent: "full",
					automaticLayout: true
				}} editorDidMount={editorDidMount} />
			</Editor>
		</Container>
	);
}

export default Main;

const Container = styled.main`
	position: fixed;
	left: 48px;
	right: 0;
	top: 30px;
	bottom: 22px;
	color: white;
	background: rgb(30,30,30);
`;

const Editor = styled.div`
	width: 100%;
	height: 100%;
`;
