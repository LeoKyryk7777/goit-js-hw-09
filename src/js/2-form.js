const form = document.querySelector(`.feedback-form`)
form.addEventListener(`input`, e => {
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    const formData = { email, message };
    saveToLS("feedback-form-state", formData) 
});
let arr = [];
function initPage() {
    const data = loadFromLS("feedback-form-state");
    if (data) {
        form.elements.email.value = data.email || '';
        form.elements.message.value = data.message || '';
        formData.email = data.email || '';
        formData.message = data.message || '';
    }
}
initPage();

form.addEventListener(`submit`, e => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value.trim();
    const message = e.currentTarget.elements.message.value.trim();
    if (!email || !message) {
        alert('Fill please all fields');
        return;
    }
    const formData = { email, message };
     arr.push(formData);
    saveToLS('formData', arr);
    console.log(formData);
    e.target.reset();
    localStorage.removeItem("feedback-form-state");
});

function saveToLS(key, value) {
    const jsonData = JSON.stringify(value)
    localStorage.setItem(key, jsonData) 
};

function loadFromLS(key) {
    const body = localStorage.getItem(key);
    try {
        return body ? JSON.parse(body) : null;
    } catch {
        return null;
    }   
};