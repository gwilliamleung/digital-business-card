import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Header(){
    return(
        <header>
            <img src="/Headshot.jpg"/>
            <h1>William Leung</h1>
            <h2>Aspiring Frontend Developer</h2>
            <h3>gwilliamleung.com</h3>
            <div className="linkedin-button">
                <FontAwesomeIcon icon={faLinkedin} />
                <a href="google.com" className="link">LinkedIn </a>
            </div>
        </header>
    )
}