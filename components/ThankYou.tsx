import HeaderH2 from './Header/HeaderH2';
import { thankYou, thankYouText } from '../styled-system/recipes';

const ThankYou = () => (
	<footer className={thankYou()}>
		<HeaderH2 text="Dank jullie wel voor de mooie herinneringen!" />
		<p className={thankYouText()}>
			Rekening houdend met je mobiel data abonnement zijn de foto&apos;s op deze pagina bewust verkleind. <br />
			Stuur me een mail wanneer je een groter formaat van een foto wil ontvangen.
		</p>
	</footer>
);

export default ThankYou;
