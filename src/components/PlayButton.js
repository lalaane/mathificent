import React from 'react';
import { Link } from 'react-router-dom';

function PlayButton() {
	return (
		<Link to='/play' className='btn btn-primary form-control'>
			Play!
		</Link>
	);
}

export default PlayButton;
