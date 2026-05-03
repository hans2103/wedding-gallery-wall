declare module 'react-photo-gallery' {
	import * as React from 'react';

	export interface PhotoProps {
		src: string;
		width: number;
		height: number;
		alt?: string;
	}

	export interface RenderImageProps<T extends PhotoProps = PhotoProps> {
		index: number;
		left: number;
		top: number;
		photo: T;
		onClick: (event: React.MouseEvent | React.KeyboardEvent, payload: { index: number }) => void;
		direction?: 'row' | 'column';
		margin?: number;
		key?: string;
		containerHeight?: number;
	}

	export interface GalleryProps<T extends PhotoProps = PhotoProps> {
		photos: T[];
		onClick?: (event: React.MouseEvent | React.KeyboardEvent, payload: { index: number; photo: T; next: T | null; previous: T | null }) => void;
		columns?: number | ((containerWidth: number) => number);
		direction?: 'row' | 'column';
		margin?: number;
		targetRowHeight?: number | ((containerWidth: number) => number);
		limitNodeSearch?: number | ((containerWidth: number) => number);
		renderImage?: React.ComponentType<RenderImageProps<T>>;
	}

	const Gallery: <T extends PhotoProps = PhotoProps>(props: GalleryProps<T>) => React.ReactElement;
	export default Gallery;
}
