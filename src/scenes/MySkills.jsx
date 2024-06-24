import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
    const isNonMobile = useMediaQuery('(min-width: 1060px)');

    return (
        <section id="skills" className="pt-10 pb-24">
            {/* Header and Image Section */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0},
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-red">SKILLS</span>
                    </p>

                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                        During uni, I’ve learned key skills in programming, and had opportunities to work on many projects with people from diverse backgrounds. I've also developed essential soft skills like teamwork, time management, and multitasking. I'm eager to apply my theoretical knowledge to real-world challenges and I’m well-prepared to kick-start my career. Moreover, I’ve started working on side projects to expand my skill set and stay current in my spare time.
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isNonMobile ? (
                        <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                        before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
                            <img
                                alt="skills"
                                className="z-10"
                                src={require('../assets/skills-image.png')}
                            />
                        </div>
                    ) : (
                        <img
                            alt="skills"
                            className="z-10"
                            src={require('../assets/skills-image.png')}
                        />
                    )}
                </div>
            </div>

            {/* Skills Section */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* Tech Skills */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0},
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Tech Skills</p>
                        </div>

                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]"/>
                    </div>
                    <p className="mt-5">
                        - Java/Python/C/JS/SQL <br/>
                        - React/Node.js/Spring Boot <br/>
                        - Git/Jira/GitHub/Bitbucket<br/>
                        - Docker/Jenkins<br/>
                        - MySQL/SQLite/FireStore/MongoDB<br/>
                    </p>
                </motion.div>

                {/* Soft Skills */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay:0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0},
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">02</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Soft Skills</p>
                        </div>

                        <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]"/>
                    </div>
                    <p className="mt-5">
                        - Teamwork/Collaboration/Strong relationship building <br/>
                        - Strong self-management skills<br/>
                        - Strong readability and problem-solving skills<br/>
                    </p>
                </motion.div>

                {/* Experience */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay:0.4, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0},
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">03</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Experience</p>
                        </div>

                        <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]"/>
                    </div>
                    <p className="mt-5">
                        - Frontend Developer Intern <br/>
                        - Freelance Housing consultant
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default MySkills;
