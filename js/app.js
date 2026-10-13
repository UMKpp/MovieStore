const movieData = {
    "Don't Look Up": { director: "Adam McKay", description: "When astronomy graduate student Kate Dibiasky and her professor, Randall Mindy, discover a comet on a collision course with Earth, they launch an urgent media tour to warn the public. Their attempt to make a world-changing danger impossible to ignore becomes a sharp, funny look at celebrity culture, politics, and denial.", cast: [["Leonardo DiCaprio", "Dr. Randall Mindy", "Leonardo_DiCaprio_Cannes_2019.jpg"], ["Jennifer Lawrence", "Kate Dibiasky", "Jennifer_Lawrence_Cannes_2018.jpg"], ["Meryl Streep", "President Orlean", "Meryl_Streep_2016.jpg"], ["Jonah Hill", "Jason Orlean", "Jonah_Hill_2011.jpg"]], related: [["The Big Short", "2015", "https://www.google.com/search?q=The+Big+Short+movie"]] },
    Extraction: { director: "Sam Hargrave", description: "Black-market mercenary Tyler Rake is sent into Dhaka to rescue Ovi, the kidnapped son of an imprisoned crime lord. As the operation spirals through crowded streets and hostile territory, Tyler must protect his young charge while confronting the choices that shaped his own damaged past.", cast: [["Chris Hemsworth", "Tyler Rake", "Chris_Hemsworth_by_Gage_Skidmore_2.jpg"], ["Rudhraksh Jaiswal", "Ovi Mahajan", "Rudhraksh_Jaiswal.jpg"], ["Randeep Hooda", "Saju Rav", "Randeep_Hooda_at_the_2018_Mumbai_Film_Festival.jpg"], ["Golshifteh Farahani", "Nik Khan", "Golshifteh_Farahani_Cannes_2018.jpg"]], related: [["Extraction 2", "2023", "https://www.google.com/search?q=Extraction+2+movie"]] },
    "Grave of the Fireflies": { director: "Isao Takahata", description: "During the final months of World War II, siblings Seita and Setsuko struggle to survive after their home and family are torn apart. Their search for shelter and small moments of comfort becomes a deeply human story about resilience, love, and the cost of war.", cast: [["Tsutomu Tatsumi", "Seita Yokokawa", "Tsutomu_Tatsumi.jpg"], ["Ayano Shiraishi", "Setsuko Yokokawa", "Ayano_Shiraishi.jpg"], ["Akemi Yamaguchi", "Mother", "Akemi_Yamaguchi.jpg"], ["Yoshiko Shinohara", "Aunt", "Yoshiko_Shinohara.jpg"]], related: [["The Tale of the Princess Kaguya", "2013", "https://www.google.com/search?q=The+Tale+of+the+Princess+Kaguya+movie"], ["Only Yesterday", "1991", "https://www.google.com/search?q=Only+Yesterday+1991+movie"]] },
    "Marriage Story": { director: "Noah Baumbach", description: "A theater director and an actor begin the difficult process of ending their marriage while trying to remain present for their young son. Moving between New York and Los Angeles, the film observes the tenderness, frustration, and complicated negotiations that remain after love changes shape.", cast: [["Scarlett Johansson", "Nicole Barber", "Scarlett_Johansson_Cannes_2018.jpg"], ["Adam Driver", "Charlie Barber", "Adam_Driver_2017.jpg"], ["Laura Dern", "Nora Fanshaw", "Laura_Dern_Cannes_2017.jpg"], ["Ray Liotta", "Jay Marotta", "Ray_Liotta_2012.jpg"]], related: [["The Squid and the Whale", "2005", "https://www.google.com/search?q=The+Squid+and+the+Whale+movie"], ["Frances Ha", "2012", "https://www.google.com/search?q=Frances+Ha+movie"]] },
    "Red Notice": { director: "Rawson Marshall Thurber", description: "An FBI profiler is forced into an uneasy alliance with the world's most accomplished art thief when a daring rival threatens an international treasure hunt. The chase moves from one glamorous setting to another, powered by shifting loyalties, elaborate scams, and three sharply contrasting personalities.", cast: [["Dwayne Johnson", "John Hartley", "Dwayne_Johnson_2014.jpg"], ["Gal Gadot", "The Bishop", "Gal_Gadot_2018.png"], ["Ryan Reynolds", "Nolan Booth", "Ryan_Reynolds_2018.jpg"]], related: [["Central Intelligence", "2016", "https://www.google.com/search?q=Central+Intelligence+movie"], ["Skyscraper", "2018", "https://www.google.com/search?q=Skyscraper+2018+movie"]] },
    "Society of the Snow": { director: "J. A. Bayona", description: "After a plane carrying a Uruguayan rugby team crashes in the Andes, the survivors face an unforgiving landscape with little food, warmth, or hope of immediate rescue. The story follows their shared courage and difficult decisions as they rely on one another to endure an impossible ordeal.", cast: [["Enzo Vogrincic", "Numa Turcatti", "Enzo_Vogrincic_2024.jpg"], ["Agustín Pardella", "Nando Parrado", "Agustin_Pardella.jpg"], ["Matías Recalt", "Roberto Canessa", "Matias_Recalt_2024.jpg"], ["Diego Vegezzi", "Marcelo Pérez", "Diego_Vegezzi.jpg"]], related: [["The Impossible", "2012", "https://www.google.com/search?q=The+Impossible+2012+movie"], ["A Monster Calls", "2016", "https://www.google.com/search?q=A+Monster+Calls+movie"]] },
    "Spider-Man: Brand New Day": { director: "Destin Daniel Cretton", description: "Peter Parker enters a new chapter as Spider-Man, balancing the demands of protecting New York with the uncertainty of what his future holds. The upcoming Marvel adventure brings Tom Holland back to the role for another web-slinging story directed by Destin Daniel Cretton.", cast: [["Tom Holland", "Peter Parker / Spider-Man", "Tom_Holland_by_Gage_Skidmore.jpg"], ["Zendaya", "Michelle Jones-Watson", "Zendaya_2019_by_Glenn_Francis.jpg"], ["Jacob Batalon", "Ned Leeds", "Jacob_Batalon_by_Gage_Skidmore.jpg"], ["Sadie Sink", "Cast role undisclosed", "Sadie_Sink_2022.png"]], related: [["Spider-Man: Homecoming", "2017", "https://www.google.com/search?q=Spider-Man+Homecoming+movie"], ["Shang-Chi and the Legend of the Ten Rings", "2021", "https://www.google.com/search?q=Shang-Chi+movie"]] },
    "Spirited Away": { director: "Hayao Miyazaki", description: "Ten-year-old Chihiro becomes trapped in a mysterious spirit world when her parents take a wrong turn on the way to their new home. To find a way back, she must work in a magical bathhouse, make unexpected friends, and discover a courage she did not know she possessed.", cast: [["Rumi Hiiragi", "Chihiro", "Rumi_Hiiragi_2019.jpg"], ["Miyu Irino", "Haku", "Miyu_Irino_2019.jpg"], ["Mari Natsuki", "Yubaba / Zeniba", "Mari_Natsuki_2016.jpg"], ["Bunta Sugawara", "Kamaji", "Bunta_Sugawara_2014.jpg"]], related: [["My Neighbor Totoro", "1988", "https://www.google.com/search?q=My+Neighbor+Totoro+movie"], ["Howl's Moving Castle", "2004", "https://www.google.com/search?q=Howl%27s+Moving+Castle+movie"]] },
    "Sweet Home Alabama": { director: "Andy Tennant", description: "New York fashion designer Melanie Carmichael appears to have built a perfect new life, but a surprise engagement forces her to return to Alabama and settle unfinished business. Back home, old relationships and new ambitions make her reconsider the story she has been telling about where she belongs.", cast: [["Reese Witherspoon", "Melanie Carmichael", "Reese_Witherspoon_2012.jpg"], ["Josh Lucas", "Jake Perry", "Josh_Lucas_2015.jpg"], ["Patrick Dempsey", "Andrew Hennings", "Patrick_Dempsey_2015.jpg"], ["Candice Bergen", "Kate Hennings", "Candice_Bergen_2017.jpg"]], related: [["Hitch", "2005", "https://www.google.com/search?q=Hitch+2005+movie"], ["The Bounty Hunter", "2010", "https://www.google.com/search?q=The+Bounty+Hunter+2010+movie"]] },
    "The Adam Project": { director: "Shawn Levy", description: "After an accidental landing in the past, time-traveling pilot Adam Reed meets his younger self and joins forces with the boy to find the truth behind his mission. Their adventure mixes high-stakes science fiction with a heartfelt story about family, grief, and making peace with the person you used to be.", cast: [["Ryan Reynolds", "Adam Reed", "Ryan_Reynolds_2018.jpg"], ["Walker Scobell", "Young Adam Reed", "Walker_Scobell_2022.jpg"], ["Jennifer Garner", "Ellie Reed", "Jennifer_Garner_2018.jpg"], ["Mark Ruffalo", "Louis Reed", "Mark_Ruffalo_2017.jpg"]], related: [["Free Guy", "2021", "https://www.google.com/search?q=Free+Guy+movie"], ["Real Steel", "2011", "https://www.google.com/search?q=Real+Steel+movie"]] },
    "The Conjuring: Last Rites": { director: "Michael Chaves", description: "Ed and Lorraine Warren face another case that tests their faith, experience, and devotion to one another. Set within the world of the Conjuring investigations, this supernatural horror story returns to the couple at the center of the franchise for a final unsettling chapter.", cast: [["Vera Farmiga", "Lorraine Warren", "Vera_Farmiga_2018.jpg"], ["Patrick Wilson", "Ed Warren", "Patrick_Wilson_2015.jpg"], ["Mia Tomlinson", "Judy Warren", "Mia_Tomlinson.jpg"], ["Ben Hardy", "Tony Spera", "Ben_Hardy_2018.jpg"]], related: [["The Conjuring", "2013", "https://www.google.com/search?q=The+Conjuring+movie"], ["The Nun II", "2023", "https://www.google.com/search?q=The+Nun+II+movie"]] },
    "The Gray Man": { director: "Anthony and Joe Russo", description: "When a highly skilled CIA operative uncovers secrets hidden inside the agency, he becomes the target of a relentless former colleague. Pursued across Europe by an international team, he must use improvisation and uneasy alliances to stay alive and protect the people caught in the hunt.", cast: [["Ryan Gosling", "Court Gentry / Six", "Ryan_Gosling_Cannes_2014.jpg"], ["Chris Evans", "Lloyd Hansen", "Chris_Evans_2014.jpg"], ["Ana de Armas", "Dani Miranda", "Ana_de_Armas_Cannes_2018.jpg"], ["Regé-Jean Page", "Denny Carmichael", "Reg%C3%A9-Jean_Page_2022.jpg"]], related: [["Avengers: Endgame", "2019", "https://www.google.com/search?q=Avengers+Endgame+movie"], ["Captain America: The Winter Soldier", "2014", "https://www.google.com/search?q=Captain+America+The+Winter+Soldier+movie"]] },
    "The Irishman": { director: "Martin Scorsese", description: "A former truck driver reflects on the decades he spent working as a fixer for organized crime and on the powerful union leader Jimmy Hoffa who became his friend. The sweeping crime drama moves through memory, loyalty, and regret as one man's life is measured against the choices he made.", cast: [["Robert De Niro", "Frank Sheeran", "Robert_De_Niro_Cannes_2016.jpg"], ["Al Pacino", "Jimmy Hoffa", "Al_Pacino_2016.jpg"], ["Joe Pesci", "Russell Bufalino", "Joe_Pesci_2019.jpg"], ["Anna Paquin", "Peggy Sheeran", "Anna_Paquin_2018.jpg"]], related: [["Goodfellas", "1990", "https://www.google.com/search?q=Goodfellas+movie"], ["Casino", "1995", "https://www.google.com/search?q=Casino+1995+movie"]] },
    "The Love Hypothesis": { director: "Brett Haley", description: "Biology researcher Olive Smith agrees to a fake relationship with intimidating professor Adam Carlsen, hoping to simplify her personal life while keeping her academic ambitions on track. Their carefully arranged pretend romance grows more complicated as professional rivalry gives way to unexpected understanding.", cast: [["Daisy Edgar-Jones", "Olive Smith", "Daisy_Edgar-Jones_2022.jpg"], ["Ryan Gosling", "Adam Carlsen", "Ryan_Gosling_Cannes_2014.jpg"]], related: [["All the Bright Places", "2020", "https://www.google.com/search?q=All+the+Bright+Places+movie"]] },
    "They Cloned Tyrone": { director: "Juel Taylor", description: "A streetwise trio in a mysterious housing complex begin noticing strange events that do not add up. Their investigation leads them through a pulpy, funny science-fiction conspiracy involving surveillance, identity, and the forces shaping their neighborhood.", cast: [["John Boyega", "Fontaine", "John_Boyega_by_Gage_Skidmore_2.jpg"], ["Teyonah Parris", "Yo-Yo", "Teyonah_Parris_2018.jpg"], ["Jamie Foxx", "Slick Charles", "Jamie_Foxx_Cannes_2007.jpg"], ["Kiefer Sutherland", "Nixon", "Kiefer_Sutherland_2012.jpg"]], related: [["Creed III", "2023", "https://www.google.com/search?q=Creed+III+movie"]] },
    "When Harry Met Sally": { director: "Rob Reiner", description: "Harry Burns and Sally Albright meet during a cross-country drive and keep finding their way back into each other's lives over the years. Their conversations about friendship, love, and timing gradually reveal a relationship that is more complicated and more lasting than either expects.", cast: [["Billy Crystal", "Harry Burns", "Billy_Crystal_2012.jpg"], ["Meg Ryan", "Sally Albright", "Meg_Ryan_2019.jpg"], ["Carrie Fisher", "Marie", "Carrie_Fisher_2013.jpg"], ["Bruno Kirby", "Jess", "Bruno_Kirby_1988.jpg"]], related: [["The Princess Bride", "1987", "https://www.google.com/search?q=The+Princess+Bride+movie"], ["A Few Good Men", "1992", "https://www.google.com/search?q=A+Few+Good+Men+movie"]] }
};

