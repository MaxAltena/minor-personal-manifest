import React from 'react';
import styled from "styled-components";

const Footer = () => {
	return (
		<Container>
			<Side>
				{/* <Info onClick={() => console.log("clicked")}>
					<img src="https://raw.githubusercontent.com/microsoft/vscode-icons/master/icons/dark/info.svg" alt="Infomartion" />
				</Info> */}
				<Content>
					<Text1><img src="https://raw.githubusercontent.com/microsoft/vscode-icons/master/icons/dark/error.svg" alt="Error" /> 0</Text1>
					<Text2><img src="https://raw.githubusercontent.com/microsoft/vscode-icons/master/icons/dark/warning.svg" alt="Warning" /> 0</Text2>
				</Content>
			</Side>
			<Side>
				<ContentRight>
					<Text>Tab Size: 2</Text>
				</ContentRight>
				<ContentRight>
					<Text>UTF-8</Text>
				</ContentRight>
				<ContentRight>
					<Text>LF</Text>
				</ContentRight>
				<ContentRight>
					<Text>JSON</Text>
				</ContentRight>
				<Content>
					<Text><img src="https://raw.githubusercontent.com/microsoft/vscode-icons/master/icons/dark/bell.svg" alt="Notifications" /></Text>
				</Content>
			</Side>
		</Container>
	);
}

export default Footer;

const Container = styled.footer`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgb(0,122,204);
	color: white;
	height: 22px;
	width: 100%;
	font-size: 12px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 8px;
`;

const Side = styled.div`
	width: auto;
	height: 100%;
	display: flex;
	align-items: center;
`;

const Content = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	cursor: pointer;

	:hover,
	:active,
	:focus {
		background: rgba(255, 255, 255, 0.12);
	}
`;

const ContentRight = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	cursor: pointer;

	:hover,
	:active,
	:focus {
		background: rgba(255, 255, 255, 0.12);
	}

	margin-right: 5px;
`;

const Text1 = styled.p`
	margin: 0 5px;
	display: flex;
	align-items: center;
	user-select: none;
	-webkit-user-drag: none;

	img {
		margin-right: 2px;
	}
`;
const Text2 = styled.p`
	margin-right: 8px;
	display: flex;
	align-items: center;
	user-select: none;
	-webkit-user-drag: none;

	img {
		margin-right: 2px;
	}
`;
const Text = styled.p`
	margin: 0 5px;
	display: flex;
	align-items: center;
	user-select: none;
	-webkit-user-drag: none;
`;

// const Info = styled.div`
// 	height: 100%;
// 	display: flex;
// 	align-items: center;
// 	cursor: pointer;
// 	padding: 0 5px;

// 	:hover,
// 	:active,
// 	:focus {
// 		background: rgba(255, 255, 255, 0.12);
// 	}

// 	margin-right: 5px;
// `;
