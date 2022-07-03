import { navbarOptions } from "../../../constants";

import { Link } from "react-router-dom";

import './sidebar.css';

const Sidebar = (props) => {

	let options = {};
	
    switch ( props.user.rol ) {
		case "supervisor":
			options = Object.assign({}, navbarOptions.supervisor);
            break;
		case "admin":
			options = Object.assign({}, navbarOptions.admin);
			break;
		default:
			break;
	}

  	return (
		<div className='sidebar'>
			<div className='top'>
			</div>
			<div className='center'>
				<ul>
					{
						Object.keys(options).map((item) => (
							<div key={item}>
								<p className='option-group-title'>{item.toUpperCase()}</p>
								{
									options[item].map((subitem) => (
										<li key={subitem.option}> 
											<Link to={subitem.link}>
												<i> { subitem.icon } </i>
												<span>{subitem.option}</span>
											</Link>
										</li>
									))
								}
							</div>
						))
					}
				</ul>
			</div>
			<div className='bottom'>
				<span className='author' >Made by: Juan Sebastian Reyes Leyton</span>
			</div>
		</div>
  	)
}

export default Sidebar;