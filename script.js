
/* Amore Bakers WhatsApp Number */
const WHATSAPP_NUMBER = "917822924121";

/* Mobile Menu */
const menu = document.querySelector(".menu");
const links = document.querySelector(".links");

if (menu && links) {
    menu.addEventListener("click", () => {
        links.classList.toggle("open");
    });
}

/* WhatsApp Enquiry Form */
const form = document.querySelector("[data-order-form]");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(form);

        // Convert form data into a message
        const details = [...formData.entries()]
            .map(([key, value]) => `${key}: ${value}`)
            .join("\n");

        const message =
            `Hello Amore Bakers! I would like to enquire:\n${details}`;

        // Create WhatsApp link
        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp
        window.open(whatsappURL, "_blank");
    });
}
