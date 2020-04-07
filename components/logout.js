import Link from 'next/link'
import {logout} from '../utils/auth'
import styled from "styled-components";

const Logout = () => (
	<Button
		onClick={logout}>
		uitloggen
	</Button>
);

const Button = styled.button`
	-webkit-appearance: none;
    display: inline-flex;
    min-height: 2.25em;
    font-size: .9rem;
    line-height: 1.5;
    padding: .2963em .66667em;
    color: #ff0099;
    background: #fff;
    border: 1px solid rgba(0,0,0,.35);
    border-radius: .375rem;
    cursor: pointer;
    box-shadow: 0 0.1875rem 0 0 rgba(31,27,55,.15);
    transition: background .2s cubic-bezier(.195,.4,.45,.785),transform .1s cubic-bezier(.195,.4,.45,.785),box-shadow .1s cubic-bezier(.195,.4,.45,.785);
    
    &:hover {
    	background: rgba(255,255,255,.9);
    }
}
`;

export default Logout
