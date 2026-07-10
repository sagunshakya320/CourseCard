import Button from "./Button";
import Badge from "./Badge";

function CourseCard(props) {
  return (
    <div className="card">

      <img
        src={props.image}
        alt={props.title}
        className="course-image"
      />

      <Badge text={props.badge} />

      <h2>{props.title}</h2>

      <p>{props.description}</p>

      <p><strong>Instructor:</strong> {props.instructor}</p>

      <p>Category: {props.category}</p>

      <p>Level: {props.level}</p>

      <p>Duration: {props.duration}</p>

 

      <p>{props.students} Students</p>

      <h3>{props.price}</h3>

      <Button />
    </div>
  );
}

export default CourseCard;