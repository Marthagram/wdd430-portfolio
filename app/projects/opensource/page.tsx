import { Suspense } from 'react'
import ProjectList from "@/components/ProjectList";

// Outer page - NOT async
export default function OpenSourceProjectsPage() {
  return (
    <div>
      <h1>Open Source Projects</h1>
      <Suspense fallback={<p>Loading projects...</p>}>
        <OpenSourceList />
      </Suspense>
    </div>
  )
}

// Inner - DOES the fetch
async function OpenSourceList() {
  const res = await fetch('http://localhost:3000/api/projects?type=opensource', { cache: 'no-store' });
  const projects = await res.json();
  return <ProjectList projects={projects} />
}