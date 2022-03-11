import React from 'react';
import ProjectThumb from '../../Components/ProjectThumb/ProjectThumb';
import { Link } from 'react-router-dom';
import './Homepage.css';
import hero from '../../Images/Pjeseu.png';
import data from '../../Const/projects';

const Homepage = () => {
  return (
    <section className="max-w-7xl m-auto">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#portfolio"> Portfolio</a>
            </li>
            <li>
              <a href="#about"> About</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="scroll-smooth bg-cover">
        <header className="relative">
          <h1 className="mainHeading">
            <span className="block">Aga Lyszko</span>
            <span className="block">UI Designer</span>
          </h1>
          <figure>
            <img src={hero} alt="heroimage" />
          </figure>
        </header>
        <section className="px-20 py-24" id="about">
          <p>Hi, I’m Aga, a UI Designer with a pasion for illustration. </p>
        </section>
        <section className="bg-zinc-200 px-20 py-14" id="portfolio">
          <h2 className="font-semibold text-6xl mb-20">Web &amp; Mobile Design</h2>
          <ul className="grid grid-cols-2 gap-4 auto-rows-min">
            {console.log('data', data)}
            {data &&
              data.web.map((project, index) => (
                <li key={`${index}${project.name}`} className="flex-1 basis-1/2 folioListItem">
                  <Link to={`/${project.name}`}>
                    <ProjectThumb name={project.name} description={project.description} src={project.src} />
                    <p></p>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
        <section className="px-20 py-14" id="portfolio">
          <h2 className="font-semibold text-6xl mb-20">Illustration</h2>
          <ul className="grid grid-cols-2 gap-4 auto-rows-min">
            {data &&
              data.illustrations.map((project, index) => (
                <li key={`${index}${project.name}`} className="flex-1 basis-1/2 folioListItem">
                  <Link to={`/${project.name}`}>
                    <ProjectThumb name={project.name} description={project.description} src={project.src} />
                    <p></p>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Homepage;
