import projects from "../constants/Projects.ts";
import '../styles/Projects.css';
import { useState } from "react";

function Projects() {
    const [activeProject, setActiveProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const projectsReversed = [...projects].reverse();

    const openProject = (project) => {
        setActiveProject(project);
        setCurrentImageIndex(0);
    };

    const closeProject = () => {
        setActiveProject(null);
    };

    const nextImage = () => {
        if (activeProject !== null) {
            setCurrentImageIndex((prev) =>
                prev + 1 >= activeProject.images.length ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (activeProject !== null) {
            setCurrentImageIndex((prev) =>
                prev - 1 < 0 ? activeProject.images.length - 1 : prev - 1
            );
        }
    };

    const currentProject = activeProject;

    return (
        <div className="projects-page">
            <h1>A - J</h1>
            <div className="projects-grid">
                {projectsReversed?.map((project, projectIndex) => (
                    <div
                        key={projectIndex}
                        className="project-preview"
                        onClick={() => openProject(project)}
                    >
                        <img
                            src={project.images[0].src}
                            alt={project.title}
                            className="project-thumbnail"
                        />
                        <h1>{project.title}</h1>
                    </div>
                ))}
            </div>

            {activeProject !== null && currentProject && (
                <div className="modal-overlay" onClick={closeProject}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeProject}>✕</button>

                        <div className="modal-layout">
                            <div className="carousel-section">
                                <img
                                    src={currentProject.images[currentImageIndex].src}
                                    alt={`${currentProject.title} - ${currentImageIndex + 1}`}
                                    className="carousel-image"
                                />

                                {currentProject.images.length > 1 && (
                                    <>
                                        <button className="carousel-prev" onClick={prevImage}>‹</button>
                                        <button className="carousel-next" onClick={nextImage}>›</button>
                                    </>
                                )}

                                <div className="thumbnail-strip">
                                    {currentProject.images.map((image, idx) => (
                                        <img
                                            key={idx}
                                            src={image.src}
                                            alt={`Thumbnail ${idx + 1}`}
                                            className={`thumbnail ${idx === currentImageIndex ? 'active' : ''}`}
                                            onClick={() => setCurrentImageIndex(idx)}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="description-section">
                                <h2>{currentProject.title}</h2>
                                <p>{currentProject.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;