import Express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from 'cors';

const port = 3000;
const app = Express();

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        credentials: true
    }
})

app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        credentials: true
    })
)

app.get('/', (req, res) => {
    res.json({ Status: "Success", Message: "Server running" })
})

io.on("connection", (socket) => {
    console.log(`User Connected : ${socket.id}`);
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
})