import React from 'react';
import styled from "styled-components";

const Header = () => {
	return (
		<Container>
		</Container>
	);
}

export default Header;

const Container = styled.header`
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	background: rgb(51, 51, 51);
	color: white;
	height: 30px;
	width: 100%;
	font-size: 12px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
