// Listen for a submit
document.querySelector(".contact_form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let projet = document.querySelector(".projet").value;
    let message = document.querySelector(".message").value;

    sendEmail(name, email, projet, message);
    document.querySelector(".contact_form").reset();

}

function sendEmail(name, email, projet, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'lassana.traore2022@gmail.com',
        Password: "cqtgahvrrmtukacl",
        To: "lassana.traore2022@gmail.com",
        From: `${email}`,
        Subject: `${name} sent you a message`,
        Body: `Name: ${name} <br/> 
                Email: ${email} <br/>
                Meessage: ${message}`,
    }).then(message => alert("mail sent succesfully"));
}