import type { KeyboardEvent, MouseEvent } from 'react';
import Image from 'next/image';
import {
	gridImage,
	gridImageOverlay,
	gridImageImg,
	gridImageCaption,
} from '../../../styled-system/recipes';
import type { Photo } from '../types';

interface GridImageProps {
	index: number;
	left: number;
	top: number;
	photo: Photo;
	onClick: (e: MouseEvent | KeyboardEvent, payload: { index: number }) => void;
}

const GridImage = ({ index, left, top, photo, onClick }: GridImageProps) => {
	const { height, width, src, alt, className, caption } = photo;
	const handleClick = (e: MouseEvent) => onClick(e, { index });
	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			onClick(e, { index });
		}
	};
	return (
		<div
			role="button"
			tabIndex={0}
			aria-label={alt || caption || `Foto ${index + 1}`}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
			style={{ left, top, height, width }}
			className={[gridImage(), className].filter(Boolean).join(' ')}
		>
			<div className={gridImageOverlay()}>
				<Image
					className={gridImageImg()}
					src={src.startsWith('/') ? src : `/${src}`}
					alt={alt}
					fill
					sizes="(max-width: 460px) 50vw, (max-width: 1500px) 33vw, 25vw"
					unoptimized={src.toLowerCase().endsWith('.gif')}
				/>
				<div className={gridImageCaption()}>
					<p>{caption}</p>
				</div>
			</div>
		</div>
	);
};

export default GridImage;
