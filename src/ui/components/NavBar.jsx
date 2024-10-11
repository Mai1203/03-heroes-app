import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate(); 

    const onLogout = () => {
        navigate('/login',{ replace: true });

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-4">
            
            <img src="assets/superheroe.png" alt="Logo" width="50" height="44" className="d-inline-block align-text-top"></img>
            <Link 
                className="navbar-brand" 
                to="/"
            >
                API Heroes
            </Link>

            <div className="collapse navbar-collapse justify-content-center">
                <div className="mx-auto navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/home"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`}
                        to="/search"
                    >
                        SEARCH
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    
                    <span className='nav-item nav-link text-primary'>
                        Heroes APP
                    </span>

                    <button 
                        className='nav-item nav-link btn'
                        onClick={onLogout}
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}