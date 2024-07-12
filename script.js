document.getElementById('joinButton').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
  });
  
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
  });
  
  document.getElementById('membershipForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Here you can handle form submission, e.g., validate inputs, send data to server, etc.
    alert('Form submitted successfully!');
    document.getElementById('popup').style.display = 'none'; // Hide popup after submission
  });
  