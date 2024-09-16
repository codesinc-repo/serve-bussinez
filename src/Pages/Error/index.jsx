
import FontAwesome from "react-fontawesome"
import "./error.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export const Error = () => {

    return (
        <>
        <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-description">Oops! The page you are looking for does not exist.</p>
        <img
          src="https://media.giphy.com/media/l2JehQ2GitHGdVG9y/giphy.gif"
          alt="Funny 404"
          className="not-found-image rounded-5 "
        />
        <a href="/" className="not-found-home-link ms-2"> <FontAwesomeIcon icon="fa-light fa-reply" />Go Home</a>
      </div>
    </div>
        </>
    )
}