import Link from 'next/link';
import Layout from '../components/layout';
import HeaderH1 from '../components/Header/HeaderH1';
import Warning from '../components/Warning/Warning';
import { homeBlock } from '../styled-system/recipes';

const Home = () => (
	<Layout>
		<Warning />
		<HeaderH1 />
		<div className={homeBlock()}>
			<Link href="/album">fotoalbum</Link>
		</div>
	</Layout>
);

export default Home;
