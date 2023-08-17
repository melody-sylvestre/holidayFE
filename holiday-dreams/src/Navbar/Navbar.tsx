import {Link} from 'react-router-dom'

const Navbar = ():JSX.Element => {
    return (
        <nav className='flex flex-col items-center justify-evenly'>
            <h1 className="text-7xl font-extrabold">Holiday Dreams</h1>
            <div>
            <Link to="/">Home</Link>
            </div>
        </nav>
    )
}

export default Navbar