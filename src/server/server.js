import cors from 'cors'
import express from 'express'
import fs from 'fs'

const app = express()
app.use(cors())
app.use(express.json())

const generateId = (items) => {
    const maxId = items.length > 0
        ? Math.max(...items.map(item => Number(item.id)))
        : 0
    return maxId + 1
}

app.post('api/emails', (req, res) => {
    const body = req.body

    if (!body.email) {
        return res.status(400).json({ error: 'email missing' })
    }

    const filePath = 'C:\\Users\\Admin\\Documents\\gym-website\\src\\server\\data\\emailDB.json';

    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const newEntry = {
        id: generateId(data),
        email: body.email,
    }

    const updatedEntry = data.concat(newEntry);

    fs.writeFileSync(filePath, JSON.stringify(updatedEntry, null, 2));

    res.status(200).send('ok');
})

app.get('/api/schedule', (req, res) => {
    const filePath = 'C:\\Users\\Admin\\Documents\\gym-website\\src\\server\\data\\ClassScheduleDB.json';

    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    res.json(data.schedule);
})

app.post('/api/schedule', (req, res) => {
    const body = req.body

    if (!body.day || !body.class || !body.time) {
        return res.status(400).json({ error: 'day or class missing' })
    }

    const filePath = 'C:\\Users\\Admin\\Documents\\gym-website\\src\\server\\data\\ClassScheduleDB.json';

    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const newEntry = {
        id: generateId(data.schedule),
        day: body.day,
        class: body.class,
        time: body.time,
        club: body.club,
        trainer: body.trainer,
        studio: body.studio,
        desc: body.desc
    }
    const updatedData = data.schedule.concat(newEntry)

    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));

    res.status(200).json(newEntry);

})

app.get('/api/clubs', (req, res) => {
    const filePath = 'C:\\Users\\Admin\\Documents\\gym-website\\src\\server\\data\\clubsDB.json';

    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    res.json(data);
})

app.post('/api/newUsers', (req, res) => {
    const body = req.body

    if (!body.firstName || !body.lastName || !body.contactNo || !body.email) {
        return res.status(400).json({ error: 'first name, last name, contact number, or email missing' })
    }

    const filePath = 'C:\\Users\\Admin\\Documents\\gym-website\\src\\server\\data\\newUsers.json';

    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const emailExists = data.newUsers.some(u => u.email === body.email)
    const idExists = data.newUsers.some(u => u.idNo === body.idNo)

    if (emailExists) {
        return res.status(400).json({ error: 'email already registered' })
    }

    if (idExists) {
        return res.status(400).json({ error: 'ID number already registered' })
    }

    const newEntry = {
        id: generateId(data.newUsers),
        club: body.club,
        idNo: body.idNo,
        firstName: body.firstName,
        lastName: body.lastName,
        contactNo: body.contactNo,
        email: body.email
    }

    const updatedData = data.newUsers.concat(newEntry)

    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));

    res.status(200).json(newEntry);
})

app.post('/api/signin', (req, res) => {
    const body = req.body

    if (!body.idNo || !body.email) {
        return res.status(400).json({ error: 'ID number or email missing' })
    }

    const filePath = 'C:\\Users\\Admin\\Documents\\gym-website\\src\\server\\data\\newUsers.json'
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    const user = data.newUsers.find(u => u.idNo === body.idNo && u.email === body.email)

    if (!user) {
        return res.status(404).json({ error: 'No matching account found' })
    }

    res.status(200).json(user)
})
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
