import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: ' A Backend technical project',
    description: 'A REST API project to manage backend operations and be used in a later-built frontend project.',
    technologies: ['Node.js', 'HTML', 'Express.js', 'CSS', 'JavaScript', 'MongoDB', 'Mongoose'],
    link: 'https://cse341-project2-jf77.onrender.com'
  },
  {
    title: 'Otas Farm Intergrated Enterprise',
    description: 'A an app that shows the history, about-us, products and address to users.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://marthagram.github.io/otasfarmintegrated'
  }
];

export default function Home() { 
  return (
    <main className="container mx-auto bg-gray-800 px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-300">
          I am a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}