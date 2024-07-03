import React from "react";
import "./reset.css";
import "./styles.css";

const ENDPOINT = "https://jor-test-api.vercel.app/api/contact"; //  ?simulatedError=true

function ContactFormApp() {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [status, setStatus] = React.useState("idle");

  const id = React.useId();
  const emailId = `${id}-email`;
  const messageId = `${id}-message`;

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("loading");
    const response = await fetch(ENDPOINT, {
      method: "POST",
      body: JSON.stringify({
        email,
        message,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.ok) {
      setStatus("success");
      setMessage("");
    } else {
      setStatus("error");
    }
  }

  // if (status === "success") {
  //   return <p>Message Sent!</p>;
  // }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <label htmlFor={emailId}>Email</label>
        <input
          required={true}
          id={emailId}
          type="email"
          value={email}
          disabled={status === "loading"}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className="row">
        <label htmlFor={messageId}>Message</label>
        <textarea
          required={true}
          id={messageId}
          value={message}
          disabled={status === "loading"}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
      </div>
      <div className="button-row">
        <span className="button-spacer" />
        <button> {status === "loading" ? "Submitting..." : "Submit"}</button>
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          margin: "auto",
        }}
      >
        {status === "success" && <p>Message Sent! </p>}
        {status === "error" && <p>Something went wrong!</p>}
      </div>
    </form>
  );
}

export default ContactFormApp;
