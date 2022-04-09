import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from 'color';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-spring-lightbox';
import GridImage from './components/GridImage';
import HeaderH2 from '../Header/HeaderH2';
import LightboxHeader from './components/LightboxHeader';
import LightboxArrowButton from './components/LightboxArrowButton';

class BlogImageGallery extends React.Component {
    static propTypes = {
        galleryTitle: PropTypes.string.isRequired,
        imageMasonryDirection: PropTypes.oneOf(['column', 'row']),
        images: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.string.isRequired,
                caption: PropTypes.string.isRequired,
                alt: PropTypes.string.isRequired,
                className: PropTypes.string.isRequired,
                width: PropTypes.number,
                height: PropTypes.number,
            })
        ).isRequired,
    };

    static defaultProps = {
        imageMasonryDirection: 'column',
    };

    constructor() {
        super();

        this.state = {
            currentImageIndex: 0,
            lightboxIsOpen: false,
            clientSide: false,
        };
    }

    componentDidMount() {
        this.setState({ clientSide: true });
    }

    openLightbox = (e, { index }) => {
        this.setState({
            currentImageIndex: index,
            lightboxIsOpen: true,
        });
    };

    closeLightbox = () => {
        this.setState({
            lightboxIsOpen: false,
        });
    };

    gotoPrevious = () => {
        const { currentImageIndex } = this.state;

        // If the current image isn't the first in the list, go to the previous
        if (currentImageIndex > 0) {
            this.setState({
                currentImageIndex: currentImageIndex - 1,
            });
        }
    };

    gotoNext = () => {
        const { images } = this.props;
        const { currentImageIndex } = this.state;

        // If the current image isn't the list in the list, go to the next
        if (currentImageIndex + 1 < images.length) {
            this.setState({
                currentImageIndex: currentImageIndex + 1,
            });
        }
    };

    /**
     * Sets breakpoints for column width based on containerWidth
     *
     * @int containerWidth The current width of the image grid
     */
    columnConfig = (containerWidth) => {
        let columns = 1;
        if (containerWidth >= 500) columns = 2;
        if (containerWidth >= 900) columns = 3;
        if (containerWidth >= 1500) columns = 4;

        return columns;
    };

    render() {
        const { currentImageIndex, lightboxIsOpen, clientSide } = this.state;
        const { images, galleryTitle, imageMasonryDirection } = this.props;

        return (
            <GalleryContainer>
                <HeaderH2
                    text={galleryTitle}
                />
                {clientSide && (
                    <Gallery
                        columns={this.columnConfig}
                        onClick={this.openLightbox}
                        photos={images}
                        margin={6}
                        direction={imageMasonryDirection}
                        renderImage={GridImage}
                    />
                )}
                <StyledLightbox
                    isOpen={lightboxIsOpen}
                    onClose={this.closeLightbox}
                    onPrev={this.gotoPrevious}
                    onNext={this.gotoNext}
                    images={images.map(({ alt, caption, src }) => ({
                        alt,
                        caption,
                        src,
                    }))}
                    currentIndex={currentImageIndex}
                    galleryTitle={galleryTitle}
                    renderHeader={() => (
                        <LightboxHeader
                            galleryTitle={galleryTitle}
                            images={images}
                            currentIndex={currentImageIndex}
                            onClose={this.closeLightbox}
                        />
                    )}
                    renderPrevButton={({ canPrev }) => (
                        <LightboxArrowButton
                            position="left"
                            onClick={this.gotoPrevious}
                            disabled={!canPrev}
                        />
                    )}
                    renderNextButton={({ canNext }) => (
                        <LightboxArrowButton
                            position="right"
                            onClick={this.gotoNext}
                            disabled={!canNext}
                        />
                    )}
                />
            </GalleryContainer>
        );
    }
}

export default BlogImageGallery;

const GalleryContainer = styled.section`
  margin: 1.5em auto;
  max-width: 1200px;

  > div {

	  > div {
			margin: 0 auto;
			padding-top: 1.5em;
			border-top-width: 2px;
			border-top-style: solid;
			border-top-color: ${({theme}) => theme.pageContentLinkHoverColor};
			max-width: 100%;
			width: 100vw;
			display: grid;
			grid-gap: 1em;
			grid-template-columns: repeat(auto-fit, minmax(10.5em, 1fr));
			grid-auto-rows: calc(12em - 1em);
			justify-content: center;
			align-content: center;
			grid-auto-flow: dense;
			height: unset !important;
			
			@media (max-width: 460px) {
				grid-column-gap: 0;
				
			}
		}
  }
`;

const StyledLightbox = styled(Lightbox)`
    background: ${({ theme }) =>
    Color(theme.accentColor).alpha(0.95).hsl().string()};
    * ::selection {
        background: ${({ theme }) => theme.pageContentSelectionColor};
    }
    * ::-moz-selection {
        background: ${({ theme }) =>
    new Color(theme.pageContentSelectionColor).darken(0.57).hex()};
  }
  
  img {
  height: 100%;
  }
`;
