const faqs = [
            {
                question: "Why is controlling the center crucial in the opening?",
                answer: "Controlling the center provides your pieces with maximum mobility and flexibility, laying the groundwork for strong positional play."
            },
            {
                question: "How does studying strategic literature improve your game?",
                answer: "It helps in understanding deeper positional nuances, complex pawn structures, and long-term planning, rather than just relying on immediate tactical traps."
            },
            {
                question: "What is a good way to manage tension during a tournament?",
                answer: "Maintain high focus, stick to your daily practice habits, and evaluate probabilities logically before making a critical commitment on the board."
            }
        ];
        const QAItem = ({ faq }) => {
            const [isOpen, setIsOpen] = React.useState(false);

            return (
                <div className="faq-item">
                    <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                        {faq.question}
                        <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                    </div>
                    {isOpen && <div className="faq-answer">{faq.answer}</div>}
                </div>
            );
        };
        const App = () => {
            return (
                <div className="qa-container">
                    <h2>Quick Q&A Component</h2>
                    {faqs.map((faq, index) => (
                        <QAItem key={index} faq={faq} />
                    ))}
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);