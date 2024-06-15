import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="pt-48">
            {/* Headings */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: 50},
                    visible: {opacity: 1, x: 0},
                }}
                className="flex justify-end w-full"
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-yellow">CONTACT ME</span> TO GET STARTED
                    </p>
                    <div className="flex md:justify-end my-5">
                        <LineGradient width="w-1/2"/>
                    </div>
                </div>
            </motion.div>

            {/* Image */}
            <div className="md:flex md:justify-between gap-16 mt-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0},
                    }}
                    className="basis-1/2 flex justify-center"
                >
                    <img src={require('../assets/contact-image.jpeg')} alt="contact"/>
                </motion.div>
            </div>

        </section>
)
}

export default Contact;