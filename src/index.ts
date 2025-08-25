import express, {type Request, type Response} from "express"
import "dotenv/config"
import { closeDB, runDB } from "./db/database.js"
import { env } from "node:process";

async function startServer() {
    try {
        await runDB()
        console.log(`Acquiring forbidden knowledge on port ${port}`)
        console.log(`Start the app: http://localhost: ${port}`)
    
    
        process.on("SIGINT", async() => {
            console.log("Cleaning up...")
            await closeDB()
            process.exit(0)
        })
    }
        catch (error) {
            console.log(error)
        }
    
}

const app = express();
const port: number = Number(env.PORT) || 3000;

app.get("/:", (request, response) => {
    response.status(200).send({ message: "Hello Mortals."});
})


interface User {
    id: number;
    name: string;
}



app.post("/User"), (req: Request, res: Response) =>  {
    
    const newUser: User = {
    id: 1,
    name: "Michael"
};

res.status(201).send(newUser)

}

