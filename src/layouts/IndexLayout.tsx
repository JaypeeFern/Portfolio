import { Outlet } from 'react-router-dom'
import { ScrollArea } from '@/components/ui/scroll-area'
import SideNavigation from '@/components/SideNavigation'

export default function IndexLayout() {
    return (
        <div className='main-container h-screen flex flex-col md:flex-row'>
            <div className='side-nav-container flex bg-gray-800/20 flex-row p-4 md:px-0 md:flex-col md:justify-between'>
                <SideNavigation/>
            </div>
            <ScrollArea className='content-container w-screen bg-gray-800/30 overflow-auto'>
                <Outlet />
            </ScrollArea>
        </div>
    )
}