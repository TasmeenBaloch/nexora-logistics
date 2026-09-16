// SHIPMENT TRACKING
const trackingForm = document.getElementById("tracking-form");

if (trackingForm) {
    trackingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const trackingNumber =
            document.getElementById("tracking-number").value.trim();

        const result =
            document.getElementById("tracking-result");

        if (trackingNumber.toUpperCase() === "NEX123456") {

            result.innerHTML = `
                <div class="tracking-status">
                    <h3>Shipment Found</h3>
                    <p><strong>Tracking Number:</strong> NEX123456</p>
                    <p><strong>Status:</strong> In Transit</p>
                    <p><strong>Current Location:</strong> Karachi</p>
                    <p><strong>Destination:</strong> Dubai</p>
                </div>
            `;

        } else {

            result.innerHTML = `
                <div class="tracking-status">
                    <h3>Shipment Not Found</h3>
                    <p>
                        Please check your tracking number and try again.
                    </p>
                </div>
            `;
        }
    });
}

// CONTACT FORM 
const contactForm =
document.getElementById("contact-form");

if(contactForm) {
    contactForm.addEventListener("submit", function(event){
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const service = document.getElementById("service").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("form-message");

        if(name ===""|| email === ""|| service === ""|| message === ""){
            formMessage.textContent = "Please fill in all fields.";
            return;
        }
        formMessage.textContent = "Thank You! Your enquiry has been submitted successfully.";
            contactForm.reset();
        
    })
}


// ANIMATED STATS
const stats = document.querySelectorAll(".stat h3");

const statsObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            const stat = entry.target;
            const target = Number(stat.dataset.target);
            let current = 0;

            const updateStat = setInterval(function() {
                current += Math.ceil(target / 50);

                if (current >= target) {
                    current = target;
                    clearInterval(updateStat);
                }

                if (target === 98) {
                    stat.textContent = current + "%";
                } else {
                    stat.textContent = current + "+";
                }

            }, 30);

            observer.unobserve(stat);
        }
    });
});

stats.forEach(function(stat) {
    statsObserver.observe(stat);
});

// HERO INTERACTIVE EFFECT
const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");

if (hero && heroContent) {
    hero.addEventListener("mousemove", function(event) {

        const x = (event.clientX / window.innerWidth - 0.5) * 10;
        const y = (event.clientY / window.innerHeight - 0.5) * 10;

        heroContent.style.transform =
            `translate(${x}px, ${y}px)`;
    });

    hero.addEventListener("mouseleave", function() {
        heroContent.style.transform = "translate(0, 0)";
    });
}