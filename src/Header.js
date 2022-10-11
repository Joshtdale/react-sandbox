import './Header.css'

import {useState} from 'react';

function Header() {
    const [name, setName] = useState('')

    const handleChange = event => {
        // sentMessage(event.target.value);
        // console.log(event.target.value)
        setName(event.target.value)
    }

    return (
        <>
    <header className="p-3 text-bg-dark">
        <div className="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                </a>

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">About</a></li>
                </ul>

                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" onChange={handleChange} className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"></input>
                </form>

                <div class="text-end">
                    <button type="button" className="btn btn-outline-light me-2">Login</button>
                    <button type="button" className="btn btn-warning">Sign-up</button>
                </div>
            </div>
        </div>
    </header>

    <div className='text-center inputDiv'>
        <h1>{name}</h1>
        </div>

    </>
    )
}

export default Header