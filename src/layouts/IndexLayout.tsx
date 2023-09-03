import { Outlet } from 'react-router-dom'
import SideNavigation from '@/components/SideNavigation'
import BackgroundParticles from '@/components/Particles'

// Do not replace div.content-container with ScrollArea component because it will lead to specificity issues
// import { ScrollArea } from '@/components/ui/scroll-area'

export default function IndexLayout() {
    return (
        <>
            <div className='main-container h-screen flex flex-col md:flex-row'>
                <div className='side-nav-container flex bg-gray-800/20 flex-row p-4 md:px-0 md:flex-col md:justify-between'>
                    <SideNavigation />
                </div>
                <BackgroundParticles />
                <div className='content-container w-screen bg-gray-800/30 overflow-auto p-6 border-l-2 border-l-gray-300/10'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}