function googleSearch(value) { return "https://www.google.com/search?q=" + encodeURIComponent(value + " actor"); }

function buildCast(cast) {
    return cast.map(function (person) {
        const imageName = person[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") + ".jpg";
        const image = "imagesaces/" + imageName;
        const fallback = "https://en.wikipedia.org/wiki/Special:FilePath/" + encodeURIComponent(person[2]) + "?width=180";
        return `<div class="cast-card"><a href="${googleSearch(person[0])}" target="_blank" rel="noopener noreferrer"><span class="cast-photo-wrap"><img src="${image}" alt="${person[0]}" class="cast-photo" onerror="this.onerror=null;this.src='${fallback}'"><i class="fa-solid fa-user cast-fallback" aria-hidden="true"></i></span><span class="cast-name">${person[0]}</span><span class="cast-role">${person[1]}</span></a></div>`;
    }).join("");
}

function setupMovieDetail() {
    const titleElement = document.querySelector(".movie-title strong");
    const movieInfo = document.querySelector(".movie-info");
    if (!titleElement || !movieInfo || !movieData[titleElement.textContent.trim()]) return;
    const movie = movieData[titleElement.textContent.trim()];
    const description = movieInfo.querySelector(".movie-description .detail-value");
    const rating = movieInfo.querySelector(".detail-row:nth-child(3)");
    if (description) description.textContent = movie.description;
    if (rating) rating.insertAdjacentHTML("afterend", `<div class="detail-row"><span class="detail-label">Director:</span><span class="detail-value">${movie.director}</span></div>`);
    document.querySelectorAll(".form-section").forEach(function (section) { section.remove(); });
    const oldCast = document.querySelector(".cast-section");
    if (oldCast) oldCast.remove();
    movieInfo.insertAdjacentHTML("beforeend", `<section class="cast-section"><h3 class="section-title">Cast</h3><div class="cast-list">${buildCast(movie.cast)}</div></section>`);
    document.querySelectorAll(".cinetore-footer").forEach(function (footer) {
        footer.innerHTML = `<div class="container"><div class="row"><div class="col-sm-4 footer-column"><div class="footer-brand">CINETORE</div><div class="footer-contact"><p><i class="fa-solid fa-envelope"></i><a href="mailto:cinetore@gmail.com">cinetore@gmail.com</a></p><p><i class="fa-solid fa-phone"></i><a href="tel:+941122334567">+94 11 223 34567</a></p><p><i class="fa-solid fa-location-dot"></i>Cinetore, Colombo 7</p></div></div><div class="col-sm-4 footer-column"><h4 class="footer-heading">Genres</h4><ul class="footer-links"><li><a href="#">Action</a></li><li><a href="#">Sci-Fi</a></li><li><a href="#">Drama</a></li><li><a href="#">Horror</a></li></ul></div><div class="col-sm-4 footer-column"><h4 class="footer-heading">Follow Us</h4><div class="footer-socials"><a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a><a href="#" aria-label="X"><i class="fa-brands fa-x-twitter"></i></a><a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a></div><div class="footer-copyright">© 2026 Cinetore. All rights reserved.</div></div></div></div>`;
    });
}

function readMyList() {
    try {
        return JSON.parse(localStorage.getItem("cinetoreMyList") || "[]");
    } catch (error) {
        return [];
    }
}

function writeMyList(movieTitles) {
    localStorage.setItem("cinetoreMyList", JSON.stringify(movieTitles));
}

function setupHomePage() {
    const movieSearch = document.getElementById("movieSearch");
    const movieCards = Array.from(document.querySelectorAll(".movie-card"));
    const noMoviesMessage = document.getElementById("noMoviesMessage");
    const genreLinks = document.querySelectorAll(".genre-filter");
    const myListLink = document.getElementById("myListLink");
    let activeGenre = "";
    let showingMyList = false;

    if (!movieSearch || movieCards.length === 0) {
        return;
    }

    function filterMovies() {
        const query = movieSearch.value.trim().toLowerCase();
        const savedMovies = readMyList();
        let visibleMovies = 0;

        movieCards.forEach(function (movieCard) {
            const title = (movieCard.dataset.movieTitle || movieCard.querySelector("img").alt).toLowerCase();
            const genre = movieCard.dataset.genre || "";
            const matchesQuery = title.includes(query);
            const matchesGenre = !activeGenre || genre === activeGenre;
            const matchesList = !showingMyList || savedMovies.includes(movieCard.dataset.movieTitle);
            const column = movieCard.closest("[class*='col-']");
            const isVisible = matchesQuery && matchesGenre && matchesList;

            if (column) {
                column.hidden = !isVisible;
            }

            if (isVisible) {
                visibleMovies += 1;
            }
        });

        if (noMoviesMessage) {
            noMoviesMessage.textContent = showingMyList && savedMovies.length === 0
                ? "Your list is empty."
                : "No movies found.";
            noMoviesMessage.hidden = visibleMovies !== 0;
        }
    }

    movieCards.forEach(function (movieCard) {
        movieCard.addEventListener("click", function () {
            const title = movieCard.dataset.movieTitle;
            const savedMovies = readMyList();

            if (title && !savedMovies.includes(title)) {
                savedMovies.push(title);
                writeMyList(savedMovies);
            }
        });
    });

    movieSearch.addEventListener("input", filterMovies);

    genreLinks.forEach(function (genreLink) {
        genreLink.addEventListener("click", function () {
            activeGenre = genreLink.dataset.genre || "";
            showingMyList = false;
            filterMovies();
        });
    });

    if (myListLink) {
        myListLink.addEventListener("click", function () {
            showingMyList = true;
            activeGenre = "";
            movieSearch.value = "";
            filterMovies();
        });
    }

    filterMovies();
}

document.addEventListener("DOMContentLoaded", function () {
    setupMovieDetail();
    setupHomePage();

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const requestMovieBtn = document.getElementById("requestMovieBtn");
    const reportIssueBtn = document.getElementById("reportIssueBtn");

    if (themeToggle && themeIcon) {
        if (localStorage.getItem("cinetoreTheme") === "light") {
            document.body.classList.add("light-mode");
        }

        function updateThemeButton() {
            const isLightMode = document.body.classList.contains("light-mode");
            themeIcon.classList.toggle("fa-moon", isLightMode);
            themeIcon.classList.toggle("fa-sun", !isLightMode);
            themeToggle.setAttribute(
                "aria-label",
                isLightMode ? "Switch to dark theme" : "Switch to light theme"
            );
        }

        updateThemeButton();

        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("light-mode");
            localStorage.setItem(
                "cinetoreTheme",
                document.body.classList.contains("light-mode") ? "light" : "dark"
            );
            updateThemeButton();
        });
    }

    document.querySelectorAll("[data-social-placeholder]").forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            alert(link.dataset.socialPlaceholder + " profile link is not configured yet.");
        });
    });

    function setupDoubleClickAction(button, action) {
        if (!button) {
            return;
        }

        let expanded = false;

        button.addEventListener("click", function () {
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

    setupDoubleClickAction(requestMovieBtn, function () {
        const title = prompt("Which movie would you like to request?");
        if (title) {
            alert("Your request was recorded locally: " + title);
        }
    });

    setupDoubleClickAction(reportIssueBtn, function () {
        const issue = prompt("What issue would you like to report?");
        if (issue) {
            alert("Your report was recorded locally.");
        }
    });
});