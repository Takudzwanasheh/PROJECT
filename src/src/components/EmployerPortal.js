import React, { useState } from 'react';

const EmployerPortal = () => {
    const [showInterns, setShowInterns] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const [showEmployability, setShowEmployability] = useState(false);

    // Sample data for interns and their hours
    const internsData = [
        { name: 'Pady', hoursWorked: 120 },
        { name: 'Takudzwa', hoursWorked: 95 },
        { name: 'Munashe', hoursWorked: 110 },
    ];

    // Sample feedback data
    const feedbackData = [
        { intern: 'Pady', comment: 'Great team player!' },
        { intern: 'Takudzwa', comment: 'Needs improvement in time management.' },
        { intern: 'Munashe', comment: 'Excellent problem-solving skills.' },
    ];

    // Sample employability tracking data
    const employabilityData = [
        { intern: 'Pady', skills: ['JavaScript', 'Teamwork', 'Adaptability'] },
        { intern: 'Takudzwa', skills: ['Python', 'Communication'] },
        { intern: 'Munashe', skills: ['C++', 'Critical Thinking'] },
    ];

    const handleToggleInterns = () => {
        setShowInterns(!showInterns);
        setShowFeedback(false);
        setShowEmployability(false);
    };

    const handleToggleFeedback = () => {
        setShowFeedback(!showFeedback);
        setShowInterns(false);
        setShowEmployability(false);
    };

    const handleToggleEmployability = () => {
        setShowEmployability(!showEmployability);
        setShowInterns(false);
        setShowFeedback(false);
    };

    return (
        <div className="employer-portal">
            <h2>Employer Portal</h2>
            <button className="primary" onClick={handleToggleInterns}>
                {showInterns ? 'Hide Interns' : 'Show Interns'}
            </button>
            <button className="primary" onClick={handleToggleFeedback}>
                {showFeedback ? 'Hide Feedback' : 'Show Feedback and Comments'}
            </button>
            <button className="primary" onClick={handleToggleEmployability}>
                {showEmployability ? 'Hide Employability Tracking' : 'Show Employability Tracking'}
            </button>

            {showInterns && (
                <div className="interns-list">
                    <h3>Interns and Hours Worked</h3>
                    <ul>
                        {internsData.map((intern, index) => (
                            <li key={index}>
                                {intern.name}: {intern.hoursWorked} hours
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {showFeedback && (
                <div className="feedback-section">
                    <h3>Feedback and Comments</h3>
                    <ul>
                        {feedbackData.map((feedback, index) => (
                            <li key={index}>
                                {feedback.intern}: {feedback.comment}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {showEmployability && (
                <div className="employability-section">
                    <h3>Employability Tracking</h3>
                    <ul>
                        {employabilityData.map((tracking, index) => (
                            <li key={index}>
                                {tracking.intern}: Skills - {tracking.skills.join(', ')}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default EmployerPortal;