// Define the admin password
const adminPassword = "lalla@123"; // Replace with your desired admin password

// Initialize students with data from local storage, if available
let students = JSON.parse(localStorage.getItem("students")) || [];

document.addEventListener("DOMContentLoaded", function () {
    // Ask the user to enter the admin password
    const userEnteredPassword = prompt("Enter the admin password:");
    const isAdmin = userEnteredPassword === adminPassword;

    // Get elements
    const showStudentDetailsButton = document.getElementById("show-student-details");
    const studentDetailsTable = document.getElementById("student-details");
    const addStudentButton = document.getElementById("add-student-button");

    // Event listener for the "Show Student Details" button
    showStudentDetailsButton.addEventListener("click", function () {
        if (studentDetailsTable.style.display === "none") {
            buildStudentDetailsTable(students);
            studentDetailsTable.style.display = "block";
            showStudentDetailsButton.textContent = "Hide Student Details";
        } else {
            studentDetailsTable.style.display = "none";
            showStudentDetailsButton.textContent = "Show Student Details";
        }
    });

    // Event listener for the "Add Student" button
    addStudentButton.addEventListener("click", function () {
        if (isAdmin) {
            // Prompt the user for new student details (name, age, batch, address)
            const name = prompt("Enter student name:");
            const seat = prompt("Enter student seat no.:");
            const batch = prompt("Enter student batch (comma-separated):");
            const address = prompt("Enter student address:");

            // Convert the batch input into an array of integers
            const batchArray = batch.split(",").map(batch => parseInt(batch));

            // Create a new student object
            const newStudent = {
                name: name,
                seat: parseInt(seat),
                batch: batchArray,
                address: address,
            };

            // Add the new student to the students array
            students.push(newStudent);

            // Save the updated students array to local storage
            localStorage.setItem("students", JSON.stringify(students));

            // Rebuild the student details table
            buildStudentDetailsTable(students);
        } else {
            alert("Only admins can add students.");
        }
    });

    // Function to build the student details table (updated to handle deletions)
    function buildStudentDetailsTable(studentArray) {
        // Clear the existing table contents
        studentDetailsTable.innerHTML = '';

        // Create the table header
        let tableHTML = `
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Seat No.</th>
                    <th>Batch</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
        `;

        // Create table rows with student details and a delete button for each student
        for (const [index, student] of studentArray.entries()) {
            const batchString = student.batch.join(', ');

            tableHTML += `
                <tr>
                    <td>${student.name}</td>
                    <td>${student.seat}</td>
                    <td>${batchString}</td>
                    <td>${student.address}</td>
                    <td><button class="delete-student-button" data-index="${index}">Delete</button></td>
                </tr>
            `;
        }

        // Close the table
        tableHTML += `</tbody>`;

        // Set the generated HTML as the innerHTML of the table
        studentDetailsTable.innerHTML = tableHTML;

        // Add event listeners for the delete buttons
        const deleteButtons = document.querySelectorAll(".delete-student-button");
        deleteButtons.forEach(button => {
            button.addEventListener("click", function () {
                if (isAdmin) {
                    const indexToDelete = parseInt(button.getAttribute("data-index"));
                    students.splice(indexToDelete, 1);
                    // Save the updated students array to local storage
                    localStorage.setItem("students", JSON.stringify(students));
                    buildStudentDetailsTable(students);
                } else {
                    alert("Only admins can delete students.");
                }
            });
        });
    }

    // Initial build of the student details table
    buildStudentDetailsTable(students);
});








// Add this to your script.js file
document.addEventListener("DOMContentLoaded", function () {
    const aboutDescription = document.getElementById("about-description");
    
    // Get the "About Us" link in the navigation
    const aboutLink = document.querySelector('nav a[href="#about"]');
    
    // Add a click event listener to the "About Us" link
    aboutLink.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default link behavior (scrolling to the section)
        
        // Toggle the visibility of the description
        if (aboutDescription.style.display === "none") {
            aboutDescription.style.display = "block";
        } else {
            aboutDescription.style.display = "none";
        }
    });
});








const facilities = [
    {
        name: "1.",
        description: " Full AC Study Hall.",
    },
    {
        name: "2.",
        description: " RO water.",
    },
    {
        name: "3.",
        description: " 24*7 Free WiFi Access .",
    },
    {
        name: "4.",
        description: "CCTV for Security Purpose .",
    },
    {
        name: "5.",
        description: "Hindi, English,News Paper and Magzines.",
    },
    {
        name: "6.",
        description: "Faculty of Monthly Current Affairs.",
    },
    {
        name: "7.",
        description: " Separated Cabin/Row for Girls .",
    },
    {
        name: "8.",
        description: " Suitable and Peaceful environment for Study.",
    },
    {
        name: "9.",
        description: "Two days Free trial classes.",
    },
    // Add more facility details as needed
];



