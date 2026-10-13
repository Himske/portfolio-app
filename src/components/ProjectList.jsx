import './ProjectList.css'
import Project from './Project'
import { useEffect, useState } from 'react'

export default function ProjectList() {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(new URL('../data/data.json', import.meta.url))
            .then((response) => {
                if (!response.ok) throw new Error('Failed to load projects')
                return response.json()
            })
            .then((json) => setData(json))
            .catch((fetchError) => setError(fetchError.message))
    }, [])

    if (error) {
        return (
            <section className="project-list">
                <div className="project-list__inner">
                    <p className="project-list__status" role="alert">{error}</p>
                </div>
            </section>
        )
    }
    if (!data) {
        return (
            <section className="project-list">
                <div className="project-list__inner">
                    <p className="project-list__status">Loading...</p>
                </div>
            </section>
        )
    }

    return (
        <section className="project-list">
            <div className="project-list__inner">
                <header className="project-list__heading">
                    <h2>Projects</h2>
                    <p>Most of the projects I have been working on in my professional career I can't show of here. So this is just a sample of some projects that I have on GitHub. For information on my other projects, check my CV.</p>
                </header>
                <div className="project-list__grid">
                    {data.projects.map((project) => (
                        <Project key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
