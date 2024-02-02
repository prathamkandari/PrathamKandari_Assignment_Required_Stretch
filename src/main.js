import React, { useState, useEffect } from 'react';
import './style.css';

const Main = () => {
    const [userData, setUserData] = useState([]);
    const [selectedField, setSelectedField] = useState(''); // State for selected field of interest
    const [selectedTechStack, setSelectedTechStack] = useState(''); // State for selected tech stack
    const [searchKeyword, setSearchKeyword] = useState(''); // State for the search keyword

    const fetchData = () => {
        fetch("http://localhost:5000/api/student/")
            .then((response) => response.json())
            .then((data) => {
                let pratham = data.myData || [];
                setUserData(pratham);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Filter users based on selected field of interest, tech stack, and search keyword
    const filteredUsers = userData.filter((user) => {
        // Check if user matches the selected field
        const fieldCondition =
            selectedField === '' || user.fieldOfInterest.includes(selectedField);

        // Check if user matches the selected tech stack (case-insensitive)
        const techStackCondition =
            selectedTechStack === '' ||
            user.techStack.some(
                (tech) => tech.toLowerCase() === selectedTechStack.toLowerCase()
            );

        // Check if any user field includes the search keyword (case-insensitive)
        const keywordCondition =
            searchKeyword === '' ||
            Object.values(user).some(
                (value) =>
                    typeof value === 'string' &&
                    value.toLowerCase().includes(searchKeyword.toLowerCase())
            );

        // Return true if all conditions are met
        return fieldCondition && techStackCondition && keywordCondition;
    });

    return (
        <div>
            {/* Header */}
            <div className="header">
                {/* Home Logo Link */}
                <div className="home-logo">
                    <a href="/organization-link">Home Logo Link</a>
                </div>

                {/* Buttons on the right side */}
                <div className="header-buttons">
                    <button>Browse Students</button>
                    <button>Edit Profile</button>
                    <button>Log out</button>
                </div>
            </div>

            {/* Next Row with Dropdowns, Input, and Button */}
            <div className="next-row" style={{ padding: '20px' }}>
                {/* Dropdowns */}
                <div className="dropdown">
                    <label htmlFor="fieldOfInterest">Field of Interest:</label>
                    <select
                        id="fieldOfInterest"
                        value={selectedField}
                        onChange={(e) => setSelectedField(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="AI">AWS Cloud</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div className="dropdown">
                    <label htmlFor="techStack">Tech Stack:</label>
                    <select
                        id="techStack"
                        value={selectedTechStack}
                        onChange={(e) => setSelectedTechStack(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="Docker">Docker</option>
                        <option value="Google Cloud">Google Cloud</option>
                        <option value="Microsoft Azure">Microsoft Azure</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                {/* Input Field and Search Button */}
                <div className="keyword-search" style={{ marginLeft: '15%' }}>
                    <label htmlFor="keyword">Keyword Search:</label>
                    <input
                        type="text"
                        id="keyword"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                    <button>Search</button>
                </div>
            </div>

            {/* Render user sections based on filtered data */}
            {filteredUsers.map((user) => (
                <div key={user._id} className="user-section" style={{ border: '1px solid' }}>
                    <div className="user-details">
                        <img src={user.gravatar} alt="User" style={{ width: '8%' }} />
                        <div className="user-info">
                            <div>
                                <h3>{user.name}</h3>
                                <p>{user.bio}</p>
                                <p>Tech Stack: {user.techStack.join(', ')}</p>
                            </div>
                            <div className="user-buttons">
                                <button>Delete</button>
                                <button>DM Student</button>
                                <button>View Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Main;