const showFacilityDetailsButton = document.getElementById("show-facility-details");
const facilityDetailsTable = document.getElementById("facility-details");

// Event listener for the "Show Facility Details" button
showFacilityDetailsButton.addEventListener("click", function () {
    if (facilityDetailsTable.style.display === "none") {
        // Build and display the facility details table
        buildFacilityDetailsTable(facilities);
        facilityDetailsTable.style.display = "block";
        showFacilityDetailsButton.textContent = "Hide Facility Details";
    } else {
        // Hide the facility details table
        facilityDetailsTable.style.display = "none";
        showFacilityDetailsButton.textContent = "Show Facility Details";
    }
});

// Function to build the facility details table
function buildFacilityDetailsTable(facilityArray) {
    // Create the table header
    let tableHTML = `
        <thead>
            <tr>
                <th>No.</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
    `;

    // Create table rows with facility details
    for (const facility of facilityArray) {
        tableHTML += `
            <tr>
                <td>${facility.name}</td>
                <td>${facility.description}</td>
            </tr>
        `;
    }

    // Close the table
    tableHTML += `</tbody>`;

    // Set the generated HTML as the innerHTML of the table
    facilityDetailsTable.innerHTML = tableHTML;
}


const batchTimings = [
    {
        batch: "Batch 1",
        timings: " All 7 days, 6:00 AM - 12:00 PM",
        fee: " Rs.399",
    },
    {
        batch: "Batch 2",
        timings: " All 7 days, 12:00 PM - 6:00 PM",
        fee: " Rs.449",
    },
    {
        batch: "Batch 3",
        timings: " All 7 days, 6:00 PM - 11:00 PM",
        fee: " Rs.299",
    },
    
    // Add more batch timing details as needed
];


const showBatchTimingsButton = document.getElementById("show-batch-timings");
const batchTimingsTable = document.getElementById("batch-timings-table");

// Event listener for the "Show Batch Timings" button
showBatchTimingsButton.addEventListener("click", function () {
    if (batchTimingsTable.style.display === "none") {
        // Build and display the batch timing details table
        buildBatchTimingsTable(batchTimings);
        batchTimingsTable.style.display = "block";
        showBatchTimingsButton.textContent = "Hide Batch Timings";
    } else {
        // Hide the batch timing details table
        batchTimingsTable.style.display = "none";
        showBatchTimingsButton.textContent = "Show Batch Timings";
    }
});

// Function to build the batch timing details table
function buildBatchTimingsTable(batchTimingsArray) {
    // Create the table header
    let tableHTML = `
        <thead>
            <tr>
                <th>Batch</th>
                <th>Timings</th>
                <th>Batch Fee</th>
            </tr>
        </thead>
        <tbody>
    `;

    // Create table rows with batch timing details
    for (const batchTiming of batchTimingsArray) {
        tableHTML += `
            <tr>
                <td>${batchTiming.batch}</td>
                <td>${batchTiming.timings}</td>
                <td>${batchTiming.fee}</td>
            </tr>
        `;
    }

    // Close the table
    tableHTML += `</tbody>`;

    // Set the generated HTML as the innerHTML of the table
    batchTimingsTable.innerHTML = tableHTML;
}



document.addEventListener("DOMContentLoaded", function () {
    const events = document.querySelectorAll(".event");

    events.forEach(function (event) {
        event.addEventListener("click", function () {
            const image = event.querySelector("img");

            if (image.style.display === "none") {
                // Show the image and adjust its size to the screen
                image.style.display = "block";
            } else {
                // Hide the image when clicked again
                image.style.display = "none";
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const events = document.querySelectorAll(".event");
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.querySelector(".close");

    events.forEach(function (event) {
        event.addEventListener("click", function () {
            const image = event.querySelector("img");
            modalImage.src = image.src;
            modal.style.display = "block";
            document.body.classList.add("modal-open");
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    });
});



// JavaScript for "Back" button in image modal
document.addEventListener("DOMContentLoaded", function () {
    const backToSiteButton = document.getElementById("backToSite");
    const modal = document.getElementById("imageModal");

    backToSiteButton.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        // You can add additional logic here to navigate back to the website's main page.
    });
});

