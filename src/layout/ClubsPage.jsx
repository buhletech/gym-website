import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const ClubsPage = () => {
    const [clubs, setClubs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/clubs').then((response) => {
            setClubs(response.data)
        })
    }, [])


    return(
        <div className="clubs-container">
            <NavBar/>


            <main className="clubs-page">
                <section className="main-clubs-header">
                    <div className="main-clubs-content">
                        <h2>Find A Club</h2>

                        <p>We’ll help you find the closest Planet Fitness gym near you that fits your fitness journey.</p>
                    </div>
                </section>


                <section className="clubs">
                    <div className="clubs-header-container">
                        <div className="clubs-header">
                            <h3>Clubs</h3>
                        </div>
                    </div>

                    <div className="grid-club">
                        {clubs.map( (club) => {
                            <div className="clubs-card" key={club.id}>
                                <div className="col-club col-club-location ">
                                    <div className="club-location">{club.club_location}</div>
                                </div>

                                <div className="col-club col-location">
                                    <div className="location">{club.location}</div>
                                </div>

                                <Link to={`/clubs/${club.club_location}`}>
                                    <span className="view-club-btn">View Club</span>
                                </Link>

                            </div>
                        })}
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}

export default ClubsPage;