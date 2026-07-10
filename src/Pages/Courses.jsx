import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

function Courses() {
  return (
    <div className="grid">
      {courses.map((course) => (
        <CourseCard
        key={course.id}
        image={course.image}
        title={course.title}
        instructor={course.instructor}
        category={course.category}
        duration={course.duration}
        level={course.level}
        rating={course.rating}
        students={course.students}
        price={course.price}
        badge={course.badge}
        description={course.description}
        />
      ))}
    </div>
  );
}

export default Courses;