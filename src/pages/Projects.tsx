import { faker } from '@faker-js/faker'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface Data {
    projectName: string
    projectDescription: string
    projectSampleImage: string
    projectDemoLink: string
    projectClient: [{
        name: string,
        duration: string
    }]
}

export default function Projects() {

    let projects: Data[] = []

    const generateRandomProjects = (index?: number): Data => {
        return {
            projectName: `Project ${index}`,
            projectDescription: faker.lorem.paragraph(10),
            projectSampleImage: faker.image.url(),
            projectDemoLink: faker.internet.url(),
            projectClient: [{
                name: faker.company.name(),
                duration: 'Present'
            }]
        }
    }

    for (let i = 0; i < 6; i++) {
        projects.push(generateRandomProjects(i + 1))
    }

    return (
        <main className='projects-container flex h-full p-4 gap-10'>
            <div className='grid grid-cols-3 gap-3'>
                {projects.map((project, index) => (
                    <Card key={index}>
                        <CardHeader className='max-h-[170px]'>
                            <CardTitle>{project.projectName}</CardTitle>
                            <Separator className='h-[3px]' />
                            {project.projectClient.map((client, index) => (
                                <span key={index} className='font-thin'>{client.name} | {client.duration}</span>
                            ))}
                            <CardDescription className='line-clamp-2'>{project.projectDescription}</CardDescription>
                        </CardHeader>
                        <CardContent className='mb-auto mt-auto'>
                            <img src={project.projectSampleImage} className='rounded-md' />
                        </CardContent>
                        <CardFooter className="flex flex-col">
                            <Button variant='outline'>Demo</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </main>
    )
}