import { Button2 } from '../components/Buttons'

export default function Hero() {
  return (
    <section className="hero">
      <div className="section-container">
        <div className="hero-content">
          <h1 className="hero-content-title">Maximize skill, minimize budget</h1>
          <p className="hero-content-text">Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
          <Button2 url="#" text="Get Started" />
        </div>

        <div className="hero-img">
          <img className="hero-img-img-desktop" src="image-hero-desktop.png" alt="An illustration of a lady studying at home" />
          <img className="hero-img-img-tablet" src="image-hero-tablet.png" alt="An illustration of a lady studying at home" />
          <img className="hero-img-img-mobile" src="image-hero-mobile.png" alt="An illustration of a lady studying at home" />
        </div>
      </div>
    </section>
  )
}