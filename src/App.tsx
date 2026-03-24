import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Profile } from './components/Profile';
import { Stack } from './components/Stack';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="relative bg-[#0a0a0a]">
      <Nav />
      <Hero />
      <Projects />
      <Profile />
      <Stack />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
