import {CardTitle} from '../components/Cards'
import {CardCourse} from '../components/Cards'
import data from '../data'

export default function Courses() {
  const cardsCourses = data.map(course => {
      return (
        <CardCourse 
          key={course.id}
          {...course}
        />
      )
    })
  
  return (
    <div className="courses">
      <div className="section-container">
        <div className="card-container">
          <CardTitle />
          {cardsCourses}
        </div>
      </div>
    </div>
  )
}