import { Outlet } from 'react-router-dom'
import SideNav from '@/components/SideNav'

export default function IndexLayout() {
    return (
        <div className='main-container h-screen flex flex-row'>
            <div className='side-nav-container flex flex-col align-middle justify-between bg-gray-800/20 py-4'>
                <SideNav/>
            </div>
            <div className='content-container w-screen bg-gray-800/30'>
                <Outlet />
            </div>
        </div>
    )
}