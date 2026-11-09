import { Suspense } from 'react'
import ProjectList from "@/components/ProjectList";

// Outer page - NOT async
export default function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>
      <Suspense fallback={<p>Loading projects...</p>}>
        <OpenProjectsList />
      </Suspense>
    </div>
  )
}

// Inner - DOES the fetch
async function OpenProjectsList() {
  const res = await fetch('http://localhost:3000/api/projects', { cache: 'no-store' });
  const projects = await res.json();
  return <ProjectList projects={projects} />
}