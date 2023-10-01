import { Outlet } from 'react-router-dom'
import { motion } from "framer-motion"
import SideNavigation from '@/components/SideNavigation'
import BackgroundParticles from '@/components/Particles'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function IndexLayout() {
    return (
        <>
            <div className="main-container h-screen flex flex-col md:flex-row">
                <motion.div className="side-nav-container flex bg-gray-800/20 flex-row p-4 md:px-0 md:flex-col md:justify-between">
                    <SideNavigation />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ duration: 2.5, delay: 1 }}>
                    <BackgroundParticles />
                </motion.div>
                <ScrollArea className="content-container h-full w-screen bg-gray-800/30  p-6 border-l-2 border-l-gray-300/10">
                    <Outlet />
                </ScrollArea>
            </div>
        </>
    );
}