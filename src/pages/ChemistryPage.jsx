// src/pages/ChemistryPage.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './SciencesPage.css';
import { userContext } from '../App';

function ChemistryPage() {

    const user = useContext(userContext)

    const navigate = useNavigate();

    const handleLevelClick = (level) => {
        navigate(`/chemistry-level${level}`);
    };

    return (
        <div className="sciences-container">
            <h1 className="sciences-title">Chemistry Levels</h1>
            <div className="level-buttons">
                {[...Array(2)].map((_, i) => (
                    <button
                        key={i}
                        className="level-button"
                        onClick={user && user.chemistrylevel >= i ? () => handleLevelClick(i + 1): () =>{alert("Complete the previous levels before reaching this one")}}
                    >
                        Lvl {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ChemistryPage;
