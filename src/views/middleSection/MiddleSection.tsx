import './middle_section.scss'

import AnimeBox from '../../components/AnimBox/AnimeBox'

function MiddleSection() {
  return (
    <>
      <div className="section middle">
        <div className="middle-section">
          <AnimeBox>
            <AnimeBox duration={0.4}>
              <p className="middle-title">Podstawowa przesyłka do 30kg</p>
            </AnimeBox>
            <div className="price-box">
              <AnimeBox duration={1}>
                <h3 data-aos="fade-up">Ceny Od</h3>
                <div className="price">
                  <span className="currency-icon pound material-symbols-outlined">
                    currency_pound
                  </span>
                  <AnimeBox duration={1.6}>
                    <p className="price-value">30</p>
                  </AnimeBox>
                </div>
              </AnimeBox>
            </div>
            <AnimeBox duration={0.6}>
              <h2 className="middle-title" data-aos="fade-up">
                Przesyłka niestandardowa wyceniane indywidualnie
              </h2>
            </AnimeBox>
            <AnimeBox duration={1.3}>
              <div className="middle-content">
                <img
                  className="box-icon"
                  data-aos="flip-down"
                  src="box-icon.png"
                  alt="box"
                />
                <div className="content">
                  <AnimeBox duration={0.8}>
                    <p>
                      Dowozimy materiały budowlane oraz realizujemy indywidualne
                      zamówienia na meble w Black Red White, oraz asortyment z Leroy
                      Merlin, Castorama, Bodzio meble Usługi świadczymy w systemie `od
                      drzwi do drzwi`
                    </p>
                  </AnimeBox>
                </div>
              </div>
            </AnimeBox>
            <AnimeBox duration={0.8}>
              <p className="bottom-title" data-aos="fade-up">
                Auto wyposażone jest w DVD, klimatyzację. Posiadamy OC Przewoźnika
              </p>

              <p className="bottom-title" data-aos="fade-up">
                Nadanie paczki wymaga wypełnienie deklaracji celnej, plik do pobrania
                dostępny poniżej, w razie pytań proszę o kontakt. Pomożemy.
              </p>

              <AnimeBox duration={0.4}>
                <p className="bottom-title link" data-aos="fade-up">
                  <span className="material-symbols-outlined">arrow_circle_right</span>
                  <a
                    className="bottom-title link"
                    data-aos="fade-up"
                    href="CN23.pdf"
                    download="newfilename"
                  >
                    Deklaracja celna do pobrania
                  </a>
                </p>
              </AnimeBox>
            </AnimeBox>
          </AnimeBox>
        </div>
      </div>
    </>
  )
}

export default MiddleSection
