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
          <h2 >Educating about Personal Health Tracking Devices</h2>
          <p>
            Our focus is on the tracking of personal health data through wearable personal health devices and the storage of this health data by larger tech companies. In recent history, and especially with the onset of the COVID-19 Pandemic, the use of personal health-tracking devices has increased dramatically.
          </p>
          <img src={i1Image} alt="Health Tracking 1" style={{ maxWidth: '600px' }} /> {/* First image after the first paragraph */}
          <p>
            Tracking one’s day-to-day health can have many benefits, however, several ethical concerns can arise, especially related to privacy. A significant amount of user data is collected by these devices, all of which must be handled and stored somewhere. In addition to this, issues on the ability to control one’s data also come up, specifically with controlling access and use by third parties.
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5crW07yPv4s"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>
            Since Personal Health Monitoring [PHM] devices have recently gained tremendous popularity, it is sometimes unclear the extent to which existing laws cover the technology used in PHM devices and the data that is collected.
          </p>
          <img src={i2Image} alt="Health Tracking 3" style={{ maxWidth: '600px' }} /> {/* Third image after the third paragraph */}
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
      <h2 style={{ fontSize: 35, color: 'white' }}>Provoking critical thinking and ethical implications</h2>

      <div style={{backgroundColor:"#B9CFF0"}}className="discussion">
      <div>
  <p className="ui-paragraph">Personal health monitoring devices make it very convenient to track your health metrics and daily activity. Seeing celebrities or being around a significant amount of people using these devices could create an expectation that you should be using one. People who have certain medical conditions or are at high risk may feel more pressure to track their health or invest in PHM devices.</p>
  <p className="ui-paragraph">This could create an addiction/obsession with getting your daily fitness to a certain level, no matter what, leading to negative feelings, reactions, and effects on mental health when these goals are not met. If people choose to discuss their health data and activity levels, judgment or internal conflicts could occur if individuals perform a higher level of activity than you.</p>
  <p className="ui-paragraph">Many devices are not covered through insurance and must be purchased for personal use, which can lead to ethical issues when individuals who are in a lower economic status or those who don’t have access to such devices want to track their health data and daily activity. Certain groups could be disproportionately affected.</p>
  <p className="ui-paragraph">Additionally, “people living in overcrowded homes may lack privacy or, as with underhoused and homeless populations, may not have access to digital health solutions at all”(Crawford). With the implementation of PHM devices, several social and ethical implications must be considered. Nearly every stakeholder is affected, from the manufacturer, to the consumer, and especially the prospective consumer.</p>
</div>

      </div>
      <SurveyForm />
    </div>
  );
}

