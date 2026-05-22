import User from "../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const register = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const isUser = await User.findOne({ email });

        if (isUser) {
            return res.status(400).json("User already exists.")
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({ name, email, password: hashedPassword })

        res.status(201).json("User Created")
    } catch (err) {
        res.status(400).json(err.message)
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const isUser = await User.findOne({ email });

        if (!isUser) {
            return res.status(400).json("User not found.")
        }

        if (await bcrypt.compare(password, isUser.password)) {
            const token = await jwt.sign({ userId: isUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" })
            res.status(200).json({ user: { _id: isUser._id, name: isUser.name, email: isUser.email }, token })
        } else {
            res.status(400).json("Invalid credential.")
        }
    } catch (err) {
        res.status(400).json(err.message)
    }
}