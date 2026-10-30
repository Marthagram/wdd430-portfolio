import  ShowInfo from '@/components/info';

const information = {
    email: 'mrsmartha.otas@gmail.com',
    technicalSkills: 'HTML, CSS, JavaScript, Databases, skilled in Teaching Fundamentals',
    education: 'Software Engineering from BYU Idaho, Biochemistry from Ambrose Alli University'
};

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
      <p className="text-lg text-gray-400">
        This about page shares more information about my background and work.
      </p>
      <ShowInfo info = {information} />
    </main>
  );
}