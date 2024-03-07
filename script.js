document.getElementById('login-form').addEventListener('submit', function(event) {
  // Get the username and password from the form inputs
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();
//   var data = new FormData();
// data.append('username', username);
// data.append('password', password);

  let payload = {username, password}

  // Set up the request
  xhr.open('POST', '/login', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'); // Set the correct content type to transmit credentials in plain text
  
  // Define a function to handle the response
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Redirect to the landing page if the login is successful
        window.location.href = 'landing.html';
      } else if(xhr.status === 401) {
        // Display an error message if the login fails
        alert('Invalid username or password.');
      } else {
        // Display a generic error message for other status codes
        alert('Something went wrong');
      }
    }
  };

  // Send the request with the username and password in the request body
  xhr.send(`username=${username}&password=${password}`)
  // xhr.send(username + '\n' + password);

  // Prevent the default form submission behavior
  event.preventDefault();
});
