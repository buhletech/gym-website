import SignUpModal from "../components/SignUpModal.jsx";
import {useState} from "react";
import {Link} from "react-router-dom";

const Memberships = () => {
    const [showSignUp, setShowSignUp] =  useState(false);
    const membershipCards = [
        {id: 1, heading: "National Membership", description: "Access all 51 clubs nationwide for R1600pm. A membership designed for those who train wherever life takes them."},
        {id: 2, heading: "Club Membership", description: "Stay connected to your training with exclusive access to a single club. Perfect for those who want a focused membership with club-specific perks"},
        {id: 3, heading: "Student Membership", description: "This is your space to push limits, connect with others, and level up — because strong minds and strong bodies go hand in hand."},
        {id: 4, heading: "Just Gym Membership", description: "Keep moving at a rate that empowers your body and suits your budget."},
    ]

    return(
            <>

                <section className="memberships">
                    <div className="membership-header-container">
                        <div className="membership-header">
                            <h3>Memberships</h3>
                        </div>
                    </div>

                    <div className="membership-grid">
                        {membershipCards.map((membership) => {
                            <div className="membership-card" key={membership.id}>
                                <div className="membership-card-header">
                                    <h3>{membership.heading}</h3>
                                </div>

                                <div className="membership-card-content">
                                    <p className="membership-card-par">{membership.description}</p>

                                    <button onClick={() => setShowSignUp(true)} className="btn-signup"><Link to={`/membership/sign-up/${membership.heading}`}>Sign Up Now</Link></button>
                                    <SignUpModal isOpen={showSignUp} onClose={() => setShowSignUp(false)}/>
                                </div>
                            </div>
                        })}
                    </div>
                </section>
            </>
    )
}

export default Memberships