import PropTypes from 'prop-types';

export function CardTitle() {
  return (
    <div className="card card-title">
      <h3 className = "card-title-title">Check out our most popular courses!</h3>
    </div>
  )
}


export function CardCourse(props) {
  return (
    <div className="card card-course">
      <img src={`${props.icon}.svg`} alt="Course icon" className="card-course-icon"/>
      <h4 className="card-course-title">{props.title}</h4>
      <p className="card-course-description">{props.description}</p>
      <a href="#" className="link card-course-link">Get Started</a>
    </div>
  )
}

CardCourse.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
