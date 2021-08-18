import HubSpotForm from "./HubSpotForm.js";

let elForm = document.getElementById('hubspot-form')

if(elForm) {
    let form = new HubSpotForm(elForm)
}