function Skill () {
    const skills = ["HTML", "CSS", "JavaScript", "React"];
    return (
        <ul>
            {skills.map((skill,index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    )
}
export default Skill;

