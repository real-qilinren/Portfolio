import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, githubLink, demoLink }) => {
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div variants={projectVariant} className="flex flex-col md:flex-row w-full mb-10">
            <div className="w-full md:w-2/3">
                <img
                    src={require(`../assets/${projectTitle}.png`)}
                    alt={projectTitle}
                    className="object-cover w-full h-full rounded-lg"
                    style={{ aspectRatio: '16/9' }}
                />
            </div>
            <div className="flex flex-col justify-center items-start p-8 w-full md:w-1/3 bg-gray-800 text-white rounded-b-lg md:rounded-l-none md:rounded-r-lg">
                <p className="text-2xl font-playfair mb-4">{title}</p>
                <p className="text-gray-300 mb-4">{subtitle}</p>
                <div className="flex space-x-4">
                    {githubLink && (
                        <a
                            className="hover:opacity-50 transition duration-500"
                            href={githubLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={require('../assets/github.png')}
                                alt="github"
                                style={{maxWidth: '30px', maxHeight: '30px'}}
                            />
                        </a>
                    )}
                    {demoLink && (
                        <a
                            className="hover:opacity-50 transition duration-500"
                            href={demoLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="pt-24 pb-24">
            {/* HEADINGS */}
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    Here are some of the projects that I have worked on. Move your mouse cursor on the images to see the details.
                    More details and the demo video links will be added soon :)
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className="block">
                <motion.div
                    className="flex flex-col"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Projects */}
                    <Project
                        title="LifeScribe"
                        subtitle="A MERN Stack responsive website with Dark/Light mode, and the features that allowing users to have real-time chat (Socket.IO), public posts with auto-generation of post description (Google Vision API)."
                        githubLink="https://github.com/real-qilinren/LifeScribe"
                    />
                    <Project
                        title="CineChat"
                        subtitle="A movie website (SpringBoot + SQLite + React) which allowing users to get personalized movie recommendations by chatting (ChatGPT API) and movie information from TMDB API. The website also has the feature such as auto-generating blog tags based on the blog content by using ChatGPT API."
                    />
                    <Project
                        title="SmartFit"
                        subtitle="A fitness plan website (SpringBoot + MySQL + React) allows users to get personalized fitness plan based on their preferences by using ChatGPT API, sharing their thoughts of the fitness plans, and tracking their fitness progress."
                    />
                    <Project
                        title="OnTaskAchiever"
                        subtitle="An iOS app (SwiftUI + Firebase/FireStore) that allows parents to assign chores for their children and give their children rewards based on their progress."
                    />
                    <Project
                        title="BallBoy"
                        subtitle="A simple ballboy game by using JavaFx and Model-View separation. The highlights of this project is the use of design patterns such as Factory, Strategy, Facade, etc. and the practice of design principles such as High-cohesion and low coupling."
                    />
                    <Project
                        title="MeetUp"
                        subtitle="An Android app (Java + Firebase/Firestore) that allowing users to create/join events, also to have realtime chat with other users by using FireStore."
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
