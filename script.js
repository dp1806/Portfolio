function toggleDetails(projectId) {
    const details = document.getElementById(projectId);
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}