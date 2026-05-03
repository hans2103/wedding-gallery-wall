import { useEffect, useState, useCallback, type MouseEvent, type KeyboardEvent } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-spring-lightbox';
import GridImage from './components/GridImage';
import HeaderH2 from '../Header/HeaderH2';
import LightboxHeader from './components/LightboxHeader';
import LightboxArrowButton from './components/LightboxArrowButton';
import { galleryContainer, lightboxOverlay } from '../../styled-system/recipes';
import type { Photo } from './types';

interface GalleryLightboxProps {
	galleryTitle: string;
	images: Photo[];
	imageMasonryDirection?: 'column' | 'row';
}

const columnConfig = (containerWidth: number): number => {
	if (containerWidth >= 1500) return 4;
	if (containerWidth >= 900) return 3;
	if (containerWidth >= 500) return 2;
	return 1;
};

const GalleryLightbox = ({
	galleryTitle,
	images,
	imageMasonryDirection = 'column',
}: GalleryLightboxProps) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
	const [clientSide, setClientSide] = useState(false);

	useEffect(() => {
		setClientSide(true);
	}, []);

	const openLightbox = useCallback(
		(_e: MouseEvent | KeyboardEvent, { index }: { index: number }) => {
			setCurrentImageIndex(index);
			setLightboxIsOpen(true);
		},
		[]
	);

	const closeLightbox = useCallback(() => setLightboxIsOpen(false), []);

	const gotoPrevious = useCallback(() => {
		setCurrentImageIndex((i) => (i > 0 ? i - 1 : i));
	}, []);

	const gotoNext = useCallback(() => {
		setCurrentImageIndex((i) => (i + 1 < images.length ? i + 1 : i));
	}, [images.length]);

	return (
		<section className={galleryContainer()}>
			<HeaderH2 text={galleryTitle} />
			{clientSide && (
				<Gallery<Photo>
					columns={columnConfig}
					onClick={openLightbox}
					photos={images}
					margin={6}
					direction={imageMasonryDirection}
					renderImage={({ key: _key, ...props }) => (
						<GridImage key={props.photo.src} {...props} />
					)}
				/>
			)}
			<Lightbox
				className={lightboxOverlay()}
				isOpen={lightboxIsOpen}
				onClose={closeLightbox}
				onPrev={gotoPrevious}
				onNext={gotoNext}
				images={images.map(({ alt, caption, src }) => ({
					alt,
					caption,
					src: src.startsWith('/') ? src : `/${src}`,
				}))}
				currentIndex={currentImageIndex}
				renderHeader={() => (
					<LightboxHeader
						galleryTitle={galleryTitle}
						images={images}
						currentIndex={currentImageIndex}
						onClose={closeLightbox}
					/>
				)}
				renderPrevButton={({ canPrev }: { canPrev: boolean }) => (
					<LightboxArrowButton position="left" onClick={gotoPrevious} disabled={!canPrev} />
				)}
				renderNextButton={({ canNext }: { canNext: boolean }) => (
					<LightboxArrowButton position="right" onClick={gotoNext} disabled={!canNext} />
				)}
			/>
		</section>
	);
};

export default GalleryLightbox;
