import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * A single image element in a masonry style image grid
 */
const GridImage = ({key, index, left, top, photo, onClick}) => {
	const {height, width, src, alt, className, caption} = photo;
	return (
		<ImageContainer
			key={`${key}-${index}`}
			index={index}
			onClick={e => onClick(e, {index})}
			style={{left, top, height, width}}
			className={className}
		>
			<OverlayContainer>
				<Image src={src} alt={alt} caption={caption}/>
				<Caption>
					<h4>{caption}</h4>
				</Caption>
			</OverlayContainer>
		</ImageContainer>
	);
};

GridImage.propTypes = {
	key: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	left: PropTypes.number.isRequired,
	top: PropTypes.number.isRequired,
	containerHeight: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired,
	photo: PropTypes.shape({
		alt: PropTypes.string.isRequired,
		caption: PropTypes.string.isRequired,
		height: PropTypes.number.isRequired,
		width: PropTypes.number.isRequired,
		className: PropTypes.string.isRequired,
		src: PropTypes.string.isRequired
	}).isRequired
};

export default GridImage;

const Caption = styled.figcaption`
  display: none;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${({theme}) => theme.accentColor};
  color: ${({theme}) => theme.pageContentLinkHoverColor};
  h4 {
    text-align: center;
    margin: 1em 0;
  }
`;

const OverlayContainer = styled.figure`
  position: relative;
  height: 100%;
  overflow: hidden;
  border-radius: 6px;
`;

const ImageContainer = styled.div`
  width: unset !important;
  height: unset !important;
  list-style: none;
  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  transition: border-color .5s cubic-bezier(0.195, 0.4, 0.45, 0.785) 0ms;

  &.horizontal {
    grid-column: span 2;
  }

  &.square {
    grid-column: span 2;
    grid-row: span 2;
  }

  &.vertical {
    grid-row: span 2;
  }

  &:focus {
    outline: none;
  }

  &:focus,
  &:hover {
    border-color: ${({theme}) => theme.pageContentLinkHoverColor};
    img {
      transform: scale(1.1);
      filter: brightness(1);
    }
  }

  // display: block;
  // position: absolute;
  cursor: pointer;
  border-width: 2px;
  border-color: transparent;
  border-style: solid;
  border-radius: 6px;
  // :hover {
  //   border-color: ${({theme}) => theme.pageContentLinkHoverColor};
  // }
`;

const Image = styled.img`
  //width: inherit;
  //height: inherit;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  transition: all .25s cubic-bezier(0.195, 0.4, 0.45, 0.785) 0ms;
`;
