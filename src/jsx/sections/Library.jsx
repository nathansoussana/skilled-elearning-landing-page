import { Button1 } from '../components/Buttons'
import { Button2 } from '../components/Buttons'
import { Button3 } from '../components/Buttons'

export default function Library() {
  return (
    <div className="section-container">
      <div className="library">
        <h1>Increase your skill with minimal budget</h1>
        <h2>Users all around the globe</h2>
        <h3>Check out our most popular courses</h3>
        <h4>Photography</h4>

        <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
        <small>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.Donec nec justo eget felis facilisis fermentum.</small>

        <div className="btn-container">
          <Button1 url="#" text="Button 1" />
          <Button2 url="#" text="Button 2" />
          <Button3 url="#" text="Button 3" />
        </div>

        <div className="card-container">
          <div className="card card-title">
            <h3 className = "card-title-title">Check out our most popular courses!</h3>
          </div>

          <div className="card card-course">
            <img src="icon-animation.svg" alt="Course icon" className="card-course-icon"/>
            <h4 className="card-course-title">Animation</h4>
            <p className="class-course-description">Learn the latest animation techniques to create stunning motion design and captivate your audience.</p>
            <a href="#" className="link class-course-link">Get Started</a>
          </div>

          <div className="card card-course">
            <img src="icon-animation.svg" alt="Course icon" className="card-course-icon"/>
            <h4 className="card-course-title">Animation</h4>
            <p className="class-course-description">Learn the latest animation techniques to create stunning motion design and captivate your audience.</p>
            <a href="#" className="link class-course-link">Get Started</a>
          </div>

          <div className="card card-course">
            <img src="icon-animation.svg" alt="Course icon" className="card-course-icon"/>
            <h4 className="card-course-title">Animation</h4>
            <p className="class-course-description">Learn the latest animation techniques to create stunning motion design and captivate your audience.</p>
            <a href="#" className="link class-course-link">Get Started</a>
          </div>

          <div className="card card-course">
            <img src="icon-animation.svg" alt="Course icon" className="card-course-icon"/>
            <h4 className="card-course-title">Animation</h4>
            <p className="class-course-description">Learn the latest animation techniques to create stunning motion design and captivate your audience.</p>
            <a href="#" className="link class-course-link">Get Started</a>
          </div>

          <div className="card card-course">
            <img src="icon-animation.svg" alt="Course icon" className="card-course-icon"/>
            <h4 className="card-course-title">Animation</h4>
            <p className="class-course-description">Learn the latest animation techniques to create stunning motion design and captivate your audience.</p>
            <a href="#" className="link class-course-link">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  )
}