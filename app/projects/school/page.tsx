import { Suspense } from 'react'
import ProjectList from "@/components/ProjectList";

// Outer page - NOT async
export default function SchoolProjectsPage() {
  return (
    <div>
      <h1>School Projects</h1>
      <Suspense fallback={<p>Loading projects...</p>}>
        <SchoolList />
      </Suspense>
    </div>
  )
}

// Inner - DOES the fetch
async function SchoolList() {
  const res = await fetch('http://localhost:3000/api/projects?type=school', { cache: 'no-store' });
  const projects = await res.json();
  return <ProjectList projects={projects} />
}