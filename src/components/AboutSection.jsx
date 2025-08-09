import { Terminal } from "lucide-react";
import { Cpu } from "lucide-react";
import { Wifi } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Intro</h3>

                    <p className="text-muted-foreground">
                        Passionate Embedded Software and Electronics Engineer in MedTech with 5+ years of product development experience, with expertise embedded software and hardware design, and integrating wireless technology.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button"> 
                            Get In Touch
                        </a>

                        <a href="/JakeResume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download Resume
                        </a>

                    </div>
                </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Terminal className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Embedded Software</h4>
                                    <p className="text-muted-foreground">
                                        Developing software for embedded systems, focusing on C, C++, and Python script automation. Hands-on experience
                                        deploying over AWS and managing CI/CD pipelines using Jenkins for streamlined software delivery.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Cpu className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Hardware Design</h4>
                                    <p className="text-muted-foreground">
                                        Product Lead in designing and prototyping hardware systems (schematic capture and PCB layout using Altium Designer), 
                                        and liaising with contract manufacturers from design to global mass production.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Wifi className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Wireless Technology</h4>
                                    <p className="text-muted-foreground">
                                        Integrating wireless technologies such as Bluetooth (BLE), Cellular (2G, 3G, 4G), and UWB into hardware, and directing wireless and EMC certifications.
                                    </p>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
        </div>
    </section>
};