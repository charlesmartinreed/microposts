import { http } from './http';
import { ui } from './ui';

const localURL = 'http://localhost:3000/posts'

// GET POSTS ON DOM LOAD
document.addEventListener('DOMContentLoaded', getPosts);

// LISTEN FOR ADD POST
document.querySelector('.post-submit').addEventListener('click', submitPost);

// LISTEN FOR DELETE POST
document.querySelector('#posts').addEventListener('click', deletePost);

// LISTEN FOR EDIT STATE
document.querySelector('#posts').addEventListener('click', enableEditState);

// LISTEN FOR CANCEL EDIT/RETURN TO ADD STATE CHANGE
document.querySelector('.card-form').addEventListener('click', cancelEditState);


function getPosts() {
	http.get(localURL)
		// call our UI Post method
		.then(data => ui.showPosts(data))
		.catch(err => console.log(err));
}

function submitPost() {
	const title = document.querySelector('#title').value;
	const body = document.querySelector('#body').value;
	const id = document.querySelector('#id').value;


	if (title !== '' || body !== '') {
		const data = { title, body }
		if (id === '') {
			// create a new post
			http.post(localURL, data)
				.then(data => {
					ui.showAlert('Post added', 'alert alert-success');
					ui.clearFields();
					//after the post is added, load the total posts into the DOM
					getPosts();
				})
				.catch(err => console.log(err));
			} else {
				// update the post with a put request
				http.put(`${localURL}/${id}`, data)
					.then(data => {
						ui.showAlert('Post updated', 'alert alert-success');
						ui.changeFormState('add');
						//after the post is added, load the total posts into the DOM
						getPosts();
					})
					.catch(err => console.log(err));
			}
		} else {
				ui.showAlert('Please fill in all fields', 'alert alert-danger');
		}
}

function deletePost(e) {
	if(e.target.parentElement.classList.contains('delete')) {
		// this is why we define the data-id attribute when generating the posts
		const id = e.target.parentElement.dataset.id;
		if(confirm('Are you sure?')) {
				http
					.delete(`${localURL}/${id}`)
					.then(data => {
						ui.showAlert('Post Removed', 'alert alert-success');
						getPosts();
					})
					.catch(err => console.log(err));
		}
	}
	e.preventDefault();
}

function enableEditState(e) {
	if(e.target.parentElement.classList.contains('edit')) {
		// get the post info
		const id = e.target.parentElement.dataset.id;
		const postTitle = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
		const postBody = e.target.parentElement.previousElementSibling.textContent;

		const data = { id, postTitle, postBody }

		// fill the UI form with the current post
		ui.fillform(data);
	}

	e.preventDefault();
}

function cancelEditState(e) {
	if(e.target.classList.contains('post-cancel')) {
		ui.changeFormState('add');
	}

	e.preventDefault();
}
