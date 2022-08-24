import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare} from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
    <footer>
      <div className="social-media-icons">
        <a href="twitter.com">
          <FontAwesomeIcon icon={faTwitterSquare}/>
        </a>
        <a href="facebook.com">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a href="instagram.com">
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
        <a href="github.com">
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
      </div>
    </footer>
  )
}
