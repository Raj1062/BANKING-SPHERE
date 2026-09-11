/* =========================================================
   BANKING SPHERE
   Main JavaScript
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuButton =
    document.getElementById("menuButton");

const header =
    document.querySelector(".header");


menuButton.addEventListener("click", function () {

    header.classList.toggle("open");


    if (header.classList.contains("open")) {

        menuButton.textContent = "✕";

    } else {

        menuButton.textContent = "☰";

    }

});


/* ================= CLOSE MOBILE MENU ================= */

const navigationLinks =
    document.querySelectorAll("#navigation a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        header.classList.remove("open");

        menuButton.textContent = "☰";

    });

});


/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ================= SCROLL ANIMATION ================= */

const animatedElements =
    document.querySelectorAll(
        ".feature-card, .news-card, .about-content"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.12
        }

    );


animatedElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(20px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});

