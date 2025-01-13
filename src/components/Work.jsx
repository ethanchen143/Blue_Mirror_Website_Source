import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSpotify, faYoutube, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons';
import Ethan from '../assets/Portrait.png'
import Hot from '../assets/hot.png'
import Genrify from '../assets/genrify.png'
import Poker from '../assets/holdem.png'
import Algophony from '../assets/ai-produced-music.jpg'
import Hitmaker from '../assets/Sample Digging.jpg'
import Bubble from '../assets/Bubble.jpg'
import LoopBop from '../assets/loopbop.png'
import '../styles/work.css'

const filters = ['AI/Machine Learning', 'Data', 'Web Development','Audio'];

const projects = [
  {
    id: 1,
    title: "LoopBop",
    description: "A 'Duolingo' style AI music prompting trainer.",
    image: LoopBop,
    categories: ['Web Development','Data'],
    detail: '/details/loopbop.html',
    url: 'https://loopbop.onrender.com'
  },
  {
    id: 2,
    title: "Bubble Synth",
    description: "An unique soundscape generator.",
    image: Bubble,
    categories: ['Web Development','Audio'],
    detail: '/details/bubblesynth.html',
    url: 'https://bubble-synth.onrender.com'
  },
  {
    id: 3,
    title: "Hot or Not",
    description: 'A hit song predictor using ML classification.',
    image: Hot,
    categories: ['AI/Machine Learning','Audio'],
    detail: '/details/bubble.html',
    url: 'https://hot-or-not-music.onrender.com'
  },
  {
    id: 4,
    title: "Reinforced Poker",
    description: "A Q-Learning AI poker bot.",
    image: Poker,
    categories: ["AI/Machine Learning","Web Development"],
    detail: '/details/poker.html',
    url: 'https://reinforced-poker.onrender.com'
  },
  {
    id: 5,
    title: "Genrify",
    description: 'Spotify liked songs organizer. "Genrify" your music!',
    image: Genrify,
    categories: ['AI/Machine Learning', 'Web Development', 'Audio', 'Data'],
    // detail: 'https://www.genrify.us',
    url: 'https://www.genrify.us'
  },
  {
    id: 6,
    title: "Algophony",
    description: "AI music generation project using CVAE.",
    image: Algophony,
    categories: ["Audio", "AI/Machine Learning"],
    detail: '/details/algo.html',
    url: 'https://github.com/CS222-UIUC-SP24/group-project-51'
  },
  {
    id: 7,
    title: "Hitmaker",
    description: "Chord progression generator inspired by Billboard hits.",
    image: Hitmaker,
    categories: ["Audio",'Data'],
    detail: '/details/hitmaker.html',
    url: 'https://www.youtube.com/watch?v=SJpA0bz5K6M'
  }
]

const Work = () => {
  const [activeFilters, setActiveFilters] = useState([]);

  function toggleFilter(filter){
    if (activeFilters.includes(filter)){
      setActiveFilters(activeFilters.filter(item=>item!==filter))
    } else {
      setActiveFilters([...activeFilters, filter])
    }
  }

  const filteredProjects = activeFilters.length > 0 ? projects.filter(project => project.categories.some(category => activeFilters.includes(category))) : projects;

  return (
    <>
      <div className="profile">
        <div>
          <p className="intro-text">{"Hi, I'm Ethan. I'm a software engineer passionate about everything to do with music, audio, and data!"}</p>
          <p className="intro-text">{"Currently Studying Computer Science + Music @ University of Illinois at Urbana-Champaign."}</p>
          <div className="profile-links">
            <a href="https://github.com/ethanchen143" target="_blank" className="social-button">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/ethan-chen-a9a264250/" target="_blank" className="social-button">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:ethanchen143@gmail.com" className="social-button">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://open.spotify.com/artist/1L02fZkGeJPkZIS86zf7l9?si=ipI5UvoxSa-zxbQnFtV13g" target="_blank" className="social-button">
              <FontAwesomeIcon icon={faSpotify} />
            </a>
            <a href="https://www.instagram.com/ethanchen99" target="_blank" className="social-button">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.youtube.com/@ethanchen8289" target="_blank" className="social-button">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>

          <div className="resume-link">
            <a href="/resume.pdf" target="_blank" className="resume-button">
              <FontAwesomeIcon icon={faFileLines} /> Current Resume
            </a>
          </div>

          <div className="filters">
            {filters.map((filter) => (
              <button key={filter} onClick={() => toggleFilter(filter)}
                className={`filter-button ${activeFilters.includes(filter) ? 'active' : ''}`}>
                {filter}
              </button>
            ))}
          </div>
        </div>
        <img src={Ethan} alt="ethan-portrait"/>
      </div>
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <a href={project.url}>
              <img src={project.image} alt={project.title} />
            </a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.detail && <a href={project.detail}>Learn More</a>}
            <div></div>
            <a href={project.url}>Try it Out</a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Work;