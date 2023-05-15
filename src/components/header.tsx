import Image from 'next/image';
import Head from 'next/head';

// import styles from "../styles/Navbar.module.css";
import img from '../assets/images/profile-image.jpg';

export default function Navbar() {
  return (
    <>
      <Head>
        <title>Mishkat Mustafid</title>
        <meta
          name="description"
          content="Portfoio Website of Mishkat Mustafid"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/title.ico" />
      </Head>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
        <div className="container">
          <Image
            className="img-fluid rounded-circle"
            src={img}
            alt="Profile"
            height="40"
          />
          <a href="#" className="navbar-brand px-2">
            Mishkat Mustafid
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a href="#faq" className="nav-link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
