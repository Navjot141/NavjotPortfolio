import React from "react";
import faqs from './data'
import FAQ from "./FAQ";
import './faqs.css'

const FAQs = () => {
    return (
        <section id="FAQs">
            <h2>Frequently Asked Questions</h2>
            <p>
                Here are some of the questions I usually get. Click to get the answer, and If you still
                have more questions, shoot me a message from contact section!
            </p>
            <div className="container faqs_container">
                {
                    faqs.map((faq) =>
                        <FAQ key={faq.id} faq={faq} />)
                }
            </div>
        </section>
    )
}

export default FAQs;