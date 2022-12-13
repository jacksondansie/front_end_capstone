import "../../styles/ContactPage.scss"
import { useState } from "react";

export default function ContactPage() {
    const [message, setMessage] = useState("")

    function handleSubmit(e){
        setMessage("")
        e.preventDefault();
        window.alert("Message Submited");
    }

    return(
        <div className="page-container"> 
            <h1>Contact Page</h1>
            <p>We appreciate your feedback.</p>

            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        placeholder="Reach out to us." 
                        className="feedback-box" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <button className="feedback-btn">Submit</button>
                </form>
            </div>
        </div>
    )
}