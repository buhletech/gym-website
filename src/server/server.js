import cors from 'cors'
import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(cors())
app.use(express.json())

const dbPath = path.join(__dirname, 'data', 'emailDB.json')

const generateId = (emails) => {
    const maxId = emails.length > 0
        ? Math.max(...emails.map(n => Number(n.id)))
        : 0
    return String(maxId + 1)
}

app.post('/api/emails', (req, res) => {
    const body = req.body

    if (!body.email) {
        return res.status(400).json({ error: 'email missing' })
    }

    const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'))

    const newEmail = {
        email: body.email,
        id: generateId(data.emails)
    }

    data.emails = data.emails.concat(newEmail)

    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2))

    res.json(newEmail)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
