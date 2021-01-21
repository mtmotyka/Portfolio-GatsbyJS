import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="DEVMATTE - Mateusz Motyka" />

    <section className="home-section-1">
      <p className="home-section-1__title glitch" data-text="mateusz">
        mateusz
      </p>
      <h1 className="home-section-1__subtitle">
        Front - end developer <br /> <span>ex ux designer</span>
      </h1>
      <a href="#o-mnie" className="btn">
        Start
      </a>
    </section>
    <span className="anchor" id="o-mnie"></span>
    <section className="home-section-2">
      <div className="row">
        <div className="col-md-7">
          <h2>
            <span className="number">01.</span> O mnie
          </h2>
          <p>
            Cześć! Mam na imię Mateusz i jestem Front-End Developerem oraz byłym
            UX Designerem. Specjalizuje się w tworzeniu stron i aplikacji
            internetowych. Od ponad roku pracuję jako Dev. Strony głównie
            stawiam przy pomocy Wordpressa, aby można było łatwo edytować
            treści, a od niedawna koduje je także przy pomocy frameworka
            GatsbyJS. <br />
            Dzięki rocznemu doświadczeniu jako UX Designer mogę również na
            stronę spojrzeć nie tylko okiem Deva i wdrożyć ją z myślą o
            użytkownikach.
            <br />
            <br />
            Aktualnie jestem skupiony na nauce Reacta wraz z wceśniej
            wspomnianym GatsbyJS.
          </p>
        </div>
        <div className="col-md-5">
          <div className="image-container">
            <span>
              <img
                src={require("../assets/images/avatar.jpg")}
                alt="Mateusz Motyka"
                className="img-fluid image-container__image"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
    <span className="anchor" id="umiejetnosci"></span>
    <section className="home-section-3">
      <div className="row align-items-center flex-md-row flex-column-reverse">
        <div className="col-md-5">
          <div className="inner">
            <ul className="inner__list">
              <li>React</li>
              <li>GatsbyJS</li>
              <li>HTML5</li>
              <li>JavaScript + jQuery</li>
              <li>CSS3</li>
              <li>SCSS</li>
              <li>PHP</li>
              <li>Git</li>
              <li>RWD</li>
              <li>Bootstrap</li>
              <li>Wordpress + ACF</li>
              <li>Adobe Package</li>
              <li>Figma</li>
              <li>UX</li>
            </ul>
          </div>
        </div>
        <div className="col-md-7">
          <h2 className="home-section-3__title">
            <span className="number">02.</span> Umiejętności
          </h2>
          <p className="home-section-3__desc">
            Jako Front-End Developer mam opanowanego HTMLa oraz CSSa, których
            znajomośc oceniam na bardzo dobrą. W projektach wykorzystuję również
            preprocesor SCSS. Aktualnie staram się pisaś (o ile to możliwe)
            wszelkie projektym na Gatsbym, aby go jeszcze lepiej wytrenować.
            Większość projektów - niezależnie od technologii - podpinam pod
            Wordpressa, którego znajomość oceniam na ponad dobrą. <br />W swojej
            pracy wykorzystuję również doświadczenie UXa, dzięki czemu nie mam
            problemu z operowaniem na wszelkiego rodzaju programach graficznych,
            głównie firmy Adobe.
          </p>
        </div>
      </div>
    </section>
    <span className="anchor" id="doswiadczenie"></span>
    <section className="home-section-4">
      <h2 className="home-section-4__title">
        <span className="number">03.</span> Doświadczenie
      </h2>
      <div className="row company-row">
        <div className="col-lg-3 column column--company">
          <p className="column__company-name">ADream</p>
          <p className="column__date">09-2019-current</p>
        </div>
        <div className="col-lg-9 column column--desc">
          <h3 className="column__position">Front-End Developer</h3>
          <p className="column__desc">
            Po niecałym roku jako UX Designer stwierdziłem, że nie zadowala mnie
            to co robię, a wcześniej już trochę bawiłem się programowaniem.
            Postanowiłem zmienić stanowisko na Front-End Developera i od
            września 2019 roku zajmuje się już tylko tym. W ADream do moich
            głównym zadań należy kodowanie i wdrażanie stron oraz serwisów
            internetowych. Zajmuje się również ich późniejszą obsługą,
            serwisowaniem i zabezpieczaniem. Od czasu do czasu zakoduje też
            mejling czy stopkę mejlową.
          </p>
        </div>
      </div>
      <div className="row company-row">
        <div className="col-lg-3 column column--company">
          <p className="column__company-name">ADream</p>
          <p className="column__date">11.2018-09.2019</p>
        </div>
        <div className="col-lg-9 column column--desc">
          <h3 className="column__position">UX Designer</h3>
          <p className="column__desc">
            W listopadzie 2018r. dostałem się na staż w Agencji Interaktywnej
            Adream, na stanowisko UX Designer. Po 3 miesiącach rozpocząłem pracę
            na pełen etat na tym samym stanowisku. W pracy moim głównym zadaniem
            było projektowanie makiet, flow chartów i pisanie dokumentacji
            nowych stron i serwisów internetowych. Co jakiś czas uczestniczyłem
            w warsztatach z klientami.
          </p>
        </div>
      </div>
      <div className="row company-row">
        <div className="col-lg-3 column column--company">
          <p className="column__company-name">WSZiB</p>
          <p className="column__date">10.2015-06.2019</p>
        </div>
        <div className="col-lg-9 column column--desc">
          <h3 className="column__position">Inżynier</h3>
          <p className="column__desc">
            W 2015 roku rozpocząłem studia na uczelni Wyższa Szkoła Zarządzania
            i Bankowości w Krakowie, na kierunku informatyka. Kończyłem je na
            specjalizacji animacja i grafika komputerowa, jednak jak się później
            okazało to nie to co chciałem robić. W czerwcu 2019 roku obroniłem
            pracę inżynierską i uzyskałem tytuł inżyniera
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
