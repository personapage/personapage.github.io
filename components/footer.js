class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="footer">
                <div class="social-media-icons-container">
                    <a href="https://bsky.app/profile/personapage.site">
                        <div class="social-media-icons">
                            <img src="/assets/social-media-icons/bluesky.svg" />
                        </div>
                    </a>
                    <a href="https://github.com/personapage/personapage.github.io">
                        <div class="social-media-icons">
                            <img src="/assets/social-media-icons/github.svg" />
                        </div>
                    </a>
                </div>
                <div class="copyright-notice">© 2026 Los Altos • MIT License</div>
            </div>
        `;
    }
}

customElements.define("site-footer", Footer);