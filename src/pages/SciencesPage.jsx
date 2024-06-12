// src/pages/SciencesPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SciencesPage.css';

function SciencesPage() {
    const navigate = useNavigate();

    const handleSubjectClick = (subject) => {
        navigate(`/${subject}`);
    };

    return (
        <div className="sciences-container">
            <h1 className="sciences-title">Science Subjects</h1>
            <div className="subject-buttons">
                <button
                    className="subject-button"
                    onClick={() => handleSubjectClick('biology')}
                >
                    Biology
                </button>
                <button
                    className="subject-button"
                    onClick={() => handleSubjectClick('physics')}
                >
                    Physics
                </button>
                <button
                    className="subject-button"
                    onClick={() => handleSubjectClick('chemistry')}
                >
                    Chemistry
                </button>
            </div>
        </div>
    );
}

export default SciencesPage;
