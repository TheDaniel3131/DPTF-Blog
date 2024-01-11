import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">DPTF Blog</a>
        <nav>
          <a href="">About Me</a>
          <a href="">Contact Now</a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_38.jpg"></img>
        </div>
        <div className="texts">
          <h2>Why League of Legends is Fun!</h2>
          <p className="info">
            <a className="author">Daniel (DPTF)</a>
            <time>2024-01-11 6:28 PM</time>
          </p>
          <p className="summary">League of Legends is a popular online multiplayer game that has captivated millions of players worldwide. With its strategic gameplay, diverse roster of champions, and competitive nature, it offers an immersive and thrilling gaming experience. Whether you're a seasoned player or new to the game, League of Legends provides endless hours of entertainment and excitement. Join the community and discover why this game has become a global phenomenon!</p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img src="https://static.invenglobal.com/upload/image/2022/11/03/i1667445395989526.jpeg"></img>
        </div>
            <div className="texts">
              <h2>Unleashing Dominance & Greatness! Faker & T1 Won 4th Worlds Cup 2023!</h2>
              <p className="info">
                <a className="author">Daniel (DPTF)</a>
                <time>2024-01-11 6:28 PM</time>
              </p>
              <p className="summary">Faker, widely regarded as the greatest League of Legends player of all time, recently secured his fourth World Championship title. With his exceptional skills, strategic gameplay, and unmatched talent, Faker has solidified his legacy in the esports world. Join the community and witness the greatness of this legendary player!</p>
            </div>
          </div>
      <div className="post">
        <div className="image">
          <img src="https://c4.wallpaperflare.com/wallpaper/5/963/684/video-game-osu-rhythm-hd-wallpaper-preview.jpg"></img>
        </div>
          <div className="texts">
            <h2>Experience the Rhythm: Dive into the World of osu!</h2>
            <p className="info">
              <a className="author">Daniel (DPTF)</a>
              <time>2024-01-11 6:28 PM</time>
            </p>
            <p className="summary">osu! is a popular rhythm game that challenges players' reflexes and coordination. With its wide selection of songs, addictive gameplay, and competitive community, it offers an engaging and thrilling experience. Whether you're a casual player or a hardcore enthusiast, OSU! provides endless hours of entertainment and a chance to improve your skills. Join the community and discover why this game has become a favorite among rhythm game enthusiasts!</p>
          </div>
        </div>
    </main>
  );
}

export default App;
