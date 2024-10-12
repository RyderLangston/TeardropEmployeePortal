// Example employee IDs (this should ideally be stored in a database)
const validEmployeeIds = ["162721", "834868", "091827"]; // Add your employee IDs here

function login() {
    const employeeId = document.getElementById("employeeId").value;
    const errorMessage = document.getElementById("error-message");
    
    if (validEmployeeIds.includes(employeeId)) {
        // Redirect to the dashboard if ID is valid
        window.location.href = "dashboard.html";
    } else {
        // Show an error message if ID is invalid
        errorMessage.textContent = "Invalid Employee ID. Please try again.";
    }
}
