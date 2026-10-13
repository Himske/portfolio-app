import './Profile.css'

export default function Profile() {
    return (
        <div className="profile">
            <div className="profile-copy">
                <p className="subtitle">
                    Data Engineering · Backend Development · Automation
                </p>
                <div className="profile-title-row">
                    <h1>Fredrik Nilsson</h1>
                    <img className="profile-img" src="src/assets/Fredrik.jpg" alt="Fredrik Nilsson" />
                </div>
                <h2>Data Engineer / Backend Developer</h2>

                <p className="profile-summary">
                    Software engineer with more than 20 years of experience in databases,
                    Python, integrations, backend development, test automation, and
                    enterprise software solutions.
                </p>
                <div className="button-row">
                    <a className="button button-primary" href="https://himske.github.io/CV/" target="_blank" rel="noopener noreferrer">Web CV</a>
                    <a className="button button-secondary" href="https://www.linkedin.com/in/fredrik-nilsson-68503751/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a className="button button-secondary" href="https://github.com/Himske" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
            <aside className="profile-card">
                <p><strong>Based in:</strong> Helsingborg, Sweden</p>
                <p><strong>Focus:</strong> Data platforms, backend systems, integrations</p>
                <p><strong>Core technologies:</strong> Python, SQL, PL/SQL, Oracle, Google Cloud</p>
            </aside>
        </div>
    )
}