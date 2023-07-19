import '../../styles/homeStyles.css'

const Header = () => {
  return (
    <div className="flex items-center justify-center h-20 w-[100%] fixed top-10">
      <div className="text-3xl font-semibold w-[63%] text-[#fff] text tracking-[3px]">
        Warllei Martins
      </div>
      <ul className="flex items-center justify-between  w-[20%]">
        <li className="text-[#fff] text-[1.3rem]">
          <a href="" className='text'>Ínicio</a>
        </li>
        <li className="text-[#fff] text-[1.3rem]">
          <a href="" className='text'>Sobre</a>
        </li>
        <li className="text-[#fff] text-[1.3rem]">
          <a href="" className='text'>Skills</a>
        </li>
        <li className="text-[#fff] text-[1.3rem]">
          <a href="" className='text'>Projetos</a>
        </li>
        <li className="text-[#fff] text-[1.3rem]">
          <a href="" className='text'>Contato</a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Header;
