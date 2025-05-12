import React, { useEffect, useState } from 'react';
import './App.css';
import backgroundImage from './assets/background1.jpg';  // Correct the path
import tutorImage from './assets/waleedProfilePicture.jpg';  // Correct the path

function App() {
  const [courses, setCourses] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position and set scrollY
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate header height based on scroll
  const headerHeight = Math.max(100 - scrollY / 10, 50); // Shrinks from 100vh to 50vh
  const tutorSectionHeight = Math.max(100 - scrollY / 10, 50);  // Same effect for tutor section

  const newCourse = {
    id: 'ai-tools-course',
    title: 'AI Tools',
    purpose:'الهدف: أن يكتسب المشاركون في هذه الدورة القدرة على التعامل مع أدوات الذكاء الصناعي وفهم التكامل فيما بينها ودمجها ضمن إطار عمل الفرد.',
    duration:'المدة: 18 ساعة.',
    description: `
      المحاور:
      1. تعريف بالذكاء الصناعي وأهميته اليوم ومخاطره.
      2. أدوات اللغة الطبيعية (المساعد الشخصي).
      3. فهم كيفية التعامل مع الذكاء الصناعي (engineering Prompt).
      4. أدوات الذكاء الصناعي التوليدي:
          - أدوات المساعدة في تصميم وإنتاج الفيديو.
          - أدوات تصميم الصور والجرافيك.
      5. أدوات الذكاء الصناعي المكملة أو المساعدة:
          - أدوات توليد الصوت.
          - أدوات صنع العروض التقديمية.
      6. تكامل أدوات الذكاء الصناعي وزيادة الإنتاجية.
    `,
  };

  useEffect(() => {
    // For now, we can manually add the new course to the list
    setCourses([newCourse]);
  }, []);

  return (
    <div className="App">
      <header
        className="header"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: `${headerHeight}vh`,  // Dynamically adjust height
          transition: 'height 0.3s ease-out',  // Smooth transition
        }}
      >
        <div className="header-content">
          <h1 className="header-title">Be Part of the Future</h1>
          <p className="header-subtitle">Explore and enroll in our top-rated offerings.</p>
        </div>
      </header>

      <section
        className="tutor"
        style={{
          height: `${tutorSectionHeight}vh`,  // Dynamically adjust height based on scroll
          transition: 'height 0.3s ease-out',  // Smooth transition
        }}
      >
        <div className="tutor-content">
          <img src={tutorImage} alt="Tutor" className="tutor-image" />
          <div className="tutor-info">
            <h2>Perfectly balanced as all things should be</h2>
            <p>
              استراتيجي ومدرب مختص في الذكاء الاصطناعي، أقدم دورة متكاملة تجمع بين الأسس النظرية والتطبيق العملي باستخدام أحدث النماذج.
              أعتمد في مناهجي على مشاريع واقعية تحاكي تحديات المؤسسات اليوم.
              <span>انضمّ إليّ لتكتسب رؤية شاملة في كيفية استخدام أدوات الذكاء الاصطناعي،</span>
              وتطوير مهاراتك لتكون رائدًا في هذا المجال وتواكب التطور.
            </p>
          </div>
        </div>
      </section>

      <section className="courses">
        <h2>الدورات المتاحة</h2>
        <div className="course-grid">
          {courses.map(course => (
            <div className="card" key={course.id}>
              <h3>{course.title}</h3>
              <div className="details">
                {/* Split description by newlines and join with <br /> */}
                {course.description.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="form">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfU8wnQPS9VjuHZCKl7j-xgtFuNU2jUfCni8aET3bAZCZs9ZA/viewform?embedded=true&hl=ar"
          width="100%"
          height="500"
          frameBorder="0"
          title="Google Form"
        >
          Loading…
        </iframe>
      </section>

      <section className="video">
        <h2>مقدمة بسيطة</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Intro Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>

      <footer
        className="footer"
        style={{
          backgroundImage: `url(${backgroundImage})`, // Same background image as header
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="footer-content">
          <p className="contact-info">
            <span className="contact-email">
              Contact Email: <strong>waleed.halaoua.dbxv@gmail.com</strong>
            </span>
          </p>
          <ul className="social-links">
            <li>
              <a
                href="https://www.facebook.com/waleed.halaoua.31?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/waleed-halawa-b8686325a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/waleedhalaoua?igsh=MXRmbDFwNDNvdnIxOA=="
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/qr/2WAQMM4PD5DKG1"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
