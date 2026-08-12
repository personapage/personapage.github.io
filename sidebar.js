const toggleSidebarButton = document.getElementById("toggle-sidebar-button");
const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
    if (sidebar.style.display == "none") {
        toggleSidebarButton.textContent = 'close';
        sidebar.style.display = "flex";
    } else {
        toggleSidebarButton.textContent = 'menu';
        sidebar.style.display = "none";
    }
}