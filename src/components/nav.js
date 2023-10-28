import './nav.css'
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <>
        <nav>

                    <Link to='/'>Twitter</Link>
                    <Link to="/profile">Profile</Link>



        </nav>
        </>
    )
}