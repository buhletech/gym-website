import {useEffect, useState} from "react";

const NavBar = () => {
    const [active, setActive] = useState(false);

    useEffect(() =>{
        const onScroll = () => setActive(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <div className={`nav_bar ${active ? 'activated' : ''}`}>
            <div className="nav_bar_left">
                <a className="home_icon" href="/"><svg><path></path></svg></a>
                <span className="txt_home">GYM</span>
            </div>

            <nav>
                <a href="/membership" >Membership</a>
                <a href="/class-schedule">Class schedule</a>
                <a href="/clubs">Clubs</a>
                <a href="blog">Blog</a>

                <a href="/join-page" className="join-btn"><button>Join now</button></a>
                <a href="/sign-in" className="sign-btn"><button>Already a member?</button></a>
            </nav>
        </div>
    )
}

export default NavBar