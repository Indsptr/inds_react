export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi There! Im Indra Putra</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Web</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Welcome to my portfolio website, just someone who has a little skill in Informatics and Broadcasting.
            <br />
          </p>
        </div>
        <button className="btn btn-primary">Let's Explore</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
