
interface Info {
  email: string;
  technicalSkills: string;
  education: string;
}

interface ShowInfoProps {
  info: Info;
}

export default function ShowInfo({ info }: ShowInfoProps) {
  return (
    <section className="mt-6 rounded-lg bg-gray-100 p-6 shadow-md">
      <h3 className="mb-3 text-2xl font-bold text-red-900">
        Biochemist turned Web Developer
      </h3>

      <p className="mb-2 text-gray-700"><strong>Email:</strong> {info.email}</p>
      <p className="mb-2 text-gray-700"><strong>Technical Skills:</strong> {info.technicalSkills}</p>
      <p className="text-gray-700"><strong>Education:</strong> {info.education}</p>
    </section>
  );
}
