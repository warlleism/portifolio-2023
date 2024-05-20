import Wt from '../../assets/img/footer/wth.png';
import Git from '../../assets/img/footer/git.png';
import Lin from '../../assets/img/footer/lin.png';
import Be from '../../assets/img/footer/be.png';
import Do from '../../assets/img/footer/do.png';
import Curriculo from '../../assets/Currículo.pdf'
import '../../styles/textStyle.css';
import './style.scss';

const Footer = () => {
  return (
    <div className="flex-container" id="footer">
      <div className="inner-container">
        <div className="social-icons">
          <a
            href="https://api.whatsapp.com/send?phone=5527997964980&text=Meu%20Whatsapp"
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
            href="https://www.linkedin.com/in/warllei-martins-823510153/"
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
          <a
            href={Curriculo}
            target="_self"
            rel="noreferrer"
            download
          >
            <img src={Do} alt="" />
          </a>
        </div>
      </div>
      <div className="text-name text">WARLLEI MARTINS</div>
    </div>
  );
};

export default Footer;
