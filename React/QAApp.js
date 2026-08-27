import QA from "./QA.js"

const qaData = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces, developed by Facebook." },
    { question: "What is a component in React?", answer: "A component is a reusable piece of UI that encapsulates its own logic and rendering." },
    { question: "What are props in React?", answer: "Props (properties) are read-only data passed from parent to child components." },
    { question: "What is state in React?", answer: "State is mutable data managed within a component that triggers re-renders when changed." },
    { question: "What is the Virtual DOM?", answer: "The Virtual DOM is a lightweight copy of the real DOM that React uses for efficient updates." },
    { question: "What are hooks in React?", answer: "Hooks are functions that let you use state and other React features in functional components." },
    { question: "What is useState hook?", answer: "useState is a hook that adds state to functional components, returning [state, setState]." },
    { question: "What is useEffect hook?", answer: "useEffect is a hook for performing side effects like data fetching, subscriptions, or DOM manipulation." },
    { question: "What is JSX?", answer: "JSX is a syntax extension that allows writing HTML-like code in JavaScript." },
    { question: "What is the difference between state and props?", answer: "Props are passed from parent (read-only), state is managed internally (mutable)." }
];

export default function App() {
    const qaList = qaData.map((qa) => {
        return QA(qa)
    });
    const div = React.createElement("div",
        { className: "qa-container" }, [...qaList]);
    return div;
}

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(App());