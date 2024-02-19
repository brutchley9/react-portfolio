export default function Contact() {
    return (
      <div id="contact-page">
        <h1>Contact Page</h1>
        <p>For any inqueries you may have, please send me an email at:</p>
        <a id="my-email" href="bhutchison0901@yahoo.com">bhutchison0901@yahoo.com</a>
        <p id="submit-message">...or, just submit a message below with your name and email!</p>
        <div id="contact">
        <input placeholder="Name" id="name-input"></input>
        <input placeholder="Email" id="email-input"></input>
        <input placeholder="Write Your Message:" id="message-input"></input>
        <button id="submit-button">Submit</button>
        </div>
      </div>
    );
}
  