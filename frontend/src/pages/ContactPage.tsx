const ContactPage = () => {
  return (
    <div style={{ padding: "50px" }}>
      <h1>Contact Us</h1>

      <form style={styles.form}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "15px",
    width: "300px"
  }
};

export default ContactPage;