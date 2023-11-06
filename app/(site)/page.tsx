import { styles } from "@/app/(site)/styles";
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        I&apos;m <span className={styles.gradientText}>Rubén</span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        This is an example project built with NextJS (Typescript), Sanity and
        TailwindCSS performed by{" "}
        <a
          className="hover:border-b-4 hover:border-black"
          href="https://twitter.com/kapehe_ok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={`${styles.gradientText} font-bold`}>@kapehe</span>
        </a>
        . You can check out the tutorial{" "}
        <a
          className="font-bold text-black hover:border-b-4 hover:border-black"
          href="https://www.youtube.com/watch?v=OcTPaUfay5I"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="flex flex-col justify-between"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500 hover:scale-105 transition h-[9.375rem]"
              />
            )}
            <div className={`${styles.gradientText} mt-2 font-extrabold`}>
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
