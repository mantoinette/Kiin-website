const HeroSection = () => {
  return (
    <section style={styles.hero}>
      <h1>Reliable Internet & Smart Tech Solutions</h1>
      <p>
        We provide high-speed internet, advanced surveillance cameras,
        and powerful software systems for businesses and homes.
      </p>

      <button style={styles.button}>Explore Products</button>
    </section>
  );
};

const styles = {
  hero: {
    textAlign: "center" as const,
    
    padding: "30px 600px",
    backgroundColor: "#890000",
    color: "white"
  },
  button: {
    marginTop: "20px",
    padding: "12px 25px",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
};

export default HeroSection;