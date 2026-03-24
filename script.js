function goToPage2() {
  localStorage.setItem("firstName", document.getElementById("firstName").value);
  localStorage.setItem("lastName", document.getElementById("lastName").value);
  localStorage.setItem("age", document.getElementById("age").value);

  window.location.href = "page2.html";
}

function goToPage3() {
  localStorage.setItem("email", document.getElementById("email").value);
  localStorage.setItem("phone", document.getElementById("phone").value);
  localStorage.setItem("city", document.getElementById("city").value);

  window.location.href = "page3.html";
}

function loadData() {
  let data = `
    <p><strong>Name:</strong> ${localStorage.getItem("firstName")} ${localStorage.getItem("lastName")}</p>
    <p><strong>Age:</strong> ${localStorage.getItem("age")}</p>
    <p><strong>Email:</strong> ${localStorage.getItem("email")}</p>
    <p><strong>Phone:</strong> ${localStorage.getItem("phone")}</p>
    <p><strong>City:</strong> ${localStorage.getItem("city")}</p>
  `;

  document.getElementById("review").innerHTML = data;
}

function submitForm() {
  alert("Form submitted successfully!");

  localStorage.clear();
  window.location.href = "index.html";
}script.js
