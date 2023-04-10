const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission
  
  const formData = new FormData(form); // Collect form data
  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    mobile: formData.get('mobile'),
    password: formData.get('password'),
  };

const url = 'https://rentalapplication-prod.up.railway.app/tenant';

fetch(url, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
	},
	body: JSON.stringify(formData),
})
	.then(response => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json();
	})
	.then(data => {
		console.log(data); // log the response data to the console
	})
	.catch(error => {
		console.error('There was a problem with the fetch operation:', error);
	})});
