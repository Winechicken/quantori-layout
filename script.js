document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const payload = {
      username: email,
      password: password
  };

  fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
  })
  .then(response => response.json())
  .then(data => {
      if (data.token) {
          alert('Login successful!');
      } else {
          alert('Login failed!');
      }
  })
  .catch(error => {
      console.error('Error:', error);
  });
});
