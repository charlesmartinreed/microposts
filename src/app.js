import { http } from './http';
import { ui } from './ui';

const localURL = 'http://localhost:3000/posts'

// GET POSTS ON DOM LOAD
document.addEventListener('DOMContentLoaded', getPosts);

// LISTEN FOR ADD POST
document.querySelector('.post-submit').addEventListener('click', submitPost);

function getPosts() {
	http.get(localURL)
		// call our UI Post method
		.then(data => ui.showPosts(data))
		.catch(err => console.log(err));
}

function submitPost() {
	const title = document.querySelector('#title').value;
	const body = document.querySelector('#body').value;

	const data = {
		title,
		body
	}

	// Create the post
	http.post(localURL, data)
		.then(data => {
			//after the post is added, load the total posts into the DOM
			getPosts();
		})
		.catch(err => console.log(err));
}
