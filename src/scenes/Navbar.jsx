import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
            className={`${selectedPage === lowerCasePage ? 'text-yellow' : 'text-white'} hover:text-yellow transition duration-500`}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isNonMobile = useMediaQuery('(min-width: 768px)');
    const navBarBackground = isTopOfPage ? "" : "bg-red";

    return (
        <nav className={`${navBarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">
                    QR
                </h4>

                {/* Desktop Navbar */}
                {isNonMobile ? (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                        <Link page={'Home'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page={'Skills'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page={'Projects'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page={'Contact'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    </div>
                ) : (
                    <button className="rounded-full bg-red p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <img alt="menu-icon" src={require('../assets/menu-icon.svg').default}/>
                    </button>
                )}

                {/* Mobile Navbar */}
                {!isNonMobile && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                        {/* Close Icon */}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <img alt="close-icon" src={require('../assets/close-icon.svg')}/>
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                            <Link page={'Home'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page={'Skills'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page={'Projects'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page={'Contact'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;