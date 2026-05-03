import { logout } from '../utils/auth';
import { logoutButton } from '../styled-system/recipes';

const Logout = () => (
	<button className={logoutButton()} onClick={logout} type="button">
		uitloggen
	</button>
);

export default Logout;
