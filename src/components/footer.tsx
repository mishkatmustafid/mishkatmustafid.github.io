// Create a footer component using bootstrap that contains My name & A short description of myself as a full-stack developer on one side and a list of links to my social media accounts on the other side.
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className='p-5 bg-dark text-white text-center position-relative'>
      <div className='container p-4'>
        <a
          href='https://linkedin.com/in/mishkatmustafid'
          className='text-white mx-2'
        >
          <FontAwesomeIcon icon={faLinkedin} size='lg' height='40' />
        </a>

        <a
          href='https://twitter.com/MishkatMustafid'
          className='text-white mx-2'
        >
          <FontAwesomeIcon icon={faTwitter} size='lg' height='40' />
        </a>
        <a
          href='https://instagram.com/mustafidmishkat/'
          className='text-white mx-2'
        >
          <FontAwesomeIcon icon={faInstagram} size='lg' height='40' />
        </a>
        <a
          href='https://github.com/mishkatmustafid'
          className='text-white mx-2'
        >
          <FontAwesomeIcon icon={faGithub} size='lg' height='40' />
        </a>
        <a
          href='https://facebook.com/Identified.Undefied'
          className='text-white mx-2'
        >
          <FontAwesomeIcon icon={faFacebook} size='lg' height='40' />
        </a>
      </div>
      <div className='container'>
        <p>mishkatmustafid@gmail.com</p>
      </div>
      <div className='container'>
        <p className='lead'>&copy; Copyright 2023. Made by Mishkat Mustafid</p>
        <a href='#' className='position-absolute bottom-0 end-0 p-5'>
          <i className='bi bi-arrow-up-circle h1'></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
