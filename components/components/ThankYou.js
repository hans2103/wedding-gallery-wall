import styled from 'styled-components';
import HeaderH2 from "../Header/HeaderH2";
import React from "react";

const ThankYou = () => (
	<ThankYouMessage>
		<HeaderH2
			text="Dank jullie wel voor de mooie herinneringen!"
		/>

	</ThankYouMessage>
);

const ThankYouMessage = styled.footer``;

export default ThankYou;
