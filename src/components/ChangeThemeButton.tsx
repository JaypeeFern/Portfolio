import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/contexts/ThemeProvider"

export default function ChangeThemeButton() {
    const { theme, setTheme } = useTheme()
    return (
        <>
            {theme == 'light' ?
                (<Button variant='outline' size='icon' onClick={() => setTheme('dark')}>
                    <Moon />
                </Button>)
                :
                (<Button variant='outline' size='icon' onClick={() => setTheme('light')}>
                    <Sun />
                </Button>)
            }
        </>
    )
}