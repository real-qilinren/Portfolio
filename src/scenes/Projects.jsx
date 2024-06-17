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

const Project = ({ title, subtitle}) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">
                    {subtitle}
                </p>
            </div>
            <img src={require(`../assets/${projectTitle}.png`)} alt={projectTitle} />
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="pt-48 pb-48">
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
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* ROW 1 */}
                    <div
                        className="flex justify-center text-center items-center p-10 bg-red
                            max-w-[591px] max-h-[591px] text-2xl font-playfair font-semibold"
                    >
                        Website Development
                    </div>
                    <Project title="Project 1" subtitle="ProjectX - A MERN Stack reponsive website with Dark/Light mode,
                    and the features that allowing users to have real-time chat (Socket.IO),
                    public posts with auto-generation of post description (Google Vision API)."/>
                    <Project title="Project 2" subtitle="CineChat - A movie website (SpringBoot + SQLite + React)
                    which allowing users to get personzlized movie recommendations by chatting (ChatGPT API)
                    and movie information from TMDB API.
                    The website also has the feature such as auto-generating blog tags based on the blog content by using ChatGPT API."/>

                    {/* ROW 2 */}
                    <Project title="Project 3" subtitle="SmartFit - A fitness plan website (SpringBoot + MySQL + React) allows users
                    to get personalized fitness plan based on their preferences by using ChatGPT API,
                    sharing their thoughts of the fitness plans, and tracking their fitness progress."/>
                    <Project title="Project 4" subtitle="An iOS app (SwiftUI + Firebase/FireStore) that allows parents
                    to assign chores for their children and give their children rewards based on their progress."/>
                    <Project title="Project 5" subtitle="A simple ballboy game by using JavaFx and Model-View seperation.
                    The highlights of this project is the use of design patterns such as Factory, Strategy, Facade, etc.
                    and the practice of design principles such as High-cohesion and low coupling."/>

                    {/* ROW 3 */}
                    <Project title="Project 6" subtitle="MeetUp - An Android app (Java + Firebase/Firestore) that
                    allowing users to create/join events, also to have realtime chat with other users by using FireStore. "/>
                    <Project title="Project 7" subtitle="USE FOR SPACE OCCUPATION ONLY"/>
                    <div
                        className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[591px] max-h-[591px] text-2xl font-playfair font-semibold"
                    >
                        Mobile Development
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;