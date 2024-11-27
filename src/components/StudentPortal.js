import React, { useState } from 'react';

const StudentPortal = () => {
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [workedHours, setWorkedHours] = useState('');
    const [previousHours, setPreviousHours] = useState([]);
    const [projects, setProjects] = useState([
        { name: 'Project A', reviews: ['Excellent work!', 'Needs improvement.'] },
        { name: 'Project B', reviews: ['Great presentation!', 'Very informative.'] },
    ]);
    const [feedback, setFeedback] = useState('');
    const [submittedFeedback, setSubmittedFeedback] = useState([]);
    const [newProjectName, setNewProjectName] = useState('');
    const [newProjectReviews, setNewProjectReviews] = useState('');
    const [showProgress, setShowProgress] = useState(false); // State for toggling progress visibility
    const [showPreviousHours, setShowPreviousHours] = useState(false); // State for toggling previous hours visibility

    const students = [
        { name: 'Pady', year: 'Fourth Year', major: 'Software Engineering Intern' },
        { name: 'Ngaiso T', year: 'Third Year', major: 'Hardware Student' },
        { name: 'Munashe', year: 'First Year', major: 'Social Behaviour Student' },
    ];

    const handleSelectStudent = (student) => {
        setSelectedStudent(student);
        setPreviousHours([]); // Clear hours when selecting a new student
    };

    const handleAddHours = () => {
        if (workedHours) {
            setPreviousHours((prevHours) => [...prevHours, workedHours]); // Append new hours to previous hours
            setWorkedHours(''); // Clear the input field after adding
        }
    };

    const handleSubmitFeedback = (event) => {
        event.preventDefault();
        if (feedback) {
            setSubmittedFeedback([...submittedFeedback, feedback]);
            setFeedback('');
        }
    };

    const addProject = (newProject) => {
        setProjects((prevProjects) => [...prevProjects, newProject]);
    };

    const handleAddProject = (event) => {
        event.preventDefault();
        if (newProjectName && newProjectReviews) {
            const reviewsArray = newProjectReviews.split(',').map(review => review.trim());
            addProject({ name: newProjectName, reviews: reviewsArray });
            setNewProjectName('');
            setNewProjectReviews('');
        }
    };

    const toggleProgressVisibility = () => {
        setShowProgress(!showProgress); // Toggle the visibility state
    };

    const togglePreviousHoursVisibility = () => {
        setShowPreviousHours(!showPreviousHours); // Toggle previous hours visibility state
    };

    return (
        <div className="student-portal">
            <div className="sidebar">
                <h2>Student Profiles</h2>
                {students.map((student, index) => (
                    <div key={index} className="student-profile" onClick={() => handleSelectStudent(student)}>
                        <img src={`https://via.placeholder.com/100`} alt={`${student.name}`} />
                        <h4>{student.name}</h4>
                        <p>{student.year}, {student.major}</p>
                    </div>
                ))}
            </div>

            <div className="content">
                {selectedStudent ? (
                    <>
                        <h2>{selectedStudent.name}'s Portal</h2>
                        <button onClick={toggleProgressVisibility}>
                            {showProgress ? 'Hide Progress' : 'View Student Progress'}
                        </button>
                        {showProgress && (
                            <div className="progress-section">
                                <h3>Progress Details</h3>
                                {/* Replace with actual progress details */}
                                <p>Progress: 85%</p>
                                <p>Comments: Great improvement!</p>
                            </div>
                        )}

                        <button onClick={togglePreviousHoursVisibility}>
                            {showPreviousHours ? 'Hide Previous Hours' : 'Show Previous Hours'}
                        </button>
                        {showPreviousHours && (
                            <div className="hours-section">
                                <h3>Log Hours Worked</h3>
                                <input
                                    type="number"
                                    value={workedHours}
                                    onChange={(e) => setWorkedHours(e.target.value)}
                                    placeholder="Enter hours"
                                />
                                <button onClick={handleAddHours}>Submit Hours</button>
                                <h4>Previous Hours Worked:</h4>
                                <ul>
                                    {previousHours.map((hours, index) => (
                                        <li key={index}>{hours} hours</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="projects-section">
                            <h3>Projects & Reviews</h3>
                            <ul>
                                {projects.map((project, index) => (
                                    <li key={index}>
                                        <h4>{project.name}</h4>
                                        <p>Reviews:</p>
                                        <ul>
                                            {project.reviews.map((review, reviewIndex) => (
                                                <li key={reviewIndex}>{review}</li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="add-project-section">
                            <h3>Add New Project</h3>
                            <form onSubmit={handleAddProject}>
                                <input
                                    type="text"
                                    value={newProjectName}
                                    onChange={(e) => setNewProjectName(e.target.value)}
                                    placeholder="Project Name"
                                    required
                                />
                                <input
                                    type="text"
                                    value={newProjectReviews}
                                    onChange={(e) => setNewProjectReviews(e.target.value)}
                                    placeholder="Enter reviews separated by commas"
                                    required
                                />
                                <button type="submit">Add Project</button>
                            </form>
                        </div>

                        <div className="feedback-section">
                            <h3>Submit Feedback</h3>
                            <form onSubmit={handleSubmitFeedback}>
                                <textarea
                                    value={feedback}
                                    onChange={(e) => setFeedback(e.target.value)}
                                    rows="4"
                                    placeholder="Write your feedback here..."
                                    required
                                ></textarea>
                                <button type="submit">Submit Feedback</button>
                            </form>
                            <h4>Submitted Feedback:</h4>
                            <ul>
                                {submittedFeedback.map((fb, index) => (
                                    <li key={index}>{fb}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                ) : (
                    <h2>Please select a student profile</h2>
                )}
            </div>
        </div>
    );
};

export default StudentPortal; 