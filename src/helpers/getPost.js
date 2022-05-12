const getPost = async (userId) => {
	const idPost = Math.round(100 * Math.random());

	const url = `https://jsonplaceholder.typicode.com/comments?postId=${userId}`;
	const res = await fetch(url);
	const post = await res.json();
	// const postApi = await fetch('https://jsonplaceholder.typicode.com/posts/' + idPost).then((post) => post.json());
	return post;
};

export default getPost;
