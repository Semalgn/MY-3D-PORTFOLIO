import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a href="/">Visit my blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a key={img.url} className="icon" target="_blank" href={img.url}>
              <img src={img.imgPath} alt="social icon" />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
        <p className="text-center md:text-end">
        © {new Date().getFullYear()} Semalgn Tilahun. All rights reserved.
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
