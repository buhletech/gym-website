import {useEffect, useState} from "react";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import axios from "axios";

const ClassSchedule = () => {
    const [classSchedule,setClassSchedule]= useState([
        {id:1,day:"Thursday", class:"Reformer Power (Only for Elevate members)", time:"05:15 – 06:15", club:"Befordview", trainer: "Yolanda, ", studio: "Reformer Studio", desc:"\n" +
                "Strength. Sweat. Performance. Take your Reformer workout to the next level with Reformer Power—a high-energy, functional Pilates class designed to challenge your strength, stamina, and stability. This is where classical principles meet modern athleticism. Expect powerful, full-body sequences that build lean muscle, elevate your heart rate, and enhance functional movement patterns. Using resistance, tempo, and dynamic flow, Reformer Power is ideal for those wanting a more intense, performance-driven experience. Push past limits. Feel the burn. Unlock your power."}
    ])
    const [selectedClub, setSelectedClub] = useState('')
    const [selectedClass, setSelectedClass] = useState('')
    const [selectedDay, setSelectedDay] = useState('')

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    const handleClubChange = (event) => {
        setSelectedClub(event.target.value)
    }

    const handleClassChange = (event) => {
        setSelectedClass(event.target.value)
    }

    const handleDayClick = (day) => {
        setSelectedDay(day)
    }

    const filteredSchedule = classSchedule.filter(item => {
        const matchesClub = selectedClub ? item.club === selectedClub : true
        const matchesClass = selectedClass ? item.class === selectedClass : true
        const matchesDay = selectedDay ? item.day === selectedDay : true
        return matchesClub && matchesClass && matchesDay
    })

    useEffect(() => {
        axios.get('http://localhost:3001/api/schedule').then((response) => {
            setClassSchedule(response.data)
        })
    }, [])

    return(
        <div className="class-schedule-container">
            <NavBar/>

            <main className="main-class-schedule">
                <section className="class-schedule-header">
                    <div className="main-class-schedule-content">
                        <h2>Class Schedules</h2>

                        <p>Explore our schedule and find the class that work for you.</p>
                    </div>
                </section>

                <section className="schedules">
                    <div className="schedule-picker">
                        <p>Please select a club to view the schedule.</p>

                        <div className="schedule-selector">
                            <select className="select-club2" value={selectedClub} onChange={handleClubChange}>
                                <option value="">-- Select A Club --</option>
                                <option value="Bedfordview">Bedfordview</option>
                            </select>

                            <select className="select-class" value={selectedClass} onChange={handleClassChange}>
                                <option value="">-- Select A Class --</option>
                                <option value="Aerobics">Aerobics</option>
                            </select>
                        </div>
                    </div>

                    <div className="schedule-dayButtons">
                        {days.map(day => (
                            <button key={day} className="schedule-date-selector" onClick={() => handleDayClick(day)} style={{ fontWeight: selectedDay === day ? 'bold' : 'normal' }}>
                                {day}
                            </button>
                        ))}
                        <button onClick={() => handleDayClick('')}>All Days</button>
                    </div>

                    <div className="grid-classes">
                        {filteredSchedule.length === 0 ? (
                            <p>No classes match your selection.</p>
                        ) : (
                            filteredSchedule.map(item => (
                                <div className="class-row" key={item.id}>
                                    <div className="col col-date">
                                        <div className="date-day">{item.day}</div>
                                        <div className="day-date">{item.time}</div>
                                    </div>

                                    <div className="col col-class">
                                        <div className="class-class">{item.class}</div>
                                    </div>

                                    <div className="col col-trainer">
                                        <div className="trainer-line">{item.trainer}</div>
                                        <div className="studio-line">
                                            <span>{item.studio}</span>
                                        </div>
                                    </div>
    
                                    <div className="col col-desc">
                                        <div className="desc-text">{item.desc}</div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}

export default ClassSchedule;