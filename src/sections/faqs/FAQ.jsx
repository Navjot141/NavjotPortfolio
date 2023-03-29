import React from "react";
import faqs from './data'
import Card from "../../components/Card";
import './faqs.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useState } from "react";

const FAQ = ({ faq }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <Card className="faq light" onClick={() => {
            setShowAnswer(!showAnswer)
        }}>
            <div>
                <h5 className="faq_question">{faq.question}</h5>
                <button className="faq_icon" >
                    {showAnswer ? <AiOutlinePlus /> : <AiOutlineMinus />}

                </button>
            </div>
            {showAnswer && <p className="faq_answer">{faq.answer}</p>}
        </Card>
    )
}

export default FAQ;