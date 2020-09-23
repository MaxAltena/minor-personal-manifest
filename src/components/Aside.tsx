import React from 'react';
import styled from "styled-components";

const Aside = () => {
	return (
		<Container>
			<Side>
				<IconContainerActive>
					<img src="https://raw.githubusercontent.com/microsoft/vscode-icons/master/icons/dark/files.svg" alt="Files" />
				</IconContainerActive>
				<IconContainer>
					<img src="https://raw.githubusercontent.com/microsoft/vscode-icons/master/icons/dark/search.svg" alt="Search" />
				</IconContainer>
				<IconContainer>
					<img src="https://raw.githubusercontent.com/microsoft/vscode-icons/master/icons/dark/source-control.svg" alt="Source control" />
				</IconContainer>
				<IconContainer>
					<img src="https://raw.githubusercontent.com/microsoft/vscode-icons/master/icons/dark/debug-alt.svg" alt="Debug" />
				</IconContainer>
				<IconContainer>
					<img src="https://raw.githubusercontent.com/microsoft/vscode-icons/master/icons/dark/extensions.svg" alt="Extensions" />
				</IconContainer>
			</Side>

			<Side>
				<IconContainer>
					<img src="https://raw.githubusercontent.com/microsoft/vscode-icons/master/icons/dark/settings-gear.svg" alt="Settings" />
				</IconContainer>
			</Side>
		</Container>
	);
}

export default Aside;

const Container = styled.aside`
	position: fixed;
	left: 0;
	top: 30px;
	bottom: 22px;
	background: rgb(51, 51, 51);
	color: white;
	width: 48px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const Side = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const IconContainer = styled.div`
	width: 100%;
	height: 48px;
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
`;

const IconContainerActive = styled.div`
	position: relative;
	width: 100%;
	height: 48px;
	cursor: pointer;
	opacity: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	user-select: none;
	-webkit-user-drag: none;

	img {
		user-select: none;
	-webkit-user-drag: none;
	}

	::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		height: 100%;
		width: 2px;
		background: white;
	}

`;
