/**

EASYHTTP v3

**/

class EasyHTTP {
	// MAKES AN HTTP GET REQUEST

	async get(url) {
		const response = await fetch(url);
		const resData = await response.json();
		return resData;
	}

	// MAKES AN HTTP POST REQUEST
	// ES7 get using async/await
	async post(url, data) {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)
		})

		const resData = await response.json();
		return resData
	}

	// MAKES A HTTP PUT REQUEST
	// ES7 get using async/await
	async put(url, data) {
		const response = await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)
		})

		const resData = await response.json();
		return resData
	}

	// MAKES A HTTP DELETE REQUEST
	async delete(url) {
			const response = fetch(url, {
				method: 'DELETE',
				headers: {
					'Content-type': 'application/json'
				}
			});

			const resData = await 'RESOURCE WAS DELETED'
			return resData
	}
}

export const http = new EasyHTTP();
