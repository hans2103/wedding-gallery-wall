import Layout from '../components/layout'
import Link from 'next/link'
import styled from 'styled-components'
import HeaderH1 from '../components/Header/HeaderH1'
import Warning from '../components/Warning/Warning'

export default () => (
	<Layout>
		<Warning/>
		<HeaderH1/>
		<Block>
			<Link href="album">
				fotoalbum
			</Link>
		</Block>
	</Layout>
);

const Block = styled.div`
	display: flex;
	justify-content: center;
	
	> a {
		-webkit-appearance: none;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 2.25em;
		font-size: .9rem;
		line-height: 1;
		padding: .2963em .66667em;
		color: #ff0099;
		background: #fff;
		border: 1px solid rgba(0,0,0,.35);
		border-radius: .375rem;
		cursor: pointer;
		box-shadow: 0 0.1875rem 0 0 rgba(31,27,55,.15);
		text-decoration: none;
		transition: background .2s cubic-bezier(.195,.4,.45,.785),transform .1s cubic-bezier(.195,.4,.45,.785),box-shadow .1s cubic-bezier(.195,.4,.45,.785);
		
		&:hover {
			background: rgba(255,255,255,.8);
		}
	}
	`;
