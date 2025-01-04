import React, { useState } from 'react';
import './footer.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleJoinUsClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="T">
      <footer className="bg-mode pt-5 pb-4">
        <div className="container text-md-left">
          <div className="row text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <div className="text-black-50 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="bi my-bi bi-megaphone-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
                </svg>
                <p className="mt-3">
                  Match way these she avoids seeing death their fat off.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="mb-4 font-weight-bold ">Download</h5>
              <p className="text-black-50">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-globe"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472M3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                </svg>
                Web Browser
              </p>
              <p className="text-black-50">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-windows"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.555 1.375 0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16z" />
                </svg>
                Windows
              </p>
              <p className="text-black-50">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-apple"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                </svg>
                macOs
              </p>
              <p className="text-black-50">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-phone"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>
                IOS &amp; Andriod
              </p>
            </div>


            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="mb-4 font-weight-bold">About</h5>
              <p>

<a
  href="#"
  className="text-black-50"
  style={{ textDecoration: "none" }}
>

  About social
</a>
</p>
<p>

<a
  href="#"
  className="text-black-50"
  style={{ textDecoration: "none" }}
>

  Security
</a>
</p>
<p>

<a
  href="#"
  className="text-black-50"
  style={{ textDecoration: "none" }}
>

  Customer Support
</a>
</p>
<p>

<a
  href="#"
  className="text-black-50"
  style={{ textDecoration: "none" }}
>

  Partners
</a>
</p>
              <p>
                <button
                  className="btn btn-primary"
                  onClick={handleJoinUsClick}
                >
                  Join Us!
                </button>
              </p>
              {showInfo && (
                <div className="mt-3">
                  <p>We are a passionate team of developers creating amazing web experiences. Contact us at: +970598242414</p>
                </div>
              )}

            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="mb-4 font-weight-bold ">Resources</h5>
             <p>

                <a
                  href="#"
                  className="text-black-50"
                  style={{ textDecoration: "none" }}
                >

                  Help Center
                </a>
              </p>
              <p>

                <a
                  href="#"
                  className="text-black-50"
                  style={{ textDecoration: "none" }}
                >

                  Developers
                </a>
              </p>
              <p>

                <a
                  href="#"
                  className="text-black-50"
                  style={{ textDecoration: "none" }}
                >

                  Status
                </a>
              </p>
              <p>

                <a
                  href="#"
                  className="text-black-50"
                  style={{ textDecoration: "none" }}
                >

                  Communities
                </a>
              </p>
            </div>


            <div>
              <hr className="mb-4" />
              <div className="d-flex justify-content-between align-items-center">
                <ul className="text-black-50 nav justify-content-end">
                  <li style={{ marginRight: '15px', display: 'inline-block' }}>
                    Support
                  </li>
                  <li style={{ marginRight: '15px', display: 'inline-block' }}>
                    Docs
                  </li>
                  <li style={{ marginRight: '15px', display: 'inline-block' }}>
                    Terms of Use
                  </li>
                  <li style={{ marginRight: '15px', display: 'inline-block' }}>
                    Privacy & Terms
                  </li>
                </ul>

                <div>
                  <FaFacebook size={20} style={{ marginRight: '10px' }} />
                  <FaInstagram size={20} />
                </div>

                <p style={{ display: 'inline-block', color: 'gray' }}>
                  2024 proteinweb All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
