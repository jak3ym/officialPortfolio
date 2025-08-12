import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // Backend
    {name: "Python", level: 100, category: "backend"},
    {name: "C", level: 100, category: "backend"},
    {name: "C++", level: 100, category: "backend"},
    {name: "Django", level: 90, category: "backend"},
    {name: "Java", level: 75, category: "backend"},
    {name: "Spring Boot", level: 60, category: "backend"},
    {name: "Verilog", level: 70, category: "backend"},
    {name: "MATLAB", level: 100, category: "backend"},
    // Frontend
    {name: "React", level: 70, category: "frontend"},
    {name: "HTML/CSS", level: 70, category: "frontend"},
    {name: "JavaScript/TypeScript", level: 70, category: "frontend"},
    // DevOps & Cloud
    {name: "Jenkins", level: 100, category: "DevOps/cloud"},
    {name: "Github Actions", level: 100, category: "CICD/cloud"},
    {name: "AWS (EC2, S3, RDS, AMI, etc.)", level: 100, category: "devops/cloud"},
    {name: "Linux", level: 80, category: "devops/cloud"},
    {name: "Docker", level: 90, category: "devops/cloud"},
    {name: "Terraform", level: 60, category: "devops/cloud"},
    // Database & Messaging
    {name: "MongoDB", level: 80, category: "database"},
    {name: "ActiveMQ", level: 50, category: "database"},
    {name: "Snowflake", level: 75, category: "database"},
    // Development Tools
    {name: "Postman", level: 75, category: "sw tools"},
    {name: "VS Code", level: 100, category: "sw tools"},
    {name: "Wireshark", level: 80, category: "sw tools"},
    {name: "SVN", level: 60, category: "sw tools"},
    {name: "Selenium", level: 50, category: "sw tools"},
    // HW Tools
    {name: "Altium Designer", level: 100, category: "hw tools"},
    {name: "CMW", level: 100, category: "hw tools"},
    {name: "FreeRTOS", level: 80, category: "hw tools"},
    {name: "Spectrum Analyzers", level: 100, category: "hw tools"},
    {name: "Oscilloscopes", level: 100, category: "hw tools"},
    {name: "Signal Generators", level: 85, category: "hw tools"},
    {name: "Multimeters", level: 100, category: "hw tools"},
    {name: "Network Analyzers", level: 75, category: "hw tools"},
    {name: "CST Studio", level: 75, category: "hw tools"},
    {name: "SolidWorks", level: 65, category: "hw tools"},
    {name: "Simulink", level: 50, category: "hw tools"},
    {name: "LTSpice", level: 80, category: "hw tools"},
    {name: "CAN", level: 100, category: "hw tools"},
    {name: "SPI", level: 90, category: "hw tools"},
    {name: "I2C", level: 70, category: "hw tools"},
    {name: "UART", level: 90, category: "hw tools"},
    // Project Management
    {name: "Jira", level: 100, category: "project management"},
    {name: "Confluence", level: 100, category: "project management"},
    {name: "Jama", level: 100, category: "project management"},
];

const categories = ["all", "backend", "frontend", "devops/cloud", "database", "sw tools", "hw tools", "project management"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const formatCategoryName = (category) => {
        const categoryMap = {
            "devops/cloud": "DevOps/Cloud",
            "sw tools": "SW Tools", 
            "hw tools": "HW Tools",
            "project management": "Project Management"
        };
        return categoryMap[category] || category.charAt(0).toUpperCase() + category.slice(1);
    };

    const getSkillLevel = (level) => {
        return "Advanced";
        // if (level >= 80) return "Advanced";
        // else if (level >= 66) return "Intermediate-Advanced";
        // else if (level >= 33) return "Intermediate";
        // else return "Beginner";
    };

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory
);

    // Sort skills by level (highest to lowest) when viewing "all" category
    const sortedSkills = activeCategory === "all" 
        ? [...filteredSkills].sort((a, b) => b.level - a.level)
        : filteredSkills;
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key}
                            onClick={() => setActiveCategory(category)} 
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {formatCategoryName(category)}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedSkills.map((skill, key) => (
                        <div 
                            key={key} 
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >    
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                    style={{ width: skill.level + "%" }}
                                />
                                </div>
                                <div className="text-right mt-1">
                                    <span className="text-sm text-muted-foreground">
                                        {getSkillLevel(skill.level)}
                                    </span>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};