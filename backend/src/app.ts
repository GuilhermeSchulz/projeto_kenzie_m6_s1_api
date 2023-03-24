import "express-async-errors"
import "reflect-metadata"
import express from "express"
import { userRoutes } from "./routes/users.routes"
import { loginRoutes} from "./routes/login.routes"
import { contactsRoutes } from "./routes/contacts.routes"



const app = express()
app.use(express.json())
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactsRoutes);

export default app