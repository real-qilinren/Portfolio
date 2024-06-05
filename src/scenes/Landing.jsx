import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
    const isNonMobile = useMediaQuery('(min-width: 1060px)');

    return (
        <section id="home" className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10">
            {/* Image Section */}
            <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
                {isNonMobile ? (
                    <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:rounded-lg
                            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]">
                        <img
                            alt="profile"
                            className="hover:filter hover:brightness-50 hover:contrast-200 hover:grayscale hover:sepia transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-lg"
                            src={require('../assets/self.jpg')}
                        />
                    </div>
                ) : (
                    <div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Landing;
