import { headerH2 } from '../../styled-system/recipes';

interface HeaderH2Props {
	text: string;
}

const HeaderH2 = ({ text }: HeaderH2Props) => (
	<header>
		<h2 className={headerH2()}>{text}</h2>
	</header>
);

export default HeaderH2;
