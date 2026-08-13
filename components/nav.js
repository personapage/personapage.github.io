class NavigationBar extends HTMLElement {
    connectedCallback() {
        const currentPage = this.getAttribute("page");

        this.innerHTML = `
            <div class="navbar">
                <div class="${(currentPage === "home" || currentPage === "404") ? "link-active" : "link-inactive"}">
                    <a href="/">persona page</a>
                </div>

                <div class="${currentPage === "nanoblogs" ? "link-active" : "link-inactive"}">
                    <a href="/nanoblogs">nanoblogs</a>
                </div>

                <div class="${currentPage === "quack-game" ? "link-active" : "link-inactive"}">
                    <a href="/quack-game">quack!</a>
                </div>

                <button class="material-symbols-rounded" id="toggle-sidebar-button">menu</button>
            </div>

            <div id="sidebar">
                <div>
                    <a class="${currentPage === "home" ? "link-active-sidebar" : "link-inactive-sidebar"}"
                       href="/">
                        persona page
                    </a>
                </div>

                <div>
                    <a class="${currentPage === "nanoblogs" ? "link-active-sidebar" : "link-inactive-sidebar"}"
                       href="/nanoblogs">
                        nanoblogs
                    </a>
                </div>

                <div>
                    <a class="${currentPage === "quack" ? "link-active-sidebar" : "link-inactive-sidebar"}"
                       href="/quack-game">
                        quack!
                    </a>
                </div>
            </div>
        `;

        const toggleButton = this.querySelector("#toggle-sidebar-button");
        const sidebar = this.querySelector("#sidebar");

        toggleButton.addEventListener("click", () => {
            if (sidebar.style.display === "none") {
                toggleButton.textContent = "close";
                sidebar.style.display = "flex";
            } else {
                toggleButton.textContent = "menu";
                sidebar.style.display = "none";
            }
        });
    }
}

customElements.define("site-navigation-bar", NavigationBar);