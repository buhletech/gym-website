import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

const ClubPageDetails = () => {
    const {club_location} = useParams();

    const [clubs, setClubs] = useState([
        { id: 1, img: "", club_location: "Newtown", location: "355, Newtown Junction, ..." }
    ])

    const club = clubs.find(c => c.club_location === club_location);

    //Fetch real data from the server
    useEffect(() => {
        axios.get('http://localhost:3001/api/clubs').then((response) => {
            setClubs(response.data)
        })
    }, [])

    return(
        <div className="club-page-details-container">
            <NavBar/>

            <main className="clubs-details-page">
                <section className="main-clubs-header">
                    <div className="main-clubs-content">
                        <h2>{club.club_location}</h2>

                        <p>This space was built with intention so you can move, lift, stretch or recover in the way that works for you. Training doesn’t look the same for everyone and it shouldn’t have to.
                        </p>
                    </div>
                </section>

                <section className="">
                    <div className="clubs-header-container">
                        <div className="clubs-header">
                            <p>Training looks different for everyone. That’s why this space was built with intention. It gives you the freedom to move, lift, stretch or recover in a way that works for you.</p>
                        </div>

                        <div className="club-detail-location">
                            <div className="club-find-us">
                                <span>Find Us</span>
                            </div>

                            <div className="club-find-location">
                                <span>{club.location}</span>
                            </div>
                        </div>

                        
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}

export default ClubPageDetails;