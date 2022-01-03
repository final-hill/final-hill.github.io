import HubSpotForm from "./HubSpotForm.js";

[...document.querySelectorAll('.hubspot-form')].forEach(form => {
    new HubSpotForm(form)
})