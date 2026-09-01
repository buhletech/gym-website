import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import Memberships from "../components/Memberships.jsx";

const MembershipPage = () =>{

    return(
        <div className="member-container">
            <NavBar/>

            <main className="membership-page">
                <section className="main-membership-header">
                    <div className="main-membership-content">
                        <h2>Join The Movement</h2>

                        <p>This is more than a membership. It’s your launchpad to push limits, break barriers, and redefine what’s possible.</p>
                    </div>
                </section>

                <Memberships/>
            </main>

            <Footer/>
        </div>
    )
}

export default MembershipPage;