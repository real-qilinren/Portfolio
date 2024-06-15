

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/real-qilin-ren"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="linkedin-link" src={require('../assets/linkedin.png')}/>
            </a>

            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
                className="hover:opacity-50 transition duration-500"
            >
                <img alt="facebook-link" src={require('../assets/facebook.png')}/>
            </a>

            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
                className="hover:opacity-50 transition duration-500"
            >
                <img alt="ins-link" src={require('../assets/instagram.png')}/>
            </a>

            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
                className="hover:opacity-50 transition duration-500"
            >
                <img alt="x-link" src={require('../assets/twitter.png')}/>
            </a>
        </div>
    )
}

export default SocialMediaIcons;