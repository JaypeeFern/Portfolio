import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/components/ThemeProvider"

export default function Homepage() {
    const { theme, setTheme } = useTheme()


    return (
        <div className="h-screen">
            {theme == 'light' ?
                (<Button variant='outline' size='icon' onClick={() => setTheme('dark')}>
                    <Moon />
                </Button>)
                :
                (<Button variant='outline' size='icon' onClick={() => setTheme('light')}>
                    <Sun />
                </Button>)
            }
        </div>
    )
}