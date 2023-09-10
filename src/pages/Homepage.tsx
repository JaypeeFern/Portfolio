import { motion } from "framer-motion"

export default function Homepage() {
    return (
        <div className="homepage-container h-full">
            <motion.div initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ type: 'spring', from: -500, duration: 1.25 }} className="h-full flex flex-col justify-center p-14">
                <span className="text-7xl font-extrabold">Hi</span>
                <span className="text-6xl font-bold">I'm John</span>
                <span className="text-5xl font font-mono">web developer</span>
            </motion.div>
        </div >
    )
}