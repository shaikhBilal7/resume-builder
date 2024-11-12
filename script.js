// Function to toggle visibility of section content
function toggleSectionVisibility(event) {
    var sectionHeading = event.target;
    var section = sectionHeading.closest('.toggle-section');
    if (section) {
        // Toggle the active class to show or hide the section content
        section.classList.toggle('active');
    }
}
// Attach event listeners to each section heading
