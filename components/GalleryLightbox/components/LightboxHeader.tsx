import { IoIosClose } from 'react-icons/io';
import ButtonControl from './LightboxButtonControl';
import {
	lightboxHeaderBar,
	lightboxHeading,
	lightboxSubheading,
	lightboxPageIndicator,
	lightboxRightSide,
	lightboxLeftSide,
	lightboxClose,
} from '../../../styled-system/recipes';
import type { Photo } from '../types';

interface LightboxHeaderProps {
	galleryTitle: string;
	images: Photo[];
	currentIndex: number;
	onClose: () => void;
}

const LightboxHeader = ({ galleryTitle, images, currentIndex, onClose }: LightboxHeaderProps) => {
	const current = images[currentIndex];
	return (
		<header className={lightboxHeaderBar()}>
			<div className={lightboxLeftSide()}>
				<h2 className={lightboxHeading()}>{galleryTitle}</h2>
				<p className={lightboxSubheading()}>{current?.caption}</p>
			</div>

			<div className={lightboxRightSide()}>
				<span className={lightboxPageIndicator()} aria-label={`Foto ${currentIndex + 1} van ${images.length}`}>
					{currentIndex + 1} / {images.length}
				</span>
				<ButtonControl className={lightboxClose()} onClick={onClose} type="button" aria-label="Sluiten">
					<IoIosClose size={60} aria-hidden="true" />
				</ButtonControl>
			</div>
		</header>
	);
};

export default LightboxHeader;
