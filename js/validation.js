// File: validation.js

function validateSignupForm() {
  const firstName = document.getElementById("firstname").value.trim();
  const lastName = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    alert("All fields are required.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  alert("Signup successful!");
  return true;
}

function validateLoginForm() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Both fields are required.");
    return false;
  }

  alert("Login successful!");
  return true;
}

function validateContactForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}
