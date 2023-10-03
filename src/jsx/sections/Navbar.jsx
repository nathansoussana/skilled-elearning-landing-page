import {Button1} from '../components/Buttons'

export default function Navbar() {
  return (
    <nav>
      <div className="section-container">
        <img src="logo-dark.svg" alt="skilled logo" className="nav-logo nav-logo-light-mode" />
        <img src="logo-light.svg" alt="skilled logo" className="nav-logo nav-logo-dark-mode" />
        <Button1 url="#" text="Get Started" />
      </div>
    </nav>
  )
}