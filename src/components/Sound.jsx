import '../styles/work.css'

const Sound = () => {
  return (
    <div className="sound-container">
      <div className="music-item">
        <p className="music-text">
          I make music under {" "}
          <a href="https://open.spotify.com/artist/1L02fZkGeJPkZIS86zf7l9?si=ipI5UvoxSa-zxbQnFtV13g" 
             target="_blank" 
             className="artist-link">
            <em>Blue Mirror</em>
          </a>
          . My sound palette blends genres like indie rock, house, and soul, inpisred by artists like Beach House, Hiatus Kaiyote and Steely Dan.
        </p>
      </div>

      <div className="music-item">
        <p className="music-text">Latest Release - "Artificial Banana"</p>
        <iframe 
          className="spotify-embed"
          src="https://open.spotify.com/embed/album/7nctKU41wRRLvNVmUiR3K5?utm_source=generator" 
          frameBorder="0" 
          allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>
      </div>

      <div className="music-item">
        <p className="music-text">The Blue Mirror Collection</p>
        <iframe 
          className="spotify-embed"
          src="https://open.spotify.com/embed/playlist/1lKQqFgK4QzmovmgyLIg4R?utm_source=generator" 
          frameBorder="0" 
          allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
      </div>

      <div className="music-item">
        <p className="music-text">Inspirations</p>
        <iframe 
          className="spotify-embed"
          src="https://open.spotify.com/embed/playlist/7GmbthccAJTwTDSpnNvHd4" 
          frameBorder="0" 
          allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
      </div>
    </div>
  );
}

export default Sound;