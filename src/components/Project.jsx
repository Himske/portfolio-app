import './Project.css'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const imageAssets = import.meta.glob('../assets/**/*.{png,jpg,jpeg,svg}', {
    eager: true,
    query: '?url',
    import: 'default',
})

export default function Project({ project }) {
    const images = project.images
        .map((filename) =>
            Object.entries(imageAssets).find(([path]) => path.endsWith(`/${filename}`))?.[1]
        )
        .filter(Boolean)
    return (
        <article className="project-card">
            <div className="project-card__media">
                {images.length > 0 && (
                    <Carousel
                        className="project-carousel"
                        showThumbs={false}
                        infiniteLoop
                        autoPlay
                        interval={3000}
                        stopOnHover
                        swipeable
                        emulateTouch
                        showStatus={false}
                    >
                        {images.map((src, index) => (
                            <div key={src}>
                                <img
                                    src={src}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                />
                            </div>
                        ))}
                    </Carousel>
                )}
            </div>
            <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__technologies">
                    {project.technologies.map((technology, index) => (
                        <span key={technology}>
                            {index > 0 && (
                                <span className="project-card__separator" aria-hidden="true"> // </span>
                            )}
                            {technology}
                        </span>
                    ))}
                </p>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__actions">
                    <a className="project-card__link" href={project.github}>View Source</a>
                    {project.live !== '' && (
                        <a className="project-card__link" href={project.live}>View Website</a>
                    )}
                </div>
            </div>
        </article>
    )
}