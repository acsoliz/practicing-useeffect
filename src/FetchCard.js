import React, { useState, useEffect, useCallback } from 'react';
import getUser from './helpers/getUsers';
import getPost from './helpers/getPost';

const FetchCard = () => {
	// const initialUser = {
	// 	name  : 'Alan',
	// 	email : 'correo@correo.com'
	// };
	// const initialPost = {
	// 	id     : 1,
	// 	tittle : 'mi correo'
	// };

	const [ user, setUser ] = useState({});
	const [ posts, setPosts ] = useState([]);

	const updateUser = () => {
		getUser().then((newUser) => {
			setUser(newUser);
		});
	};

	const updatePost = useCallback(() => {
		getPost(user.id).then((newPost) => {
			setPosts(newPost);
		});
	}, [user.id]);

	useEffect(() => {
		updateUser();
	}, []);

	useEffect(
		() => {
			if (user?.id) {
				updatePost();
			}
			//
		},
		[ user ]
	);

	return (
		<div>
			<button onClick={updateUser}>usuario aleatorio</button>

			<h2>{user.name}</h2>
			<h2>{user.email}</h2>
			<br />
			<h2>Posts:user : {user.id}</h2>
			<ul>{posts.map((post, i) => <li key={i}>{post.body}</li>)}</ul>

	
		</div>
	);
};

export default FetchCard;
