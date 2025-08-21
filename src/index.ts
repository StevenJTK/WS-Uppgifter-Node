import express from "express"
import { env } from "node:process";

const app = express();
const port: number = Number(env.PORT) || 3000;

app.get("/", (request, response) => {
    response.send("Hello World!");
})



app.listen(port, "0.0.0.0", () => {
console.log(`Acquiring forbidden knowledge on port ${port}`)
})