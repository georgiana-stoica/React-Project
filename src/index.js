import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";

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
        <Skill skill="Java" emoji="💪" color="blue"/>
        <Skill skill="HTML" emoji="👍" color="orange"/>
        <Skill skill="CSS" emoji="👍" color="yellow"/>
        <Skill skill="JavaScript" emoji="💪" color="red"/>
    </div>);
}

function Skill(props) {
    return (<div className="skill" style={{backgroundColor: props.color}}>
        <p>
            <span>{props.skill} {props.emoji}</span>
        </p>
    </div>);
}

function Intro(props) {
    return (<div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
    </div>);
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);
