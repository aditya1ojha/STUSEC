import {Link} from 'react-scroll';

import logoDark from '../assets/logo-dark.png';

const NavBar = () => {

    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'team',
        },
    ];



  return (

    <div className='flex justify-between items-center w-full h-15 px-4 text-white bg-black fixed z-10 top-0'>

        <div>
            <img src= {logoDark} alt='logoDark' className='w-20'></img>
        </div>

        <ul className='hidden md:flex'>
            {links.map(({id, link}) => ( 
                <li key={id} className='text-left px-4 cursor-pointer uppercase font-medium text-gray-500 hover:scale-110 duration-200'>
                    <Link 
                    to={link} 
                    smooth 
                    duration={500}
                    spy
                    activeStyle={{color:'#f2edf1'}}>
                        {link}
                    </Link>
                </li>
            ))}
        </ul>

    </div>
  );
};

export default NavBar;