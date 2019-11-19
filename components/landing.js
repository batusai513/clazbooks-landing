import React from 'react';
import PlayStoreIcon from './play-store-icon';
import AppleIcon from './apple-icon';

export default function Landing({ images }) {
  const mainImages = images['main-images'];
  const secondaryImages = images['secondary-images'];
  return (
    <React.Fragment>
      <section className="hero-section">
        <div className="mobile-video">
          <a href="https://vimeo.com/341077138" className="video-popup-btn  mobile-video-popup js-video-popup">
            <img src="static/img/play.svg" alt="" />
          </a>
        </div>

        <div className="background-part"></div>

        <a href="https://vimeo.com/341077138" className="video-popup-btn video-popup js-video-popup">
          <img src="static/img/play.svg" alt="" />
        </a>
        <div className="container">
          <div className="col-content">
            <div className="content">
              <h1 className="section-title">
                Más Que <br /> <span className="grey">Resúmenes</span>
              </h1>
              <p className="section-subtitle">
                Escucha los mejores libros y <strong>Best Sellers de</strong>{' '}
                <br /> <strong>Amazon</strong> y el{' '}
                <strong>New York Times</strong>
              </p>
              <a
                href="https://clazbooks.com/register"
                className="cta-button btn-empty">
                Gratis
              </a>
            </div>
          </div>
          <div className="col-grid">
            <div className="grid-wrapper">
              <div className="grid-scroll">
                <div className="grid-styled grid">
                  <div className="col-left">
                    {
                      mainImages.slice(0, Math.ceil(mainImages.length / 2)).map(image => {
                        return (
                          <div
                            key={image}
                            className="book-item"
                            style={{
                              backgroundImage: `url(${image})`,
                            }}></div>
                        )
                      })
                    }
                  </div>
                  <div className="col-right">
                  {
                    mainImages.slice(Math.ceil(mainImages.length / 2) + 1).map(image => {
                      return (
                        <div
                          key={image}
                          className="book-item"
                          style={{
                            backgroundImage: `url(${image})`,
                          }}></div>
                      )
                    })
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features-section">
        <div className="container">
          <div className="feature-item">
            <div className="icon-wrap">
              <img src="static/img/icons/feature-1.svg" alt="" />
            </div>
            <h2 className="feature-title">
              Más en <span className="grey">menos tiempo</span>
            </h2>
            <div className="description">
              Al punto y con precisión te enseñamos lo mejor.
            </div>
          </div>
          <div className="feature-item">
            <div className="icon-wrap">
              <img src="static/img/icons/feature-2.svg" alt="" />
            </div>
            <h2 className="feature-title">
              En <span className="grey">15 minutos</span>
            </h2>
            <div className="description">
              Aprende de los mejores libros de negocios, relaciones, autoayuda y
              más.
            </div>
          </div>
          <div className="feature-item">
            <div className="icon-wrap">
              <img src="static/img/icons/feature-3.svg" alt="" />
            </div>
            <h2 className="feature-title">
              En audio y <span className="grey">lectura</span>
            </h2>
            <div className="description">
              Disfruta de nuestro contenido en audio y lectura sin consumo de datos.
            </div>
          </div>
        </div>
      </section>

      <div className="sections-wrap">
        <section className="section-partners">
          <div className="container">
            <div className="content">
              <h3 className="section-title">
                Más <br />
                conocimiento <br />
                en menos tiempo
              </h3>
            </div>
          </div>
          <div className="part-partners">
            <div className="partner-label">De los más vendidos</div>
            <div className="partners-list">
              <a href="#">
                <img src="static/img/partners/amazon.svg" alt="" />
              </a>
              <a href="#">
                <img src="static/img/partners/usa-today.svg" alt="" />
              </a>
              <a href="#">
                <img src="static/img/partners/wsj.svg" alt="" />
              </a>
              <a href="#">
                <img src="static/img/partners/the-new-york-times.svg" alt="" />
              </a>
              <a href="#">
                <img src="static/img/partners/hbr.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="part-author">
            <div className="mobile-round"></div>
          </div>
        </section>

        <div className="round">
          <img src="static/img/jobs.png" alt="" />
        </div>

        <section className="section-bestsellers">
          <div className="books-grid">
            {
              secondaryImages.map(image => {
                return (
                  <div
                    key={image}
                    className="book-item"
                    style={{ backgroundImage: `url(${image})` }}></div>
                );
              })
            }
          </div>
          <div className="btn-flex">
            <a href="https://clazbooks.com/register" className="btn-empty">
              Gratis
            </a>
          </div>
        </section>
      </div>

      <section className="section-about">
        <div className="brain-part-animated"></div>
        <div className="container">
          <div className="brain-part">
            <img src="static/img/brain.svg" alt="" className="brain" />
          </div>
          <div className="content-part">
            <div className="content">
              <h3 className="section-title">
                Mejora tu salud mental, <br /> física y espiritual
              </h3>
              <p className="section-subtitle">
                Get the best ideas from leading business mavericks, health
                gurus, political pundits, and trailblazing scientists.
              </p>
              <div className="counters">
                <div className="counter">
                  <div className="counter-left">
                    <img src="static/img/arrow.svg" alt="" />
                  </div>
                  <div className="counter-part">
                    <div className="number">170</div>
                    <div className="label">Autores</div>
                  </div>
                </div>
                <div className="counter">
                  <div className="counter-left">
                    <img src="static/img/arrow.svg" alt="" />
                  </div>
                  <div className="counter-part">
                    <div className="number">200</div>
                    <div className="label">Libros</div>
                  </div>
                </div>
                <div className="counter">
                  <div className="counter-left">
                    <img src="static/img/arrow.svg" alt="" />
                  </div>
                  <div className="counter-part">
                    <div className="number">150</div>
                    <div className="label">Bestsellers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-contact">
        <div className="image-part"></div>
        <div className="content-part">
          <div className="content">
            <h3 className="section-title">
              ¡Empieza <span className="grey">ya mismo!</span>
            </h3>
            {/*<p className="section-subtitle">
              Get the best ideas from leading business mavericks, health gurus,
              political pundits, and trailblazing scientists.
                    </p>*/}
            <div className="btn-wrapper">
              <a href="https://clazbooks.com/register" className="btn-primary btn-large">
                Gratis
              </a>
            </div>
            <hr />
            <div className="socials-btn">
              <div className="btn-wrap">
                <a href="https://apps.apple.com/us/app/clazbooks-libros/id1224261279">
                  <span className="icon">
                    <AppleIcon />
                  </span>
                  <span className="label">App Store</span>
                  <span className="arrow">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 7.99998C11 7.82076 10.928 7.64156 10.7842 7.50493L6.25832 3.20514C5.97041 2.93162 5.50363 2.93162 5.21584 3.20514C4.92805 3.47855 4.92805 3.92193 5.21584 4.19548L9.22061 7.99998L5.21598 11.8045C4.92819 12.078 4.92819 12.5214 5.21598 12.7948C5.50377 13.0684 5.97055 13.0684 6.25846 12.7948L10.7844 8.49504C10.9281 8.35834 11 8.17914 11 7.99998Z"
                        fill="#1E1F20"
                      />
                    </svg>
                  </span>
                </a>
              </div>
              <div className="btn-wrap">
                <a href="https://play.google.com/store/apps/details?id=com.clazbooks.clazbooks&hl=en">
                  <span className="icon">
                    <PlayStoreIcon />
                  </span>
                  <span className="label">Google Play</span>
                  <span className="arrow">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 7.99998C11 7.82076 10.928 7.64156 10.7842 7.50493L6.25832 3.20514C5.97041 2.93162 5.50363 2.93162 5.21584 3.20514C4.92805 3.47855 4.92805 3.92193 5.21584 4.19548L9.22061 7.99998L5.21598 11.8045C4.92819 12.078 4.92819 12.5214 5.21598 12.7948C5.50377 13.0684 5.97055 13.0684 6.25846 12.7948L10.7844 8.49504C10.9281 8.35834 11 8.17914 11 7.99998Z"
                        fill="#1E1F20"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
