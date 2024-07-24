import { NavLink } from 'react-router-dom';
import { Dropdown } from 'antd';
import { resetTokenData } from '../../../redux/token/actions';
import { useDispatch } from 'react-redux';
import { Lotus } from './../../../assets/img/index';
const SettingsDropdown = () => {
	const dispatch = useDispatch();
	const accountAdminItems = [
		{ text: 'Home', icon: 'icofont-ui-home', route: '/' },
		{ text: 'Change Password', icon: 'icofont-ui-settings', route: '/admin/change-password' },
		{ text: 'Log Out', icon: 'icofont-logout', route: '/', onclick: () => dispatch(resetTokenData()) }
	];

	const accountMenu = () => <ul className='actions-menu' style={{ minWidth: '180px' }}>
		{accountAdminItems.map((item, index) => (
			<li className='action-item' key={index}>
				<NavLink onClick={item?.onclick} className='d-flex w-100' to={item.route} replace>
					<span className={`icon mr-3 ${item.icon}`} />
					<span className='text'>{item.text}</span>
				</NavLink>
			</li>
		))}
	</ul>

	return (
		<Dropdown dropdownRender={accountMenu} trigger={['click']} placement='bottomRight'>
			<div className='item'>
				<img className='mr-1' src={Lotus} style={{ width: '80px', objectFit: 'contain' }} alt='avatarImage' />
				<span className='icofont-simple-down' />
			</div>
		</Dropdown>
	);
};

export default SettingsDropdown;
