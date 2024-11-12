// Function to toggle visibility of section content
function toggleSectionVisibility(event: Event) {
    const sectionHeading = event.target as HTMLElement;
    const section = sectionHeading.closest('.toggle-section');
  
    if (section) {
      // Toggle the active class to show or hide the section content
      section.classList.toggle('active');
    }
  };
  
  // Attach event listeners to each section heading
  document.querySelectorAll('.section-heading').forEach((heading) => {
    heading.addEventListener('click', toggleSectionVisibility);
  });
  