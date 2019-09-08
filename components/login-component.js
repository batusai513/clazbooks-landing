import React from 'react';
import useForm from 'react-hook-form';
import http from '../utils/http';

export default function LoginComponent() {
  const { register, handleSubmit, errors } = useForm();
  function onSubmit(data) {
    http.post('/users/auth/sign_in', data).then(res => {
      console.warn(res);
    });
  }
  return (
    <div className="onepage-template">
      <div className="auth-template">
        <div className="columns-wrap">
          <div className="col-form">
            <form
              id="login-form"
              className="auth-form"
              onSubmit={handleSubmit(onSubmit)}>
              <h2 className="form-title">Iniciar sesión</h2>

              <div className="form-group">
                <label htmlFor="email">Escribe tu email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  ref={register}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Escribe tu clave</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  ref={register}
                  required
                />
              </div>

              <div className="form-group submit-group">
                <button type="submit">
                  <span className="icon">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.5 12.5C16.5 12.2849 16.416 12.0699 16.2483 11.9059L10.968 6.74617C10.6321 6.41794 10.0876 6.41794 9.75181 6.74617C9.41606 7.07426 9.41606 7.60632 9.75181 7.93458L14.424 12.5L9.75198 17.0654C9.41623 17.3936 9.41623 17.9256 9.75198 18.2537C10.0877 18.5821 10.6323 18.5821 10.9682 18.2537L16.2484 13.094C16.4162 12.93 16.5 12.715 16.5 12.5Z"
                        fill="#1E1F20"
                      />
                    </svg>
                  </span>
                  <span className="label">Iniciar Session</span>
                </button>
                <a href="#" className="reset-password">
                  Quiero recuperar mi clave
                </a>
              </div>

              <hr />

              <div className="form-group socials-group">
                <label>O iniciar sesion con:</label>
                <div className="btns-wrap">
                  <a href="#" className="google-plus">
                    <span className="icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                          fill="#DC4E41"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.64458 5.84638C5.44344 5.87251 3.51737 7.88676 3.60089 10.0664C3.5642 11.8303 4.79004 13.5136 6.4757 14.0624C8.06401 14.5913 10.0164 14.1956 11.0732 12.8475C11.845 11.903 12.0201 10.6437 11.9366 9.46699C10.7275 9.45627 9.51832 9.45826 8.31059 9.46024C8.15985 9.46049 8.00914 9.46074 7.85844 9.46096C7.85642 9.94031 7.85844 10.4178 7.86046 10.8972L7.86047 10.8999C8.31091 10.9123 8.7614 10.9147 9.21188 10.9171C9.57583 10.9191 9.93978 10.9211 10.3037 10.9282C10.0981 11.6265 9.62965 12.2764 8.9191 12.5286C7.54687 13.128 5.79594 12.3449 5.36416 10.918C4.84277 9.55179 5.69602 7.90285 7.10494 7.50518C7.97847 7.20054 8.87836 7.54356 9.62577 7.99367C10.0043 7.64243 10.3586 7.26725 10.7069 6.88768C9.85789 6.18336 8.76645 5.75153 7.64458 5.84638ZM15.795 8.24989H14.5838C14.5795 8.65157 14.5755 9.05526 14.5734 9.45657C14.1664 9.46059 13.7611 9.4626 13.3559 9.46462V10.6675C13.411 10.6678 13.4662 10.6681 13.5214 10.6683C13.8719 10.6702 14.2235 10.6721 14.5734 10.6757C14.5757 10.8859 14.5767 11.0961 14.5778 11.3066C14.5787 11.4983 14.5797 11.6902 14.5815 11.8826C14.7157 11.8826 14.8502 11.8823 14.9848 11.8821C15.2545 11.8817 15.5248 11.8812 15.795 11.8826L15.7956 11.7869C15.7976 11.4154 15.7996 11.0455 15.8033 10.6737L17.0209 10.6676V9.4648L17.0147 9.46477C16.6115 9.46277 16.2063 9.46076 15.8033 9.45676C15.8022 9.25603 15.8007 9.05476 15.7992 8.85347C15.7977 8.65212 15.7962 8.45075 15.795 8.24989Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <span className="label">Google</span>
                  </a>
                  <a href="#" className="facebook">
                    <span className="icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM11.1124 5L12.3117 5.00208C12.4157 5.00229 12.5 5.09353 12.5 5.20599V6.73257C12.5 6.84514 12.4156 6.93648 12.3115 6.93648L11.5036 6.93679C10.9467 6.93679 10.8448 7.17149 10.8448 7.63381V8.59571H12.2551C12.3052 8.59571 12.3533 8.61724 12.3886 8.65552C12.4239 8.69381 12.4438 8.74562 12.4438 8.79972L12.4432 10.4438C12.4432 10.5564 12.3589 10.6477 12.2547 10.6477H10.8448V14.7961C10.8448 14.9087 10.7604 15 10.6562 15H9.08296C8.97877 15 8.89439 14.9088 8.89439 14.7961V10.6477H7.68857C7.58447 10.6477 7.5 10.5564 7.5 10.4438V8.79972C7.5 8.68705 7.58438 8.59571 7.68857 8.59571H8.89439V7.46101C8.89439 5.96595 9.7651 5 11.1124 5Z"
                          fill="#6243F4"
                        />
                      </svg>
                    </span>
                    <span className="label">Facebook</span>
                  </a>
                </div>
              </div>

              <div className="cta">
                Soy Nuevo?{' '}
                <a href="https://clazbooks.com/register">Crear una cuenta</a>
              </div>
            </form>
          </div>
          <div className="col-grid">
            <div className="grid-wrapper">
              <div className="grid-scroll">
                <div className="grid-styled grid">
                  <div className="col-left">
                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/1.png)',
                      }}></div>
                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/3.png)',
                      }}></div>
                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/5.png)',
                      }}></div>
                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/7.png)',
                      }}></div>

                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/1.png)',
                      }}></div>
                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/3.png)',
                      }}></div>
                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/5.png)',
                      }}></div>
                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/7.png)',
                      }}></div>

                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/1.png)',
                      }}></div>
                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/3.png)',
                      }}></div>
                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/5.png)',
                      }}></div>
                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/7.png)',
                      }}></div>
                  </div>
                  <div className="col-right">
                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/2.png)',
                      }}></div>
                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/4.png)',
                      }}></div>
                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/6.png)',
                      }}></div>
                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/8.png)',
                      }}></div>

                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/2.png)',
                      }}></div>
                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/4.png)',
                      }}></div>
                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/6.png)',
                      }}></div>
                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/8.png)',
                      }}></div>

                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/2.png)',
                      }}></div>
                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/4.png)',
                      }}></div>
                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/6.png)',
                      }}></div>
                    <div
                      className="book-item"
                      style={{
                        backgroundImage: 'url(static/img/book/8.png)',
                      }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
