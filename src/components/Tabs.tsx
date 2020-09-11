import React from 'react';
import styled from "styled-components";

const Tabs = () => {
	return (
		<Container>
			<Side>
				<Tab><img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/0a0333cbd9eee91c21d5661f3138b170906c49b9/icons/file_type_json.svg" alt="JSON" height="16" className="icon" /> manifest.json <img src="https://raw.githubusercontent.com/microsoft/vscode-icons/master/icons/dark/close.svg" alt="Close" className="close" /></Tab>
			</Side>

			<Side>
				<IconContainer>
					<img src="https://raw.githubusercontent.com/microsoft/vscode-icons/master/icons/dark/git-compare.svg" alt="Compare git" />
				</IconContainer>
				<IconContainer>
					<img src="https://raw.githubusercontent.com/microsoft/vscode-icons/master/icons/dark/split-horizontal.svg" alt="Split" />
				</IconContainer>
				<IconContainer>
					<img src="https://raw.githubusercontent.com/microsoft/vscode-icons/master/icons/dark/kebab-vertical.svg" alt="More" className="rotate" />
				</IconContainer>
			</Side>
		</Container>
	);
}

export default Tabs;

const Container = styled.div`
	width: 100%;
	height: 35px;
	background: rgb(37, 37, 38);
	display: flex;
	justify-content: space-between;
`;

const Side = styled.div`
	width: auto;
	height: 100%;
	display: flex;
	align-items: center;
`;

const Tab = styled.div`
	width: auto;
	height: 100%;
	background: rgb(30, 30, 30);
	border-right: 1px solid rgba(37, 37, 38);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2px 8px;
	font-size: 13px;
	cursor: pointer;
	user-select: none;
	-webkit-user-drag: none;

	img.icon {
		user-select: none;
		-webkit-user-drag: none;
		margin-right: 8px;
	}

	img.close {
		user-select: none;
		-webkit-user-drag: none;
		margin-left: 8px;
	}
`;

const IconContainer = styled.div`
	width: 35px;
	height: 35px;
	cursor: pointer;
	opacity: 0.6;
	display: flex;
	justify-content: center;
	align-items: center;
	user-select: none;
	-webkit-user-drag: none;

	img {
		user-select: none;
		-webkit-user-drag: none;
	}

	:hover,
	:active,
	:focus {
		opacity: 1;
	}

	img.rotate {
		transform: rotate(90deg);
	}
`;
