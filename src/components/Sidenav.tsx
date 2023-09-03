import { Github, Linkedin } from 'lucide-react'
import DarkModeButtons from "./DarkModeButton"
import { Button } from "./ui/button"

export default function SideNav() {
    return (
        <>
            <div className="theme-buttons-container flex justify-center">
                <DarkModeButtons />
            </div>
            <div className="pages-container w-32 flex flex-col justify-center">
                <Button variant='ghost' className="hover:bg-gray-400 hover:dark:bg-gray-500 dar transition-colors duration-200 ease-in-out rounded-none">Home</Button>
            </div>
            <div className="socials-container flex justify-center gap-3">
                <Button variant='ghost' size='icon'>
                    <a href="https://github.com/JaypeeFern" target='_blank'>
                        <Github size={21} strokeWidth={1} />
                    </a>
                </Button>
                <Button variant='ghost' size='icon'>
                    <a href="https://www.linkedin.com/in/john-paul-fernandez-a11962262/" target='_blank'>
                        <Linkedin size={21} strokeWidth={1} />
                    </a>
                </Button>
            </div>
        </>
    )
}