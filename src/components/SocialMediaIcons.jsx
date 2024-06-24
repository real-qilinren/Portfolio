

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

            <a
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/real-qilinren"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    src={require('../assets/github.png')}
                    alt="github"
                    style={{maxWidth: '30px', maxHeight: '30px'}}
                />
            </a>
        </div>
    )
}

export default SocialMediaIcons;