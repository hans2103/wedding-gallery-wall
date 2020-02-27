import styled from "styled-components";

const Header = (props) => (
	<header>
		<H2>{props.text}</H2>
	</header>
);

const H2 = styled.h2`
	color: currentColor;
	font-size: 1.5rem;
	font-weight: 400;
	text-align: center;
`;

export default Header
