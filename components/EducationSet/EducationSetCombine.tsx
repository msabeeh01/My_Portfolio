import EducationBento from "./EducationBento";

const EducationSetCombine = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row md:justify-between break-all my-14 items-center">
        <div className="text-6xl font-bold">Education</div>
        <div className="text-4xl rounded-full bg-white p-4">📚</div>
      </div>

      <EducationBento
        coursework={[
          "Data Structures and Algorithms",
          "Emerging Technologies",
          "Web Application Development",
          "Testing and QA",
          "Database Concepts",
          "Client-Side Web Development",
          "Mobile Apps Development",
        ]}
        school={"Centennial College"}
        location={"Scarborough, ON"}
        date={"2021 - 2023"}
        degree={
          "Diploma in Software Engineering Technology - With Honours (GPA: 4.2)"
        }
      />
    </div>
  );
};

export default EducationSetCombine;

