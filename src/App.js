import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import i1Image from './i1.png';
import i2Image from './i2.jpeg';
import i3Image from './i3.jpeg';
import i4Image from './i4.png';
import i5Image from './i5.jpeg';
import './Contact.css'; // Import CSS file for styling
import SurveyForm from './SurveyForm'; // Import the SurveyForm component
import './SurveyForm.css';

function Home() {
  return (
    <div className="home-container">
      <section className="section-a">
        <div className="section-content">
          <h2>Educating about Personal Health Tracking Devices</h2>
          <p>
            Our focus is on the tracking of personal health data through wearable personal health devices and the storage of this health data by larger tech companies. In recent history, and especially with the onset of the COVID-19 Pandemic, the use of personal health-tracking devices has increased dramatically.
          </p>
          <img src={i1Image} alt="Health Tracking 1" style={{ maxWidth: '600px' }} /> {/* First image after the first paragraph */}
          <p>
            Tracking one’s day-to-day health can have many benefits, however, several ethical concerns can arise, especially related to privacy. A significant amount of user data is collected by these devices, all of which must be handled and stored somewhere. In addition to this, issues on the ability to control one’s data also come up, specifically with controlling access and use by third parties.
          </p>
          <img src={i3Image} alt="Health Tracking 2" style={{ minWidth: '500px' }} /> {/* Second image after the second paragraph */}
          <p>
            Since Personal Health Monitoring [PHM] devices have recently gained tremendous popularity, it is sometimes unclear the extent to which existing laws cover the technology used in PHM devices and the data that is collected.
          </p>
          <img src={i2Image} alt="Health Tracking 3" style={{ minWidth: '400px' }} /> {/* Third image after the third paragraph */}
          <p>
            Because there is so much data, where is the line between “personal data” that might be subject to additional regulations, as opposed to general technical data? Since this distinction isn’t clear, “the possibility of misuse or undesired access to personal data is raised. This could be a significant ethical issue following widespread implementation of PHM”(Mittelstadt 3). Personal information falling into the wrong hands is a major ethical concern, so it is crucial that as the use of PHM devices increases, safeguards are put in place to protect.
          </p>
        </div>
      </section>
    </div>
  );
}






function About() {
  return (
    <div className="about-container">
       <div className="discussion">
            <h2>Provoke critical thinking about this technology’s design and/or use, including its social impacts and ethical implications</h2>
            <div className="discussion-content">
                <p>Personal health monitoring devices make it very convenient to track your health metrics and daily activity. Seeing celebrities or being around a significant amount of people using these devices could create an expectation that you should be using one. People who have certain medical conditions or are at high risk may feel more pressure to track their health or invest in PHM devices.</p>
                <p>This could create an addiction/obsession with getting your daily fitness to a certain level, no matter what, leading to negative feelings, reactions, and effects on mental health when these goals are not met. If people choose to discuss their health data and activity levels, judgment or internal conflicts could occur if individuals perform a higher level of activity than you.</p>
                <p>Many devices are not covered through insurance and must be purchased for personal use, which can lead to ethical issues when individuals who are in a lower economic status or those who don’t have access to such devices want to track their health data and daily activity. Certain groups could be disproportionately affected.</p>
            </div>
        </div>
        <SurveyForm />
    </div>
  );
}

function Contact() {
  return (
    <div className="contact-container">
      <section className="section-c">
        <div className="section-content">
          <h2>Inspiring Reflection on Data Privacy</h2>
          <p>
            One of the biggest challenges to maintaining data privacy and security is the scope of current laws. HIPAA is regarded as the cornerstone for protecting the privacy of health information, and combined with subsequent laws, has an extremely wide scope of coverage.
          </p>
          <img src={i4Image} alt="Health Tracking 3" style={{ maxWidth: '500px' }} /> {/* Third image after the third paragraph */}
          <p>
            Over the past several years, however, the digitization of health data has significantly increased, especially with the rise in the use of personal health monitoring devices. With this, the extent to which these laws cover the transition of medical data and healthcare into digital mediums is rather limited.
          </p>
          <img src={i5Image} alt="Health Tracking 3" style={{ maxWidth: '500px' }} /> {/* Third image after the third paragraph */}
          <p>
            Because of this, “With the implementation of digital health tools such as patient portals, health information exchanges, genomic registries, wearables, and mobile health applications, a void in the protection of health data emerged”(Theodos). With previous legislation not always containing the verbiage needed to handle the issues with new technologies, new legislation needs to constantly be added in order to keep up with the ever-changing technologies.
          </p>
          <h3>Learn About the Biggest Laws In Place Today</h3>
          {/* First disclosure group for HIPAA */}
          <details className="rounded-details">
            <summary>HIPAA</summary>
            <p>Detailed information about HIPAA...</p>
          </details>
          {/* Second disclosure group for GDPR */}
          <details className="rounded-details">
            <summary>GDPR</summary>
            <p>Detailed information about GDPR...</p>
          </details>
          {/* Third disclosure group for CCPA */}
          <details className="rounded-details">
            <summary>CCPA</summary>
            <p>Detailed information about CCPA...</p>
          </details>
        </div>
      </section>
    </div>
  );
}


// Navigation component
function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Learn</Link>
        </li>
        <li>
          <Link to="/apply">Apply</Link>
        </li>
        <li>
          <Link to="/inspire">Legislation</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <Navbar />
        {/* Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<About />} />
          <Route path="/inspire" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

