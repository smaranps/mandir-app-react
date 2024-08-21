import { useState } from "react";
import "./search.css";

function Search() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);
  const [showMenu, setShowMenu] = useState("block");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    setOutput(input);
  };
  const toggleMenu = () => {
    if (showMenu == "none") {
      setShowMenu("block");
    } else {
      setShowMenu("none");
    }
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      {/* Bootstrap CSS */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />
      {/* Optional JavaScript */}
      {/* jQuery first, then Popper.js, then Bootstrap JS */}

      <div className="bg_nav">
        <div className="navbar">
          <a href="mandirIndex.html">
            <div className="logo">
              <img
                className="resp"
                src="https://www.theshirdisaimandir.ca/wp-content/uploads/2022/09/logo-new2.png"
              />
            </div>
          </a>
          <div className="menu" onClick={toggleMenu} id="menu">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
          <div>
            <label>
              <marquee className="mrq">
                Next Upcoming event: Sai Sandhya - Bhajans by Rana Gill on Aug
                09, 2024
              </marquee>
            </label>
            <br />
            <label id="lbl">The Shiridi Sai Mandir and Cultural Center</label>
          </div>
          <br />
        </div>
      </div>
      <div className="seperate">
        <div
          className="NAVlinks"
          style={{
            marginLeft: showMenu == "block" ? "50%" : "100%",
            display: "block",
            transition: "1s",
          }}
          id="NAVlinks"
        >
          <ul id="ulNav">
            <div id="secParent">
              <a href="MandirHome">
                <i className="fa-solid fa-house" />
              </a>
              <button
                onClick={toggleMenu}
                style={{ backgroundColor: "#ffa550", border: "none" }}
                id="BTon"
              >
                <i class="fa-solid fa-xmark fa-2xl"></i>
              </button>
            </div>

            <li>
              <div className="dropdown">
                <button>About us ⌄</button>
                <div className="content">
                  <a href="#">Our story</a>
                  <a href="#">Mandir</a>
                  <a href="#">History</a>
                  <a href="#">Contact Us</a>
                </div>
              </div>
            </li>
            <li>
              <a href="payment">Donate</a>
            </li>
            <li>
              <div className="dropdown">
                <button>Events ⌄</button>
                <div className="content">
                  <a href="#">Upcoming Events</a>
                  <a href="#">Calendar</a>
                </div>
              </div>
            </li>
            <li>
              <a href="#">Photo Gallery</a>
            </li>
            <li>
              <a href="#">General Information</a>
            </li>
            <li>
              <div className="dropdown">
                <button>Online Services ⌄</button>
                <div className="content">
                  <a href="#">Garlands for Baba</a>
                  <a href="#">Padukas at worship for home</a>
                  <a href="#">Offering Shawl</a>
                  <a href="#">Offering Prasad</a>
                  <a href="#">Anadhaan</a>
                  <a href="#">Volunteer at Baba's Mandir</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <br />
      <br />
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        data-interval={3000}
      >
        <ol style={{ zIndex: 1 }} className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          <li data-target="#carouselExampleIndicators" data-slide-to={3} />
          <li data-target="#carouselExampleIndicators" data-slide-to={4} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://sai.org.in/sites/default/files/NOV23SLIDER3.png"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://sai.org.in/sites/default/files/NOV23SLIDER1.png"
              alt="Second slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Upcoming Events</h5>
              <p>
                Sri Sai Satcharita Parayan Sat, Aug 10, 2024 9:00 am. Sri Sai
                Naam
              </p>
              <p>Puja Sat, Aug 17, 2024 9:00 am.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://sai.org.in/sites/default/files/NOV23SLIDER2.png"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://sai.org.in/sites/default/files/NOV23SLIDER5.png"
              alt="Fourth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://sai.org.in/sites/default/files/saifollowus0423.png"
              alt="Fifth slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <br />
      <div id="row">
        <div
          className="card"
          style={{
            backgroundImage:
              "url(https://www.transparentpng.com/download/scroll/scroll-paper-old-transparent-png-3.png)",
            backgroundColor: "transparent",
            width: "238px",
            backgroundSize: "cover",
            padding: "10px",
            textAlign: "center",
            height: "333px",
          }}
        >
          <br />
          <br />
          <h3 style={{ fontSize: "x-large" }}>Our Timings</h3>
          <marquee
            behavior="scroll"
            direction="up"
            scrollamount={2}
            style={{
              fontWeight: "normal",
              fontSize: "x-small",
              color: "#000000",
              fontFamily: "Verdana, Arial, Helvetica, sans-serif",
              textAlign: "center",
            }}
          >
            10:00 AM: OPEN TEMPLE <br />
            11:00 AM CONTENT 1 <br />
            12:00 PM AFTERNOON AARTI
            <br />
            1:00PM CONTENT 2 <br />
            2:00PM CONTENT 3 <br />
            4:00PM CONTENT 4 <br />
            5:00PM CONTENT 5 <br />
            6:00PM CONTENT 6 <br />
            7:00PM CLOSE
          </marquee>
        </div>
        <div className="card">
          <br />
          <br />
          <h2 style={{ fontSize: "x-large" }}>Upcoming Events</h2>
          <marquee behavior="scroll" direction="up" scrollamount={2}>
            <ul
              style={{
                listStyle: "none",
                textAlign: "center",
                fontSize: "x-small",
                margin: "auto",
                fontFamily: "Verdana, Arial, Helvetica, sans-serif",
              }}
            >
              <li>
                - Sai Sandhya Bhajans by Rana Gill Fri, Aug 9, 2024 6:30 pm
                onwards.
              </li>
              <li>- Sri Sai Satcharita Parayan Sat, Aug 10, 2024 9:00 am.</li>
              <li>- Sri Sai Naam Puja Sat, Aug 17, 2024 9:00 am.</li>
              <li>- Sri Sai Vrat Puja Sat, Aug 24, 2024 9:00 am.</li>
              <li>
                - Ras Garba (Janmashtami) Sat, Aug 24, 2024 9:00 pm onwards
              </li>
              <li>
                - Annakut Sat, Aug 31, 2024 3:00 pm to 8:00 pm (Click to
                register)
              </li>
              <li>- Gopal Kala Sat, Aug 31, 2024 8:30 pm onwards</li>
            </ul>
          </marquee>
        </div>
        <div
          className="card"
          style={{
            borderRadius: "5px",
            fontSize: "small",
            textAlign: "center",
          }}
        >
          <br />
          <br />
          <h2 style={{ fontSize: "x-large", textAlign: "center" }}>
            Notice to Devotees
          </h2>
          <br />
          <marquee behavior="scroll" direction="up" scrollamount={2}>
            <ul
              style={{
                listStyle: "none",
                textAlign: "center",
                fontSize: "x-small",
                fontFamily: "Verdana, Arial, Helvetica, sans-serif",
              }}
            >
              <li>
                - Fresh Prasad is cooked at the Mandir daily and distributed to
                devotees.
              </li>
              <li>
                - Take one prasad container per person and do not waste Prasad.
              </li>
              <li>
                - Park vehicles on the Mandir parking lot behind Sun City Plaza.
              </li>
              <li>
                - Do not throw garbage in the Mandir complex and parking area.
              </li>
              <li>
                - Click here to download 2024 Mandir Calendar in PDF format.
              </li>
            </ul>
          </marquee>
        </div>
      </div>
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Our Location:</h1>
      <br />
      <p>
        The Shirdi Sai Mandir, the Shirdi of North America, is conveniently
        located at 2721 Markham Road in Toronto, ON just north of Finch Road and
        Markham Road. Baba’s Mandir is spread across 4 units (6,7, 8 and 9) with
        a total area of approximately 8,000 square feet.
      </p>
      <br />
      <br />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5757.389040367514!2d-79.24723352391744!3d43.82069544158175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d6d5ee56dbcd%3A0xe208c24327524f2c!2sThe%20Shirdi%20Sai%20Mandir%20and%20Cultural%20Centre!5e0!3m2!1sen!2sca!4v1723320524735!5m2!1sen!2sca&z=15"
        width="100%"
        height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <br />
      <br />
      <div className="i0m">
        <div
          style={{
            color: "black",
            textDecoration: "none",
            marginLeft: "20%",
            marginBottom: "5%",
            textAlign: "center",
          }}
        >
          <h2>Quick Links</h2>
          <br />
          <p>Here are a few Quick Links:</p>
          <a href="#">Online Activities</a>
          <br />
          <br />
          <a href="#">Garlands</a>
          <br />
          <br />
          <a href="#">Paduka Booking</a>
          <br />
          <br />
          <a href="#">Online Activities</a>
          <br />
          <br />
          <a href="#">Shawl Booking</a>
          <br />
          <br />
          <a href="#">Prasad Booking</a>
          <br />
          <br />
          <a href="#">
            <i className="fa-solid fa-circle-dollar-to-slot fa-2xl" /> Donate
          </a>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2>Reach us on:</h2>
          <p>
            <i className="fa-solid fa-phone fa-2xl" /> Phone number
          </p>
          <p>
            <i className="fa-solid fa-envelope fa-2xl" /> Email account
          </p>
          <p>
            <i className="fa-brands fa-square-whatsapp fa-2xl" /> Whatsapp
            Number
          </p>
          <p>
            <i className="fa-solid fa-location-dot fa-2xl" /> Location here
          </p>
          <p>
            <i className="fa-solid fa-user fa-2xl" /> Important Person 1
          </p>
          <p>
            <i className="fa-solid fa-user fa-2xl" /> Important Person 2
          </p>
          <p>
            <i className="fa-solid fa-user fa-2xl" /> Important Person 3
          </p>
          <p>
            <i className="fa-solid fa-user fa-2xl" /> Important Person 4
          </p>
        </div>
        <div style={{ textAlign: "center", marginRight: "15%" }}>
          <h2>Follow Us:</h2>
          <br />
          <p>You can follow us on:</p>
          <br />
          <p>
            <i className="fa-brands fa-square-instagram fa-2xl" />{" "}
            @instagram_user
          </p>
          <p>
            <i className="fa-brands fa-x-twitter fa-2xl" /> @X_Twitter_user
          </p>
          <p>
            <i className="fa-brands fa-square-facebook fa-2xl" /> @Facebook_user
          </p>
          <p>
            <i className="fa-brands fa-youtube fa-2xl" /> @Youtube_channel
          </p>
          <p>
            <i
              style={{ color: "#000000" }}
              className="fa-brands fa-app-store-ios fa-2xl"
            />
            IOS Application
          </p>
          <p>
            <i
              style={{ color: "#000000" }}
              className="fa-brands fa-google-play fa-2xl"
            />
            Android Application
          </p>
          <p>
            <i className="fa-solid fa-location-dot fa-flip-horizontal fa-2xl" />
            Address here
          </p>
        </div>
        <br />
      </div>
      <p style={{ textAlign: "center" }}>
        Copyright© 2024 The Shirdi Sai Mandir And Cultural Centre. All rights
        reserved
      </p>
    </div>
  );
}

export default Search;
