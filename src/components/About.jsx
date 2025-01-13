import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSpotify, faYoutube, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Key from '../assets/play-key.jpg'
import Key2 from '../assets/key2.jpg'
import Show from '../assets/show.jpg'
import Siebel from '../assets/siebel.jpg'
import { useState, useEffect } from 'react';

const About = () => {
  const [slides, setSlides] = useState([])
  useEffect(() => {
    const fetchedSlides = document.querySelectorAll('.carousel-slide img');
    setSlides(fetchedSlides);
  }, []);

  let slideIndex = 1;
  const totalSlides = slides.length;
  let timer = null;

  function showSlides(n) {
    if (totalSlides === 0) {return}
    resetTimer();
    if (n > totalSlides) {slideIndex = 1}
    if (n < 1) {slideIndex = totalSlides}
    let i;
    for (i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    updateDots();
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function updateDots() {
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex-1].className += " active";
  }

  const handlePreviousSlide = () => {
    plusSlides(-1);
  }
  
  const handleNextSlide = () => {
    plusSlides(1);
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(function() { plusSlides(1) }, 5000);
  }

  return (
    <div className='about-contain'>
      <div className="about-link">
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
      <div className="about">
        <div className='about-text'>
          <div className="carousel-container">
              <div className="carousel-slide">
                  <img src={Siebel} id="lastClone" alt="Image 1"/>
                  <img src={Key} alt="Image 2"/>
                  <img src={Key2} alt="Image 3"/>
                  <img src={Show} id="firstClone" alt="Image 4"/>
              </div>
          </div>
          <div className="carousel-navigation">
              <button id="prevBtn" onClick={handlePreviousSlide}>&#10094;</button>
              <button id="nextBtn" onClick={handleNextSlide}>&#10095;</button>
          </div>
          <div className="carousel-indicators">
              <span className="dot" onClick={showSlides(1)}></span>
              <span className="dot" onClick={showSlides(2)}></span>
              <span className="dot" onClick={showSlides(3)}></span>
              <span className="dot" onClick={showSlides(4)}></span>
          </div>
          <h3>{"Hi, I'm Ethan."}</h3>
          <p>{"I'm a senior at University of Illinois at Urbana-Champaign, studying studying Computer Science + Music. I am currently Based in Urbana, Illinois. I am passionate about applying data science and machine learning to create new experience in audio and music. Beyond software and AI, I produce music for a Chinese funk band and also make my own music under 'Blue Mirror'. I find joy in bringing projects to life and creating new experiences!"}</p>
          <div className='about-lists'>
            <div>
              <h4>{"My Skills"}</h4>
              <p>AI/ML</p>
              <p>Software Engineering</p>
              <p>Web Development</p>
              <p>Database Management</p>
              <p>Music Production</p>
            </div>
            <div>
              <h4>{"I'm learning"}</h4>
              <p>Audio Programming: Juce, Max/PD</p>
              <p>Computer Vision</p>
              <p>Large Language Models</p>
            </div>
            <div>
              <h4>{"I want to learn more about"}</h4>
              <p>Diffusion Networks</p>
              <p>Quantum Computing</p>
              <p>Distributed Systems</p>
              <p>Recommendation Algorithm</p>
            </div>
            <div>
              <h4>{"I enjoy"}</h4>
              <p>Tennis</p>
              <p>Indie Rock</p>
              <p>Jazz Piano Improv</p>
              <p>Netflix</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
