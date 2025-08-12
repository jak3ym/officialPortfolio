import { ExternalLink } from "lucide-react";
import { Github } from "lucide-react";
import { ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "CheckMates",
        description: " A shared to-do list app for long distance relationships using Lovable/OpenAI.",
        image: "/projects/CheckMatesAppLanding.png",
        tags: ["Lovable", "OpenAI", "Tailwind CSS", "TypeScript", "PLpgSQL", "React"],
        demoUrl: "https://distance-duo-tasks.lovable.app/",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Wireless Positioning System (RFID) for a balloon catheter to treat hemorrhages",
        description: "Project utilizing SW/HW/Mech skills",
        image: "/projects/aorta.png",
        tags: ["MATLAB", "CST Studio", "SolidWorks"],
        demoUrl: "https://www.youtube.com/watch?v=VJ3kcuqZVlg",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "TinyML CNN deployment in an embedded memory-constrained environment",
        description: "Embedded AI/ML Project utilizing CNN",
        image: "/projects/cnn.png",
        tags: ["ML/AI", "Python", "Docker", "TensorFlow"],
        demoUrl: "#",
        githubUrl: "https://github.com/jak3ym/tinyml_sim",
    },
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and creativity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                                {project.title === "CheckMates" && <br />}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                                                        {project.demoUrl !== "#" && (
                                                                            <a  href={project.demoUrl}
                                                                                    target="_blank"
                                                                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                                            >
                                                                                    <ExternalLink size={20} />
                                                                            </a>
                                                                        )}
                                                                        {project.githubUrl !== "#" && (
                                                                            <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                                                <Github size={20}/>
                                                                            </a>
                                                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/jak3ym"
                        >

                        Check My Github <ArrowRight size={16} />
                    </a>
            </div>
        </div>
    </section>
};
