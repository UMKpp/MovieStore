document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const requestMovieBtn = document.getElementById("requestMovieBtn");
    const reportIssueBtn = document.getElementById("reportIssueBtn");
    const movieSearch = document.getElementById("movieSearch") as HTMLInputElement | null;
    const movieCards = document.querySelectorAll<HTMLAnchorElement>(".movie-card");

    if (themeToggle && themeIcon) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");

            const isLightMode = document.body.classList.contains("light-mode");
            themeIcon.classList.toggle("fa-moon", isLightMode);
            themeIcon.classList.toggle("fa-sun", !isLightMode);
            themeToggle.setAttribute(
                "aria-label",
                isLightMode ? "Switch to dark theme" : "Switch to light theme"
            );
        });
    }

    movieSearch?.addEventListener("input", () => {
        const query = movieSearch.value.trim().toLowerCase();

        movieCards.forEach((movieCard) => {
            const image = movieCard.querySelector("img");
            const title = image?.alt.toLowerCase() || "";
            const column = movieCard.closest<HTMLElement>("[class*='col-']");

            if (column) {
                column.hidden = query !== "" && !title.includes(query);
            }
        });
    });

    function setupDoubleClickAction(button: HTMLElement | null, action: () => void): void {
        if (!button) {
            return;
        }

        let expanded = false;

        button.addEventListener("click", () => {
            if (!expanded) {
                expanded = true;
                button.classList.add("expanded");
                return;
            }

            action();
            expanded = false;
            button.classList.remove("expanded");
        });
    }

    setupDoubleClickAction(requestMovieBtn, () => {
        alert("Movie request feature coming soon.");
    });

    setupDoubleClickAction(reportIssueBtn, () => {
        alert("Report issue feature coming soon.");
    });
});

