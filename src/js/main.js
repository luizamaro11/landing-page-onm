// FAQs

const faqs = document.querySelectorAll(".faq article")

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active")
    })
})

// Ação do CTA
const ctas = document.querySelectorAll(".cta")
const modal = document.querySelector("dialog")
const btnClose = document.querySelector("dialog .close svg")
let body = document.querySelector("body")

ctas.forEach((cta) => {
    cta.addEventListener("click", () => {
        modal.showModal()

        console.log(body)
        body.style.filter = "blur(10px)"
    })
})

btnClose.addEventListener("click", () => {
    modal.close()

    console.log(body)
    body.style.filter = "none"
})

// Mascará input telefone

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}
  
const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}
