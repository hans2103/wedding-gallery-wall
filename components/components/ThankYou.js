import styled from 'styled-components';
import HeaderH2 from "../Header/HeaderH2";
import React from "react";

const ThankYou = () => (
	<ThankYouMessage>
		<HeaderH2
			text="Dank jullie wel voor de mooie herinneringen!"
		/>
		<Text>Rekening houdend met je mobiel data abonnement zijn de foto's op deze pagina bewust verkleind. <br/>Stuur me een mail wanneer je een groter formaat van een foto wil ontvangen.</Text>

	</ThankYouMessage>
);

const ThankYouMessage = styled.footer`
	margin-left: auto;
	margin-right: auto;
    max-width: 1200px;
    `;

const Text = styled.p`
	margin-left: auto;
	margin-right: auto;
	max-width: 90%;
`;

export default ThankYou;
