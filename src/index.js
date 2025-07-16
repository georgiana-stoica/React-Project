import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";

const skills = [
    {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#2662EA"
    },
    {
        skill: "JavaScript",
        level: "advanced",
        color: "#EFD81D"
    },
    {
        skill: "Web Design",
        level: "advanced",
        color: "#C3DCAF"
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33"
    },
    {
        skill: "React",
        level: "advanced",
        color: "#60DAFB"
    },
    {
        skill: "Svelte",
        level: "beginner",
        color: "#FF3B00"
    }
];

function App() {
    return (
        <div className="card">
            <Avatar/>
            <div className="data">
                <Intro name="Stoica Georgiana"
                       description="I am a software engineer, working at Deutsche Bank. I live in Bucharest.
        I am 24 years old. I graduated Faculty of Automatic Control and Computer Science in 2024."/>
                {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
                <SkillList/>
            </div>
        </div>
    );
}

function Avatar() {
    return (<div>
        <img src="../girl.jpg" alt="Stoica Georgiana" className="avatar"/>
    </div>);
}

function SkillList() {
    return (<div className="skill-list">
        {skills.map((item) => <Skill skill={item.skill} level={item.level} color={item.color} key={item.skill}/>)}
    </div>);
}

function Skill({skill, level, color}) {
    return (<div className="skill" style={{backgroundColor: color}}>
        <p>
            <span>{skill}</span>
            <span>{level === "advanced" && "💪"}</span>
            <span>{level === "intermediate" && "👍"}</span>
            <span>{level === "beginner" && "👶"}</span>
        </p>
    </div>);
}

function Intro({name, description}) {
    return (<div>
        <h1>{name}</h1>
        <p>{description}</p>
    </div>);
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);
