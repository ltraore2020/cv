// Listen for a submit
document.querySelector(".contact_form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    let pass = "cqtgahvrrmtukacl";

    sendEmail(name, email, message, pass);
    document.querySelector(".contact_form").reset();

}

function sendEmail(name, email, message, pass) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'lassana.traore2022@gmail.com',
        Password: pass,
        To: "lassana.traore2020@campus-eni.fr",
        From: `${email}`,
        Subject: `${name} sent you a message`,
        Body: `Name: ${name} <br/> 
                Email: ${email} <br/>
                Meessage: ${message}`,
    }).then(message => alert("Mail envoyé avec succès"));
}