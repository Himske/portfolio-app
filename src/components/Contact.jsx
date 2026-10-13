import './Contact.css'

export default function Contact() {
    return (
        <section className="contact-section">
            <div className="contact">
                <div>
                    <h2>Let’s connect</h2>
                    <p>
                        Available for opportunities involving data engineering, backend
                        development, integrations and automation.
                    </p>
                </div>

                <div className="contact-links">
                    <a href="mailto:cfm.nilsson@outlook.com">Email</a>
                    <a href="https://www.linkedin.com/in/fredrik-nilsson-68503751/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}