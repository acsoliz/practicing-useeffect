const getUser = async () => {
	const idUser = Math.floor(10 * Math.random())+1;
	const url = `https://jsonplaceholder.typicode.com/users/${idUser}`;
	const res = await fetch(url);
	const user = await res.json();

	return user;
};
export default getUser;
