// FAQs

const faqs = document.querySelectorAll(".faq article")

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active")
    })
})
