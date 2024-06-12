//U4888-2664 Dawson Schmitt
//Task 3: Create a JavaScript file named script.js and:
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    //Prevent the default form submission action to keep the page from reloading.
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const date = document.getElementById('date').value.trim();
    const checkboxes = document.getElementsByName('preference');
    let checked = false;
    let checkedLabels = []; 

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checked = true;
            checkedLabels.push(document.querySelector(`label[for="${checkboxes[i].id}"]`).textContent);
        }
    }

    //Validate that all fields are filled out. If any field is empty, display an alert.
    if (!name || !email || !date || !checked) {
        if (!checked) {
            alert("Please select at least one checkbox!");
        } else {
            alert('Please fill in all fields');
        }
        return;
    }

    const registrationHolder = document.getElementById('registrationHolder');


    registrationHolder.innerHTML = "";

    const registrationEntry = document.createElement('div');

    let checkedLabelsHtml = "";
    checkedLabels.forEach(label => {
        checkedLabelsHtml += `<li>${label}</li>`;
    });

    //Append the registration details to the display area upon successful form submission.

    registrationEntry.innerHTML = `
        <p><strong>Registered Name:</strong> ${name}</p>
        <p><strong>Registered Email:</strong> ${email}</p>
        <p><strong>Registered Event Date:</strong> ${date}</p> 
        <p><strong>Dietary Preferences:</strong></p>
        <ul>${checkedLabelsHtml}</ul>
        <hr>
    `;

    registrationHolder.appendChild(registrationEntry);
    document.getElementById('registrationForm').reset();
});