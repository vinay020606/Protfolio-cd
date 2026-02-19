import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Blogs from '@/components/Blogs';
import Resume from '@/components/Resume';

import SparkBackground from '@/components/SparkBackground';

export default function Home() {
  return (
    <div className="flex flex-col gap-0 relative">
      <SparkBackground />
      <Hero />
      <Skills />
      <Projects />
      <Blogs />
      <Resume />
    </div>
  );
}
