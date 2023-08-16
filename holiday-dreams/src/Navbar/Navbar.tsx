import {Link} from 'react-router-dom'

const Navbar = ():JSX.Element => {
    return (
        <nav className='flex flex-col items-center'>
            <h1 className="text-3xl font-extrabold">Holiday Dreams</h1>
            <div>
            <Link to="/">Home</Link>
            </div>
        </nav>
    )
}

export default Navbar