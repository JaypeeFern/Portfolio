import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Homepage() {
    return (
        <>
            <main id="home-section" className="home-container h-full flex mb-5">
                <motion.div initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ type: 'spring', from: -500, duration: 1.25, delay: 0.5 }} className="h-full flex flex-col justify-center p-14">
                    <div className="flex flex-col gap-3">
                        <span className="text-7xl font-extrabold">Hi!</span>
                        <span className="text-6xl font-bold">I'm John</span>
                        <span className="text-5xl font-mono">web developer</span>
                    </div>
                    <Button className="mt-11 w-[200px] h-[3rem] rounded-sm" variant='outline'>
                        Contact Me!
                    </Button>
                </motion.div>
            </main >
        </>
    )
}