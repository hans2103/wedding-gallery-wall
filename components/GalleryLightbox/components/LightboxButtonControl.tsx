import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { lightboxButton } from '../../../styled-system/recipes';

interface LightboxButtonControlProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
}

const LightboxButtonControl = ({ className, children, ...rest }: LightboxButtonControlProps) => (
	<button className={[lightboxButton(), className].filter(Boolean).join(' ')} {...rest}>
		{children}
	</button>
);

export default LightboxButtonControl;
