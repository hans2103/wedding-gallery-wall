import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { animated, useTransition } from '@react-spring/web';
import ButtonControl from './LightboxButtonControl';
import { lightboxArrow } from '../../../styled-system/recipes';

interface ArrowButtonProps {
	position: 'left' | 'right';
	onClick: () => void;
	disabled?: boolean;
}

const ArrowButton = ({ position, onClick, disabled = false }: ArrowButtonProps) => {
	const transitions = useTransition(!disabled, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});
	const label = position === 'left' ? 'Vorige foto' : 'Volgende foto';

	return transitions(
		(styles, item) =>
			item && (
				<animated.div style={{ ...styles, zIndex: 999 }}>
					<ButtonControl
						className={lightboxArrow()}
						style={position === 'left' ? { left: 0 } : { right: 0 }}
						type="button"
						onClick={onClick}
						aria-label={label}
					>
						{position === 'left' && <IoIosArrowBack aria-hidden="true" />}
						{position === 'right' && <IoIosArrowForward aria-hidden="true" />}
					</ButtonControl>
				</animated.div>
			)
	);
};

export default ArrowButton;
