import { TextArea, Button } from "@react95/core";

export default function MailWindow() {
  return (
    <form
      action="https://formsubmit.co/lavishkumarvarshney@gmail.com"
      method="POST"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        width: "100%",
      }}
    >
      {/* Disable captcha */}
      <input type="hidden" name="_captcha" value="false" />

      {/* Redirect after submit */}
      <input type="hidden" name="_next" value="https://yourwebsite.com" />

      <TextArea
        style={{ resize: "none" }}
        name="name"
        placeholder="Your Name"
        rows={1}
        required
      />
      <TextArea
        style={{ resize: "none" }}
        name="email"
        placeholder="Your Email"
        rows={1}
        required
      />
      <TextArea
        style={{ resize: "none" }}
        name="message"
        placeholder="Message"
        rows={10}
        required
      />

      <Button type="submit">Send</Button>
    </form>
  );
}
