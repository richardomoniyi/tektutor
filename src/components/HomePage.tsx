import { Link } from "react-router-dom"; // Remove if not using React Router
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Smooth scrolling for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // Cleanup
    return () => {
      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.removeEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="bg-white text-gray-700 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img src="/growtechafrica.png" width={50} height={80} alt="GrowTechAfrica Logo" />
            <span className="text-2xl font-bold text-gray-800 ml-2">GrowTechAfrica</span>
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-grass-green transition duration-300">About Us</a>
            <a href="#programs" className="text-gray-600 hover:text-grass-green transition duration-300">Programs</a>
            <a href="#Team" className="text-gray-600 hover:text-grass-green transition duration-300">Team</a>
            <a href="#partners" className="text-gray-600 hover:text-grass-green transition duration-300">Partners</a>
            <a href="#contact" className="text-gray-600 hover:text-grass-green transition duration-300">Contact</a>
          </div>
          <div className="md:hidden">
            <button id="mobile-menu-button" className="text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden">
          <a href="#about" className="block py-2 px-4 text-sm hover:bg-gray-100">About Us</a>
          <a href="#programs" className="block py-2 px-4 text-sm hover:bg-gray-100">Programs</a>
          <a href="#partners" className="block py-2 px-4 text-sm hover:bg-gray-100">Partners</a>
          <a href="#contact" className="block py-2 px-4 text-sm hover:bg-gray-100">Contact</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-bg text-white py-20 md:py-32" style={{ backgroundColor: "#111827" }}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Empowering Africa's Future with Tech Skills</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">In partnership with KAMK University and Microsoft, we offer world-class microdegree programs to equip you for the global tech industry.</p>
          <a href="#programs" className="bg-grass-green text-white font-bold py-3 px-8 rounded-full hover:bg-grass-green-dark transition duration-300 text-lg">Explore Our Programs</a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">About GrowTechAfrica</h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">We are committed to bridging the tech skills gap in Africa by providing accessible, high-quality education that leads to tangible career opportunities.</p>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="ml-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="mb-4">Our vision is to cultivate a new generation of African tech leaders. We believe in the power of education to transform lives and economies. By partnering with world-renowned institutions, we bring globally recognized certifications and skills to the African youth and adults.</p>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="mb-4">Our mission is to provide accessible, high-quality tech education that empowers individuals to thrive in the digital economy. We aim to equip learners with the skills they need to succeed in today's fast-paced tech landscape, fostering innovation and entrepreneurship across the continent.</p>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Inclusivity: We believe in equal access to education for all.</li>
              <li>Excellence: We strive for the highest standards in education and mentorship.</li>
              <li>Innovation: We embrace new technologies and teaching methods to enhance learning.</li>
              <li>Community: We foster a supportive community of learners and mentors.</li>
              <li>Impact: We measure our success by the positive change we create in individuals and communities.</li>
            </ul>
            <p className="mt-4">Join us in our mission to empower Africa's future through technology. Together, we can build a brighter, more inclusive digital economy.</p>
          </div>
          <div className="text-center">
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2500&auto=format&fit=crop" alt="Diverse group of students learning" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Programs Section */}
<section id="programs" className="py-20 bg-gray-50">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
    Microsoft Skills for Jobs Microdegree Programs
  </h2>
  <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
    These programs are your gateway to becoming a proficient technology expert. Each program is designed for online, independent study, supported by mentorship, and awards certificates with European Credit Transfer and Accumulation System (ECTS) credits.
  </p>
  <div className="w-full md:w-2/3 mx-auto">
  <div className="grid md:grid-cols-3 gap-8">
    {/* Program Card 1 */}
    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition duration-300">
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
        alt="Cloud and Cybersecurity"
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Cloud and Cybersecurity</h3>
      <p className="mb-4">
        Gain expertise in one of the most in-demand fields in technology. Learn to secure and manage cloud infrastructure.
      </p>
      <ul className="space-y-2 text-gray-600">
        <li>
          <span className="font-bold grass-green">12 ECTS</span> Credits
        </li>
        <li>
          <span className="font-bold grass-green">324 Hours</span> of Learning
        </li>
        <li>
          <span className="font-bold grass-green">6 Courses</span>
        </li>
      </ul>
    </div>
    {/* Program Card 2 */}
    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition duration-300">
      <img
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
        alt="Power Platform"
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Power Platform</h3>
      <p className="mb-4">
        Master Microsoft's Power Platform to build custom apps, automate workflows, and analyze data without writing code.
      </p>
      <ul className="space-y-2 text-gray-600">
        <li>
          <span className="font-bold grass-green">8 ECTS</span> Credits
        </li>
        <li>
          <span className="font-bold grass-green">216 Hours</span> of Learning
        </li>
        <li>
          <span className="font-bold grass-green">4 Courses</span>
        </li>
      </ul>
    </div>
    {/* Program Card 3 */}
    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition duration-300">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        alt="AI Developer"
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-2xl font-bold text-gray-800 mb-4">AI Developer</h3>
      <p className="mb-4">
        Dive into the world of Artificial Intelligence. Learn to develop and deploy AI solutions using modern tools and techniques.
      </p>
      <ul className="space-y-2 text-gray-600">
        <li>
          <span className="font-bold grass-green">12 ECTS</span> Credits
        </li>
        <li>
          <span className="font-bold grass-green">324 Hours</span> of Learning
        </li>
        <li>
          <span className="font-bold grass-green">7 Courses</span>
        </li>
      </ul>
    </div>
    {/* Program Card 4 */}
    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition duration-300">
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
        alt="Data Engineer"
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Data Engineer</h3>
      <p className="mb-4">
        Learn to build, manage, and optimize data pipelines and infrastructure that collect, clean, store, and deliver data for analysis and business use.
      </p>
      <ul className="space-y-2 text-gray-600">
        <li>
          <span className="font-bold grass-green">9 ECTS</span> Credits
        </li>
        <li>
          <span className="font-bold grass-green">324 Hours</span> of Learning
        </li>
        <li>
          <span className="font-bold grass-green">6 Courses</span>
        </li>
      </ul>
    </div>
    {/* Program Card 5 */}
    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition duration-300">
      <img
       src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
        alt="Data Analyst"
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Data Analyst</h3>
      <p className="mb-4">
        Learn to collect, clean, analyze, and visualize data to uncover insights and support informed business decisions.
      </p>
      <ul className="space-y-2 text-gray-600">
        <li>
          <span className="font-bold grass-green">9 ECTS</span> Credits
        </li>
        <li>
          <span className="font-bold grass-green">324 Hours</span> of Learning
        </li>
        <li>
          <span className="font-bold grass-green">6 Courses</span>
        </li>
      </ul>
    </div>
  </div>
  <div className="mt-8 text-center">
    <Link to="/form" className="bg-grass-green text-white font-bold py-3 px-8 rounded-full hover:bg-grass-green-dark transition duration-300 text-lg">
      Enroll Now
    </Link>
  </div>
  </div>
</section>
{/* Team Section */}
<section id="team" className="py-20 bg-white">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>
  <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
    Our leadership team brings together deep expertise in technology, education, and innovation to empower Africa's next generation of tech leaders.
  </p>
  <div className="flex flex-wrap justify-center gap-8">
    {/* Dr. George Babafemi */}
    <div className="bg-gray-50 rounded-lg shadow-lg p-8 w-full max-w-xs flex flex-col items-center">
      <img
        src="/georgebabafemi.jpg"
        alt="Dr. George Babafemi"
        className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-grass-green"
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. George Babafemi</h3>
      <p className="text-gray-600 text-center">
        Visionary educator and tech advocate with decades of experience in driving digital transformation across Africa's academic and business sectors.
      </p>
    </div>
    {/* Dr. Richard Omoniyi */}
    <div className="bg-gray-50 rounded-lg shadow-lg p-8 w-full max-w-xs flex flex-col items-center">
      <img
        src="/richard_profile.png"
        alt="Dr. Richard Omoniyi"
        className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-grass-green"
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. Richard Omoniyi</h3>
      <p className="text-gray-600 text-center">
        Renowned technologist and mentor, passionate about bridging the skills gap and fostering innovation through accessible tech education.
      </p>
    </div>
    {/* Kehinde Segun */}
    <div className="bg-gray-50 rounded-lg shadow-lg p-8 w-full max-w-xs flex flex-col items-center">
      <img
        src="/kehindesegun.jpeg"
        alt="Kehinde Segun"
        className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-grass-green"
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2">Kehinde Segun</h3>
      <p className="text-gray-600 text-center">
        Experienced program manager and community builder, dedicated to empowering learners and supporting their journey into tech careers.
      </p>
    </div>
  </div>
</section>
      {/* Partners Section */}
      <section id="partners" className="py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Our Esteemed Partners</h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">We collaborate with global leaders in education and technology to bring you the best learning experience and opportunities.</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          <img src="/kamklogo.png" alt="KAMK University Logo" className="h-16 md:h-20" onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://placehold.co/200x80/000000/FFFFFF?text=KAMK+University'; }} />
          <img src="/microsoft.png" alt="Microsoft Logo" className="h-16 md:h-20" onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://placehold.co/200x80/000000/FFFFFF?text=Microsoft'; }} />
          {/* Add other partner logos here */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get In Touch</h2>
          <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">Have questions? Want to enroll? We'd love to hear from you. Reach out to us, and let's start your tech journey together.</p>
          <div className="max-w-lg mx-auto text-center">
            <p className="text-lg mb-2">Email us at: <a href="mailto:enquiry@growtechafrica.com" className="text-grass-green hover:underline">enquiry@growtechafrica.com</a></p>
            <p className="text-lg">Or visit us at: 75 CMD Rd, Magodo GRA, Lagos, Nigeria</p>
            <p className="text-lg">Phone: <a href="tel:+2348104373270" className="text-grass-green hover:underline">+234 810 437 3270</a></p>
            <div className="mt-8">
              {/* Use <Link to="/form"> if using React Router, else use <a href="form.html"> */}
              <Link to="/form" className="bg-grass-green text-white font-bold py-3 px-8 rounded-full hover:bg-grass-green-dark transition duration-300 text-lg">Enroll Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 GrowTechAfrica.com. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Tailwind custom styles */}
      <style>{`
        .grass-green { color: #4ade80; }
        .bg-grass-green { background-color: #4ade80; }
        .border-grass-green { border-color: #4ade80; }
        .hover\\:bg-grass-green-dark:hover { background-color: #36b37e; }
      `}</style>
    </div>
  );
};

export default HomePage;
