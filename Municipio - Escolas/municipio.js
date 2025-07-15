$(document).ready(function () {
    let faqQuestionContainers = document.querySelectorAll(`[unique-script-id="w-w-dm-id"] .faq-question-container`);
    let currentlyActive = null;

    faqQuestionContainers.forEach(function (faqQuestionContainer) {
        faqQuestionContainer.onclick = function () {
            const parentFaq = this.parentElement;

            // Se já está ativo, apenas desativa
            if (parentFaq.classList.contains('active')) {
                parentFaq.classList.remove('active');
                currentlyActive = null;
                return;
            }

            // Fecha o item atualmente aberto
            if (currentlyActive) {
                currentlyActive.classList.remove('active');
            }

            // Abre o novo item
            parentFaq.classList.add('active');
            currentlyActive = parentFaq;
        };
    });
});