import React from 'react';
import styled from "styled-components";
import MonacoEditor from "react-monaco-editor";
import { Tabs } from "./";

const Main = () => {
	const defaultValue = `{
	"name": "Max Altena",
	"age": 22,
	"dob": "1998-09-10T00:00:00.000Z",
	"email": "max@maxaltena.com",
	"lastEdited": "${new Date().toISOString()}",
	"values": {
		"Get paid for what you are worth rather than of who you are": "",
		"Produce more than you consume": "",
		"Gain experience rather than wealth": "",
		"There is no failure except in no longer trying": "",
		"Nothing ventured, nothing gained": "",
		"Stick to your values": "",
		"Key aspects should never change": "",
		"Opportunities don't happen. You create them.": "",
		"Learn from your mistakes": "",
		"Work together, play together": "",
		"Offer services that differentiate": "",
		"failure": "!= a waste of time",
		"people": "> profits",
		"give feedback": [
			"timely",
			"honest",
			"constructive"
		],
	}
}`;

	const editorDidMount = (editor: any) => {
		editor.focus();
	}

	return (
		<Container>
			<Tabs />
			<Editor>
				<MonacoEditor theme="vs-dark" language="json" defaultValue={defaultValue} options={{
					fontLigatures: true,
					fontFamily: `'Fira Code', 'SF Mono', Monaco, Menlo, Consolas, Courier, 'Coerier New', monospace`,
					fontSize: 20,
					tabSize: 2,
					selectOnLineNumbers: true,
					renderWhitespace: "all",
					autoIndent: "full"
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
