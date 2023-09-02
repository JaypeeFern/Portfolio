import { Outlet } from 'react-router-dom'

export default function IndexLayout() {
    return (
        <div className='main-wrapper h-screen bg-slate-300'>
            <Outlet/>
        </div>
    )
}