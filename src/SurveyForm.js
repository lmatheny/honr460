import React, { useState } from 'react';
import './SurveyForm.css';

const SurveyForm = () => {
    const initialResponses = {
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: ''
    };

    const [responses, setResponses] = useState(initialResponses);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setResponses(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Survey responses:', responses);
        // Add your logic for handling the survey responses here

        // Clear the form inputs
        setResponses(initialResponses);
        // Show the success message
        setSubmitted(true);
        // Optionally, you can reset the success message after a certain period of time
        setTimeout(() => {
            setSubmitted(false);
        }, 5000); // 5000 milliseconds (5 seconds) in this example
    }


    return (
        <div className="survey-form">
            <h2>Survey Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="q1">1. From 1 to 10, how confident are you when using health-monitoring technology?</label>
                    <input type="text" id="q1" name="q1" value={responses.q1} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="q2">2. How often do you access and use health-monitoring applications?</label>
                    <input type="text" id="q2" name="q2" value={responses.q2} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="q3">3. How dependent are you on a personal health-tracking device (e.g. Apple Watch, Fitbit)?</label>
                    <input type="text" id="q3" name="q3" value={responses.q3} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="q4">4. Have you ever been affected by a breach of your personal data, regardless of whether it was health data?</label>
                    <input type="text" id="q4" name="q4" value={responses.q4} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="q5">5. Was there any material that surprised you?</label>
                    <input type="text" id="q5" name="q5" value={responses.q5} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="q6">6. Was anything confusing or did it not make sense?</label>
                    <input type="text" id="q6" name="q6" value={responses.q6} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="q7">7. Please rate your ease of navigating the website (very easy → very difficult)</label>
                    <input type="text" id="q7" name="q7" value={responses.q7} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="q8">8. Based on the presented information, are you likely to change anything about how and where you share your personal health data?</label>
                    <input type="text" id="q8" name="q8" value={responses.q8} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="q9">9. Additional Comments:</label>
                    <input type="text" id="q9" name="q9" value={responses.q9} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="q10">10. Any other feedback you would like to provide?</label>
                    <input type="text" id="q10" name="q10" value={responses.q10} onChange={handleChange} />
                </div>
                {submitted && <div className="success-message">Thank you for your submission!</div>}

                <button type="submit">Submit</button>
               
            </form>
        </div>
    );
}

export default SurveyForm;
