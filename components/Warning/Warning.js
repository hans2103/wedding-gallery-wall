import styled from 'styled-components';

const Warning = () => (
	<WarningContainer>
		Sorry, your browser does not support CSS Grid. 😅
	</WarningContainer>
);

const WarningContainer = styled.div`
  border: 1px solid #d2d0d0;
  padding: 2em;
  font-size: 1.7vw;
  box-shadow: -2px 2px 10px 0px rgba(#444, 0.4);

  @supports (display: grid) {
    display: none;
  }
`;

export default Warning;
