import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SupervisorPortal = () => {
    const [showProgress, setShowProgress] = useState(false);
    const [showAssessmentTools, setShowAssessmentTools] = useState(false);
    const [showCommentsForm, setShowCommentsForm] = useState(false);
    const [comments, setComments] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // State for success message

    // Sample data for student progress
    const studentData = {
        name: 'Pady',
        marks: {
            Capstone: 85,
            InnovationContribution: 70,
            ComputerSkills: 78,
        },
        completedTasks: [
            'Assignment 1 - Networking Training',
            'Project - Software',
            'Company contribution - Web Development',
        ],
    };

    // Data for the chart
    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Marks Over Time',
                data: [80, 85, 90, 87], // Sample data
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const handleToggleProgress = () => {
        setShowProgress(!showProgress); // Toggle the progress section visibility
    };

    const handleViewAssessmentTools = () => {
        setShowAssessmentTools(!showAssessmentTools); // Toggle the assessment tools section
    };

    const handleToggleCommentsForm = () => {
        setShowCommentsForm(!showCommentsForm); // Toggle the comments form
    };

    const handleCommentsChange = (event) => {
        setComments(event.target.value); // Update comments state
    };

    const handleSubmitComments = (event) => {
        event.preventDefault();
        // Handle comment submission 
        console.log("Comments submitted:", comments);
        setSuccessMessage('Comment received successfully: Thank you!'); // Set success message
        setComments(''); // Clear the comments field after submission
        setTimeout(() => setSuccessMessage(''), 3000); // Clear message after 3 seconds
    };

    return (
        <div className="supervisor-portal">
            <h2>Supervisor Portal</h2>
            <button className="primary" onClick={handleToggleProgress}>
                {showProgress ? 'Hide Student Progress' : 'View Student Progress'}
            </button>
            <button className="primary" onClick={handleViewAssessmentTools}>
                {showAssessmentTools ? 'Hide Assessment Tools' : 'Show Assessment Tools'}
            </button>
            <button className="primary" onClick={handleToggleCommentsForm}>
                {showCommentsForm ? 'Hide Comments Form' : 'Add Comments/Notes'}
            </button>

            {showProgress && (
                <div className="progress-section">
                    <h3>Progress for {studentData.name}</h3>
                    <div className="marks">
                        <h4>Marks</h4>
                        <ul>
                            {Object.entries(studentData.marks).map(([subject, mark]) => (
                                <li key={subject}>
                                    {subject.charAt(0).toUpperCase() + subject.slice(1)}: {mark}%
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="completed-tasks">
                        <h4>Completed Tasks</h4>
                        <ul>
                            {studentData.completedTasks.map((task, index) => (
                                <li key={index}>{task}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="graph-placeholder">
                        <h4>Progress Graph</h4>
                        <Line data={data} />
                    </div>
                </div>
            )}

            {showAssessmentTools && (
                <div className="assessment-tools">
                    <h3>Assessment Tools</h3>
                    <ul>
                        <li>Tool 1: Quiz Maker</li>
                        <li>Tool 2: Survey Creator</li>
                        <li>Tool 3: Grade Calculator</li>
                        <li>Tool 4: Feedback Form</li>
                    </ul>
                </div>
            )}

            {showCommentsForm && (
                <div className="comments-form">
                    <h3>Comments/Notes for {studentData.name}</h3>
                    <form onSubmit={handleSubmitComments}>
                        <textarea
                            value={comments}
                            onChange={handleCommentsChange}
                            rows="4"
                            placeholder="Write your comments here..."
                            required
                        ></textarea>
                        <button type="submit">Submit Comments</button>
                    </form>
                    {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}
                </div>
            )}
        </div>
    );
};

export default SupervisorPortal;