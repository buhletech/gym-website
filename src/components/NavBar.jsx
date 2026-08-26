
const NavBar = () => {
    return (
        <div className="nav_bar">
            <div className="nav_bar_left">
                <a className="home_icon" href="/"><svg><path></path></svg></a>
                <span className="txt_home">GYM</span>
            </div>

            <nav>
                <a href="/membership" >Membership</a>
                <a href="/class-schedule">Class schedule</a>
                <a href="/clubs">Clubs</a>
                <a href="blog">Blog</a>
                <button>Join now</button>
                <button>Sign in</button>
            </nav>
        </div>
    )
}

export default NavBar