function Sources() {
  return (
    <div style={{padding:20}}>
      <h2>Annotated Bibliography</h2>
      <div className="source rounded-details">
        <h3>Theodos, K., & Sittig, S. (2020). Health Information Privacy Laws in the Digital Age: HIPAA Doesn't Apply. Perspectives in health information management, 18(Winter), 1l. <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7883355/">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7883355/</a></h3>
        <p>The main argument of the source is that the current privacy laws in healthcare do not always apply in the digital age we live in now. HIPAA can be sometimes outdated and does not always contain the verbiage needed to handle the issues new technologies bring with them. It implies that new legislation needs to constantly be added in order to keep up with the ever-changing technologies. The author says that it is actually the patients who are the ones that face the consequences of the lack of urgency to update these laws. This source was written from a perspective of informing people on the current situation and pleading with people in the healthcare space to do better. The intended audience appears to be people in healthcare and even the policymakers that can have an impact on the laws. A strength of the article is that the author did a good job of explaining a very difficult concept in an understandable way. However, weaknesses may include that this article was not long enough to really dive into the history of these laws and provide the full context on the situation.</p>
      </div>
      <div className="source rounded-details">
        <h3>Cohen, I. (2018, July 17). HIPAA and protecting health information in the 21st Century. JAMA. <a href="https://jamanetwork.com/journals/jama/fullarticle/2682916">https://jamanetwork.com/journals/jama/fullarticle/2682916</a></h3>
        <p>The source discusses the evolving landscape of healthcare and information privacy, particularly since the emergence of online health technologies and big data. This source talks about the current relationship between healthcare and data security. Especially, how there has been a need for regulation in the last decade. Similar to the other source, this author believes that HIPAA solves some issues but does not properly cover the new challenges faced through big data. The article then pitches a few potential improvements that could be made to HIPAA. It is written from the perspective of trying to convince people that there is a need for more regulation to protect health-related information exchanged on places like social media platforms and online marketplaces. The author did a good job of showing their bias. The sponsors were even shown at the end of the article. A weakness of the article was that it did not give any personal testimonies of how these laws hurt real people. It was easy to read the statistics, but I believe it would have been a lot more powerful if a few different people affected by the situation were interviewed.</p>
      </div>
      <div className="source rounded-details">
        <h3>Mittelstadt, B., Fairweather, B., Shaw, M., & McBride, N. (2011, June 20). Ethical issues of Personal Health Monitoring: A literature review. Oxford University Research Archive. <a href="https://ora.ox.ac.uk/objects/uuid:42750043-4286-4258-ac93-c6c7768855cd">https://ora.ox.ac.uk/objects/uuid:42750043-4286-4258-ac93-c6c7768855cd</a></h3>
        <p>This source takes a deep dive into the previous research done on personal health monitoring and the ethics surrounding it. It argues that more research needs to be done on certain themes and issues surrounding personal health monitoring to best preserve the relationships between people and medical professionals. This literature review was completed by examining academic literature that was publicly available across four different scholarly databases, identifying any discussion of ethical issues in each article, categorizing their arguments, and tracking their main themes. Over a year-long process, the authors utilized the searching of databases, manual journal searching, and research presentations to complete their study. It is written from the perspective of trying to identify gaps in medical research that has been completed and its relation to ethics, since the authors placed an emphasis on the themes and ideas that they found to be lacking, rather than what they found an abundance of. This source appears to be written for both the general public and public health researchers; the authors do a good job of explaining the findings and their importance in a way that can be easily understood and raise awareness of the issues, however, the way in which they frame some of their arguments is geared more towards academic researchers who would have the ability to act upon the research “gaps” identified by the authors. This source has strengths in the sense that it considers a significant amount of prior research papers, publications, and studies to encompass as many points of view and arguments as possible, however, one possible weakness it has is that the arguments are formed purely based on information found in scholarly papers and publications that were searched for - they did not complete outside research, have their own focus group, etc., which could result in the authors collecting an abundance of articles with certain themes or points of view, rather than a thorough distribution and balance.</p>
      </div>
      <div className="source rounded-details">
        <h3>Hagen, G., Noel, M., Dobson, K., Yeates, K., & Kwan, V. (2017, March 1). Healthcare at Your Fingertips: The Professional Ethics of Smartphone Health-Monitoring Applications. Taylor & Francis Online. <a href="https://www.tandfonline.com/doi/full/10.1080/10508422.2017.1285237">https://www.tandfonline.com/doi/full/10.1080/10508422.2017.1285237</a></h3>
        <p>This source argues that there is an excess of health apps and programs that are easily accessible to the general public, and that these apps lack the proper guidance to help people decide whether they are safe and will actually lead to any real benefits. This article uses the Canadian Code of Ethics, several consumer health apps/programs, and outside research to formulate its arguments and it has a holistic set of findings; the source is able to identify several possible benefits to using health-monitoring apps, such as reducing the need to rely on episodic memory, being able to precisely record information on fluctuating symptoms, and making it easier to analyze patterns of symptoms. On the other hand, it also identifies several risks, such as the fact that increased attention to one’s body can result in overreporting symptoms, many of the health apps out there have no medical professional connection, and that many apps access much more personal information than is needed, leading to significant data privacy concerns. This paper is written with the perspective and goal of educating the general public more on available health apps and their associated benefits and risks. The source doesn’t formulate an argument as to whether these health-monitoring apps should or should not be used, but rather, it highlights the ethical issues and necessary considerations to make in an individual level when deciding whether to use a health-monitoring app. One main strength of this article is that it considers multiple points of view to best educate the audience. Its goal is to educate and inform, rather than argue and isolate, which can make it more attractive to readers. One potential weakness, however, is that it could be difficult to use as a reference when formulating an argument. This source contains significant commentary on the risks and benefits of health-monitoring apps and considerations that users should take, so it could be difficult to use it to support one argument when it could also be used to refute the same argument and support another.</p>
      </div>
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

          
          <div className="split-paragraphs">
        <div>
          <p>In addition to these challenges, various problems can arise from personal health data that is being put on the internet by an individual, either without the knowledge of how it can connect to their health, or being completely unaware that they are doing it. For example, making a social media post about a health concern introduces that data to the internet, and online purchases or search engine use relating to a medical condition can put your health data on the internet without your knowledge. User-generated information is dramatically increasing, especially with the use of PHM devices, less and less of which is covered by HIPAA. </p>
        </div>
        <div>
          <p>Furthermore, laws could be put in place to protect medical information from being shared on platforms such as social media or online marketplaces, however, over-restrictive laws could lead to additional ethical issues related to internet access. Personal responsibility remains the most effective way to ensure that sensitive medical data is not being shared on the internet, such that it does not end up in the hands of someone with malicious intent. This kind of data, which “can come from well-known sources, such as apps, social media, and life insurers, but some information derives from less obvious places, such as credit card companies, supermarkets, and search engines”(Cohen), poses significant social and ethical concerns for the user. Without any safeguards in place, it is very easy for someone to share medical data about themselves, which is why it is incredibly important to stop and think about what will be shared before actually doing it.</p>
        </div>
      </div>
          

          <h3>Learn About the Biggest Laws In Place Today</h3>
          {/* First disclosure group for HIPAA */}
          <details className="rounded-details">
  <summary style={{ textAlign: 'left' }}>HIPAA</summary>
  <ul style={{ textAlign: 'left' }}>
    <li style={{ marginBottom: '10px' }}>Created to increase the portability of health insurance between jobs and prohibit practices that denied or limited access to health care benefits</li>
    <li style={{ marginBottom: '10px' }}>Enacted tougher penalties for fraud and abuse of healthcare funds</li>
    <li style={{ marginBottom: '10px' }}>Applies to health plans and healthcare providers that transmit information electronically</li>
    <li>Insurance companies that pay for medical care or equipment secondary to primary insurance are NOT covered</li>
  </ul>
</details>

<details className="rounded-details">
  <summary style={{ textAlign: 'left' }}>GDPR</summary>
  <ul style={{ textAlign: 'left' }}>
    <li style={{ marginBottom: '10px' }}>Ensures that the personal data of European Union “data subjects” is better protected</li>
    <li style={{ marginBottom: '10px' }}>Data subjects are EU citizens or other nationals who are physically present in the EU when data is collected</li>
    <li style={{ marginBottom: '10px' }}>Personal data includes names, dates of birth, telephone numbers, addresses, photographs, audio/visual recordings of an individual, bank details, opinions, passport numbers, and location data</li>
    <li style={{ marginBottom: '10px' }}>Anonymous data that cannot be tied to a data subject is not covered</li>
    <li style={{ marginBottom: '10px' }}>GDPR stipulates that personal data must only be stored for the time taken to achieve the purpose for which the data was collected and that personal data cannot be stored indefinitely</li>
    <li>Personal data may no longer be protected by GDPR in cases such as defense concerns, crime prevention, prosecution of a crime, or public health concerns</li>
  </ul>
</details>

<details className="rounded-details">
  <summary style={{ textAlign: 'left' }}>CCPA</summary>
  <ul style={{ textAlign: 'left' }}>
    <li style={{ marginBottom: '10px' }}>
      Defines personal information as “information that identifies, relates to, describes, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or household”
    </li>
    <li style={{ marginBottom: '10px' }}>
      Applies to any for-profit business that does business in the State of California
    </li>
  </ul>
  <u style={{ fontSize: 25 }}>To comply with CCPA, businesses must:</u>
  <ul style={{ textAlign: 'left' }}>
    <li style={{ marginBottom: '10px' }}>Identify, label, and classify personal information that is collected</li>
    <li style={{ marginBottom: '10px' }}>Establish appropriate data governance policies and processes</li>
    <li style={{ marginBottom: '10px' }}>Protect sensitive data</li>
    <li>Manage sensitive data and maintain compliance continuously, rather than just as a one-time activity</li>
  </ul>
</details>



        </div>
      </section>
    </div>
  );
}


function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h1 style={{ padding: '20px', fontSize: '37.5px' }}>The Tracking of Personal Health Data Online</h1>
        <h1 style={{ padding: '0px', fontSize: '15.5px' }}>By: Luke Matheny and Robert Klesch</h1>
        <ul style={{ padding: '10px', fontSize: '20.5px' }}>
          <li style={{ paddingRight: '40px', paddingTop: '15px', display: 'inline-block' }}>
            <Link to="/honr460" className="button-link">Introduction</Link>
          </li>
          <li style={{ paddingRight: '40px', display: 'inline-block' }}>
            <Link to="/apply" className="button-link">Reflect</Link>
          </li>
          <li style={{ paddingRight: '40px', display: 'inline-block' }}>
            <Link to="/inspire" className="button-link">Dig Deeper</Link>
          </li>
          <li style={{ paddingRight: '40px', paddingTop: '15px', display: 'inline-block' }}>
            <Link to="/bib" className="button-link">Sources</Link>
          </li>
        </ul>
      </nav>
    </div>
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
          <Route path="/bib" element={<Sources />} />
          <Route path="/honr460" element={<Home />} />
          <Route path="/apply" element={<About />} />
          <Route path="/inspire" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

