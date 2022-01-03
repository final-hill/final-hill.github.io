/**
 * @see https://legacydocs.hubspot.com/docs/methods/forms/submit_form
 */
class HubSpotForm {
    portalId = "20576097"
    formId = "88be57f6-d429-4d64-824e-f2747ef41a74"
    actionUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${this.portalId}/${this.formId}`

    constructor(form) {
        this.elForm = form
        this.elFormFields = form.querySelector('.hubspot-form_fields')
        this.elFormComplete = form.querySelector('.hubspot-form_complete')
        form.addEventListener('submit',(e) => this.submit(e))
    }

    submit(e) {
        e.preventDefault()
        let {elForm} = this
        let email = elForm.elements['email'].value.trim()
        this.postEmail(email)
        elForm.reset()

        this.showComplete()
    }

    async postEmail(email) {
        const response = await fetch(this.actionUrl, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                submittedAt: `${Date.now()}`,
                fields: [
                    { name: "email", value: email }
                ]
            })
        })

        return response.json()
    }

    showComplete(){
        this.elFormFields.style.display = 'none'
        this.elFormComplete.style.display = 'flex'
    }
}

export default HubSpotForm