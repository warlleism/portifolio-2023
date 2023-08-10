import Wt from '../../assets/img/footer/wth.png';
import Git from '../../assets/img/footer/git.png';
import Lin from '../../assets/img/footer/lin.png';
import Be from '../../assets/img/footer/be.png';
import '../../styles/textStyle.css';
import './style.scss';

const Footer = () => {
  return (
    <div className="flex-container" id="footer">
      <div className="inner-container">
        <div className="text-copyright roboto">Copyright © 2023</div>
        <div className="social-icons">
          <a
            href="https://api.whatsapp.com/send?phone=5527995804151&text=Meu%20Whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Wt} alt="" />
          </a>
          <a
            href="https://github.com/warlleism"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Git} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/warllei-martins-%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%F0%9F%8C%88-823510153/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Lin} alt="" />
          </a>
          <a
            href="https://www.behance.net/warlleimartins"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Be} alt="" />
          </a>
        </div>
      </div>
      <div className="text-name text">WARLLEI MARTINS</div>
    </div>
  );
};

export default Footer;
