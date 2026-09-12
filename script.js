document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you for contacting me! Your message is being sent.");

    this.reset();
});
