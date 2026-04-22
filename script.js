const form = document.getElementById('contact-form');
const imieInput = document.getElementById('imie');
const nazwiskoInput = document.getElementById('nazwisko');
const emailInput = document.getElementById('email');
const wiadomoscInput = document.getElementById('wiadomosc');

const imieError = document.getElementById('imie-error');
const nazwiskoError = document.getElementById('nazwisko-error');
const emailError = document.getElementById('email-error');
const wiadomoscError = document.getElementById('wiadomosc-error');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;

    imieError.style.display = 'none';
    nazwiskoError.style.display = 'none';
    emailError.style.display = 'none';
    wiadomoscError.style.display = 'none';
    successMessage.style.display = 'none';

    const hasNumbers = /\d/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (imieInput.value.trim() === '') {
        imieError.textContent = 'Pole Imię jest wymagane.';
        imieError.style.display = 'block';
        isValid = false;
    } else if (hasNumbers.test(imieInput.value)) {
        imieError.textContent = 'Imię nie może zawierać cyfr.';
        imieError.style.display = 'block';
        isValid = false;
    }

    if (nazwiskoInput.value.trim() === '') {
        nazwiskoError.textContent = 'Pole Nazwisko jest wymagane.';
        nazwiskoError.style.display = 'block';
        isValid = false;
    } else if (hasNumbers.test(nazwiskoInput.value)) {
        nazwiskoError.textContent = 'Nazwisko nie może zawierać cyfr.';
        nazwiskoError.style.display = 'block';
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Pole E-mail jest wymagane.';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Podaj poprawny adres e-mail.';
        emailError.style.display = 'block';
        isValid = false;
    }

    if (wiadomoscInput.value.trim() === '') {
        wiadomoscError.textContent = 'Pole Wiadomość jest wymagane.';
        wiadomoscError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        successMessage.style.display = 'block';
        form.reset();
    }
});
