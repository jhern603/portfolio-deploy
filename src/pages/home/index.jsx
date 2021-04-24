import React from 'react';
const Home = () => {
  return (
    <div className="page__container">
      <div className="background__image" />

      <div className="grid__container">
        <div className="left">
          <div className="portrait" alt="" />
        </div>
        <div className="right">
          <p className="blurb">
            <header className="header">JOSE A. HERNANDEZ</header>I am a
            full-time student at Florida International University, a member of
            UPE @ FIU's executive board, and currently serving in the US Army
            Reserves. I have a demonstrated history of high-caliber leadership
            as well as the ability to work well in a team.
          </p>
          <ul
            className="buttons__container"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="social__button">
              <a href="https://github.com/jhern603">Github</a>
            </li>
            <li
              className="social__button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a href="https://www.linkedin.com/in/jhern603/">LinkedIn</a>
            </li>
            <li
              className="social__button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a href="https://drive.google.com/file/d/1qj_EL4h2cNcTBBQKxsWC4UEvcftQb5Te/view?usp=sharing">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Home;
