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
                <div className="skill-list">
                    <SkillList skill="Java" emoji="💪" color="blue"/>
                    <SkillList skill="HTML" emoji="👍" color="orange"/>
                    <SkillList skill="CSS" emoji="👍" color="yellow"/>
                    <SkillList skill="JavaScript" emoji="💪" color="red"/>
                </div>
            </div>
        </div>
    );
}

function Avatar() {
    return (<div>
        <img src="../girl.jpg" alt="Stoica Georgiana" className="avatar"/>
    </div>);
}

function SkillList(props) {
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
