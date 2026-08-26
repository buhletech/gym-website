import NavBar from "../components/NavBar.jsx";
import 'react-local-toast/dist/bundle.css';
import Footer from "../components/Footer.jsx";
import Memberships from "../components/Memberships.jsx";

const HomePage = () => {


    return (
        <div className="container">
            <NavBar/>

            <main>
                <section className="clubs">
                    <div>
                        <div className="club-txt-center">
                            <h2>Find A Club</h2>
                        </div>
                    </div>

                    <div className="grid-cards">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-location-name">
                                    Just Gym Newtown
                                </div>
                                <div className="card-address-content">
                                    <svg><path></path></svg>
                                    <p>355, Newtown Junction, Carr St &, Miriam Makeba St, Newtown, Johannesburg</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Memberships/>
            </main>

            <Footer/>
        </div>
    )
}

export default HomePage