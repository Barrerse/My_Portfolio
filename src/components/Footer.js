import React from "react";

function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a
          href="https://github.com/BARRERSE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a
          href="https://linkedin.com/in/sebastianbarrera.91"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a
          href="https://twitter.com/COMINGSOON"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
      </div>
      <p>&copy; 2023 Sebastian Barrera. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
