const menuButton = document.getElementById("menuButton");
const slideMenu = document.getElementById("slideMenu");

menuButton.addEventListener("click", function() {
    slideMenu.classList.toggle("open");
});

const legendForm = document.getElementById("legendForm");
const formStatus = document.getElementById("formStatus");
const submitButton = legendForm.querySelector('button[type="submit"]');

legendForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    const formData = new FormData(legendForm);

    try {
        const response = await fetch(legendForm.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            formStatus.textContent =
                "Thanks for keeping the legends alive! Your suggestion has been received. We appreciate your participation in Six Strings, Endless Legends!";

            legendForm.reset();

            submitButton.disabled = true;
            submitButton.textContent = "Submitted!";

        } else {
            formStatus.textContent =
                "Sorry, something went wrong. Please try submitting again.";

            submitButton.disabled = false;
            submitButton.textContent = "Submit";
        }

    } catch (error) {
        formStatus.textContent =
            "Unable to submit your suggestion. Please check your connection and try again.";

        submitButton.disabled = false;
        submitButton.textContent = "Submit";
    }
});