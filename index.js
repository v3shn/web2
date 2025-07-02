```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vishnu Prasad</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:wght@300;400;700&family=Roboto+Mono:wght@400;700&family=Squada+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/segment7" type="text/css"/>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Lato', sans-serif; /* Applied Lato for general body text */
            background: linear-gradient(135deg, #1a4d3a 0%, #0d2818 50%, #000000 100%);
            color: #ffffff;
            overflow-x: hidden;
            position: relative;
        }

        /* Squid Game Background Pattern */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background:
                radial-gradient(circle at 20% 20%, rgba(255, 20, 147, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255, 20, 147, 0.1) 0%, transparent 50%),
                linear-gradient(45deg, transparent 25%, rgba(255, 20, 147, 0.02) 25%, rgba(255, 20, 147, 0.02) 50%, transparent 50%, transparent 75%, rgba(255, 20, 147, 0.02) 75%);
            background-size: 100% 100%, 100% 100%, 40px 40px;
            z-index: -2;
        }

        /* Floating Geometric Shapes */
        .geometric-shapes {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
        }

        .shape {
            position: absolute;
            opacity: 0.1;
            animation: floatShape 8s ease-in-out infinite;
        }

        .triangle {
            width: 0;
            height: 0;
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            border-bottom: 26px solid #ff1493;
        }

        .circle {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: #ff1493;
        }

        .square {
            width: 25px;
            height: 25px;
            background: #ff1493;
        }

        @keyframes floatShape {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
            50% { transform: translateY(-30px) rotate(180deg); opacity: 0.3; }
        }

        /* Digital Clock moved to be inside nav */
        .digital-clock {
            position: static; /* Changed from fixed to static */
            transform: none; /* Removed transform */
            z-index: auto;
            background: none; /* Removed background to blend with nav */
            backdrop-filter: none; /* Removed backdrop-filter */
            padding: 0; /* Removed padding */
            border: none; /* Removed border */
            text-align: center;
            box-shadow: none; /* Removed box-shadow */
            display: flex; /* To align items horizontally within nav-container */
            flex-direction: column; /* To stack time and date vertically */
            align-items: center; /* Center horizontally */
            justify-content: center; /* Center vertically */
        }

        .clock-time {
            font-family: 'Segment7Standard', monospace; /* Applied Segment7Standard */
            font-size: 1rem; /* Slightly reduced font size for title bar */
            font-weight: 700;
            color: #ff1493;
            text-shadow:
                0 0 5px rgba(255, 20, 147, 0.8),
                0 0 10px rgba(255, 20, 147, 0.6);
            letter-spacing: 2px; /* Adjusted letter spacing */
            margin-bottom: 0;
        }

        .clock-date {
            font-family: 'Segment7Standard', monospace; /* Applied Segment7Standard */
            font-size: 0.7rem; /* Slightly reduced font size */
            color: #ffffff;
            font-weight: 500;
            letter-spacing: 0.5px; /* Adjusted letter spacing */
        }

        /* Navigation with Pink Guard Theme */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 15px 50px; /* Adjusted padding */
            background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
            backdrop-filter: blur(10px);
            z-index: 1000;
            transition: all 0.3s ease;
            border-bottom: 2px solid #ff1493;
        }

        nav.scrolled {
            padding: 10px 50px; /* Adjusted padding on scroll */
            background: linear-gradient(135deg, #000000 0%, #2a2a2a 100%);
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
        }

        .logo {
            font-family: 'Squada One', cursive; /* Applied Squada One */
            font-size: 1.5rem;
            font-weight: 900;
            color: #ff1493;
            text-shadow: 0 0 10px rgba(255, 20, 147, 0.5);
            position: relative;
        }

        .logo::before {
            content: "●";
            color: #ff1493;
            margin-right: 10px;
            font-size: 1.2rem;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 30px;
            margin-left: auto; /* Push nav links to the right */
        }

        .nav-links a {
            font-family: 'Bebas Neue', sans-serif; /* Applied Bebas Neue */
            color: #ffffff;
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
            font-weight: 500;
            padding: 10px 15px;
            border: 2px solid transparent;
        }

        .nav-links a:hover {
            color: #ff1493;
            border-color: #ff1493;
            box-shadow: 0 0 15px rgba(255, 20, 147, 0.3);
        }

        /* Menu Toggle */
        .menu-toggle {
            display: none;
            cursor: pointer;
            font-size: 1.5rem;
            color: #ff1493;
        }

        /* Hero Section with Game Aesthetic */
        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
            background:
                radial-gradient(circle at center, rgba(255, 20, 147, 0.1) 0%, transparent 70%),
                linear-gradient(135deg, #1a4d3a 0%, #0d2818 100%);
            padding-top: 100px; /* Add padding to account for fixed nav bar */
        }

        .hero-content {
            max-width: 800px;
            padding: 40px;
            animation: fadeInUp 1s ease-out;
            background: rgba(0, 0, 0, 0.7);
            border: 3px solid #ff1493;
            border-radius: 0;
            box-shadow:
                0 0 30px rgba(255, 20, 147, 0.3),
                inset 0 0 30px rgba(255, 20, 147, 0.1);
        }

        .hero h1 {
            font-family: 'Squada One', cursive; /* Applied Squada One */
            font-size: 4rem;
            margin-bottom: 20px;
            color: #ff1493;
            text-shadow:
                0 0 10px rgba(255, 20, 147, 0.8),
                0 0 20px rgba(255, 20, 147, 0.4);
            font-weight: 900;
            position: relative;
        }

        .hero h1::after {
            content: ""; /* Removed Player 456 */
            position: absolute;
            top: -30px;
            right: 0;
            font-size: 0.3em;
            color: #ffffff;
            font-weight: 400;
            text-shadow: none;
        }

        .hero .subtitle {
            font-family: 'Lato', sans-serif; /* Applied Lato */
            font-size: 1.5rem;
            margin-bottom: 30px;
            color: #ffffff;
            animation: fadeIn 1s ease-out 0.5s both;
            font-weight: 300;
        }

        .hero .description {
            font-family: 'Lato', sans-serif; /* Applied Lato */
            font-size: 1.2rem;
            margin-bottom: 40px;
            color: #cccccc;
            animation: fadeIn 1s ease-out 1s both;
            line-height: 1.6;
        }

        .cta-button {
            font-family: 'Bebas Neue', sans-serif; /* Applied Bebas Neue */
            display: inline-block;
            padding: 15px 40px;
            background: linear-gradient(135deg, #ff1493 0%, #dc1447 100%);
            color: #ffffff;
            text-decoration: none;
            border: none;
            font-weight: 700;
            transition: all 0.3s ease;
            animation: fadeIn 1s ease-out 1.5s both;
            position: relative;
            overflow: hidden;
            text-transform: uppercase;
            letter-spacing: 2px;
            box-shadow: 0 0 20px rgba(255, 20, 147, 0.4);
        }

        .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            transition: left 0.5s ease;
        }

        .cta-button:hover::before {
            left: 100%;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(255, 20, 147, 0.6);
        }

        /* Sections with Game Room Aesthetic */
        .section {
            padding: 100px 0;
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
        }

        .section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #ff1493, transparent);
        }

        .section h2 {
            font-family: 'Squada One', cursive; /* Applied Squada One */
            font-size: 3rem;
            text-align: center;
            margin-bottom: 60px;
            color: #ff1493;
            text-shadow: 0 0 15px rgba(255, 20, 147, 0.5);
            font-weight: 900;
            position: relative;
        }

        .section h2::before {
            content: "▲";
            position: absolute;
            left: -50px;
            color: #ff1493;
            font-size: 0.5em;
        }

        .section h2::after {
            content: "●";
            position: absolute;
            right: -50px;
            color: #ff1493;
            font-size: 0.5em;
        }

        /* About Section */
        .about-content {
            padding: 40px;
            text-align: center;
            max-width: 700px;
            margin: 0 auto;
            background: rgba(0, 0, 0, 0.8);
            border: 2px solid #ff1493;
            box-shadow: 0 0 25px rgba(255, 20, 147, 0.2);
        }

        .about-text {
            font-family: 'Lato', sans-serif; /* Applied Lato */
            font-size: 1.1rem;
            line-height: 1.8;
            color: #ffffff;
            margin-bottom: 50px;
        }

        .about-text p {
            margin-bottom: 20px;
        }

        /* Info Grid with Card Aesthetic */
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            padding: 0 20px;
            margin-bottom: 60px;
        }

        .info-card {
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(26, 26, 26, 0.9) 100%);
            padding: 30px;
            border: 3px solid #ff1493;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .info-card::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, #ff1493, transparent, #ff1493);
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .info-card:hover::before {
            opacity: 0.3;
        }

        .info-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(255, 20, 147, 0.4);
        }

        .info-card h3 {
            font-family: 'Bebas Neue', sans-serif; /* Applied Bebas Neue */
            color: #ff1493;
            margin-bottom: 15px;
            font-size: 1.3rem;
            font-weight: 700;
            text-shadow: 0 0 5px rgba(255, 20, 147, 0.3);
        }

        .info-card p {
            font-family: 'Lato', sans-serif; /* Applied Lato */
            color: #ffffff;
            line-height: 1.6;
            font-weight: 300;
        }

        /* Contact Section */
        .contact-content {
            text-align: center;
            padding: 40px;
            background: rgba(0, 0, 0, 0.8);
            border: 2px solid #ff1493;
            margin: 0 20px;
            box-shadow: 0 0 25px rgba(255, 20, 147, 0.2);
        }

        .contact-content p {
            font-family: 'Lato', sans-serif; /* Applied Lato */
            font-size: 1.2rem;
            color: #ffffff;
            margin-bottom: 40px;
            line-height: 1.6;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            margin-top: 40px;
        }

        .social-link {
            font-family: 'Bebas Neue', sans-serif; /* Applied Bebas Neue */
            display: inline-flex;
            align-items: center;
            gap: 15px;
            padding: 15px 30px;
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(26, 26, 26, 0.9) 100%);
            border: 2px solid #ff1493;
            color: white;
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 1rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
            position: relative;
            overflow: hidden;
        }

        .social-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 20, 147, 0.2), transparent);
            transition: left 0.5s ease;
        }

        .social-link:hover::before {
            left: 100%;
        }

        .social-link:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(255, 20, 147, 0.4);
            color: #ff1493;
        }

        .social-link i {
            font-size: 1.3rem;
        }

        /* Footer */
        footer {
            text-align: center;
            padding: 40px 20px;
            background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
            color: #cccccc;
            border-top: 2px solid #ff1493;
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes pulse {
            0%, 100% {
                box-shadow: 0 0 20px rgba(255, 20, 147, 0.3);
            }
            50% {
                box-shadow: 0 0 40px rgba(255, 20, 147, 0.7);
            }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .menu-toggle {
                display: block;
            }

            .nav-links {
                display: none;
                flex-direction: column;
                background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
                position: absolute;
                top: 70px;
                right: 20px;
                width: 200px;
                padding: 20px;
                border: 2px solid #ff1493;
                animation: fadeInMenu 0.3s ease-out;
            }

            .nav-links.active {
                display: flex;
            }

            .nav-links li {
                margin: 10px 0;
            }

            @keyframes fadeInMenu {
                from {
                    opacity: 0;
                    transform: translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            .hero .subtitle {
                font-size: 1.2rem;
            }

            .social-links {
                flex-direction: column;
                align-items: center;
            }

            .social-link {
                width: 100%;
                max-width: 300px;
                justify-content: center;
            }

            nav {
                padding: 10px 20px; /* Adjusted padding for mobile nav */
            }

            .section {
                padding: 60px 0;
            }

            .section h2 {
                font-size: 2rem;
            }

            .digital-clock {
                display: none; /* Hide clock on small screens to save space in title bar */
            }

            .clock-time {
                font-size: 1.1rem;
                letter-spacing: 2px;
            }

            .clock-date {
                font-size: 0.8rem;
            }

            .section h2::before,
            .section h2::after {
                display: none;
            }
        }

        /* Game Over Screen Effect */
        .game-over {
            font-family: 'Squada One', cursive; /* Applied Squada One */
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            font-size: 4rem;
            color: #ff1493;
            text-shadow: 0 0 30px rgba(255, 20, 147, 0.8);
            font-weight: 900;
        }
    </style>
</head>
<body>
    <div class="geometric-shapes">
        <div class="shape triangle" style="top: 10%; left: 15%; animation-delay: 0s;"></div>
        <div class="shape circle" style="top: 20%; right: 20%; animation-delay: 1s;"></div>
        <div class="shape square" style="top: 30%; left: 10%; animation-delay: 2s;"></div>
        <div class="shape triangle" style="top: 60%; right: 15%; animation-delay: 3s;"></div>
        <div class="shape circle" style="top: 70%; left: 25%; animation-delay: 4s;"></div>
        <div class="shape square" style="top: 80%; right: 30%; animation-delay: 5s;"></div>
        <div class="shape triangle" style="top: 40%; left: 70%; animation-delay: 1.5s;"></div>
        <div class="shape circle" style="top: 50%; right: 60%; animation-delay: 2.5s;"></div>
    </div>

    <nav id="navbar">
        <div class="nav-container">
            <div class="logo">Vishnu_Prasad</div>

            <div class="digital-clock">
                <div class="clock-time" id="clock-time">00:00:00 AM</div>
                <div class="clock-date" id="clock-date">Monday, January 1, 2024</div>
            </div>

            <div class="menu-toggle" id="menuToggle">
                <i class="fas fa-bars"></i>
            </div>
            <ul class="nav-links" id="navLinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Info</a></li>
                <li><a href="#contact">Reach Me</a></li>
            </ul>
        </div>
    </nav>

    <section id="home" class="hero">
        <div class="hero-content">
            <h1>Vishnu_Prasad</h1>
            <p class="subtitle">Programmer with a Creative Mind</p>
            <p class="description">Transforming ideas into elegant digital solutions through innovative code and creative problem-solving. Ready to play the game of development.</p>
            <a href="#about" class="cta-button">Scroll Down</a>
        </div>
    </section>

    <section id="about" class="section">
        <h2>Info</h2>
        <div class="about-content">
            <div class="about-text">
                <p>Hey! I'm Vishnu Prasad, a Mechanical Engineering graduate from Carmel Polytechnic College, Alappuzha, originally from Kayamkulam, Kerala, and born in Punalur.</p>

                <p>I've interned at Suzee Hyundai, Tenkasi, gaining valuable industry experience.</p>

                <p>I'm passionate about exploring new places, listening to music, and delving into coding and web designing in my free time. Currently, I'm doing BSc in Computer Science from IHRD College of Applied Science, Karthikapally.</p>
            </div>
        </div>

        <div class="info-grid">
            <div class="info-card">
                <h3><i class="fas fa-map-marker-alt"></i> Location</h3>
                <p>Kayamkulam, Kerala, India</p>
            </div>
            <div class="info-card">
                <h3><i class="fas fa-heart"></i> Hobbies</h3>
                <p>Travelling, Coding, Creating New Ideas</p>
            </div>
            <div class="info-card">
                <h3><i class="fas fa-code"></i> Passion</h3>
                <p>Building innovative solutions with clean, efficient code</p>
            </div>
        </div>
    </section>

    <section id="contact" class="section">
        <h2>Reach Me</h2>
        <div class="contact-content">
            <p>I'm always open to discussing new opportunities, interesting projects, or just having a friendly conversation about technology and innovation. Let's connect and play the development game together!</p>

            <div class="social-links">
                <a href="https://wa.me/916235989299" class="social-link whatsapp" target="_blank">
                    <i class="fab fa-whatsapp"></i>
                    <span>WhatsApp</span>
                </a>
                <a href="https://instagram.com/v3shn" class="social-link instagram" target="_blank">
                    <i class="fab fa-instagram"></i>
                    <span>Instagram</span>
                </a>
                <a href="https://github.com/v3shn" class="social-link github" target="_blank">
                    <i class="fab fa-github"></i>
                    <span>GitHub</span>
                </a>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2025 Vishnu Prasad. Made with ❤️ and lots of ☕</p>
    </footer>

    <audio id="backgroundAudio" loop>
        <source src="https://github.com/v3shn/audios/blob/main/5.mp3?raw=true" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>

    <div class="game-over" id="gameOver">
        GAME OVER
    </div>

    <script>
        // Digital Clock Function - uses client's local timezone
        function updateClock() {
            const now = new Date();

            // Format time
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            const ampm = hours >= 12 ? 'PM' : 'AM';

            hours = hours % 12;
            hours = hours ? hours : 12;
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

            // Format date
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const dateString = now.toLocaleDateString(undefined, options);

            document.getElementById('clock-time').textContent = timeString;
            document.getElementById('clock-date').textContent = dateString;
        }

        setInterval(updateClock, 1000);
        updateClock(); // Initial call to display clock immediately

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });

        // Autoplay background audio on user interaction
        const audio = document.getElementById('backgroundAudio');
        audio.volume = 0.3; // Set initial volume

        document.addEventListener('DOMContentLoaded', () => {
            // Attempt to play audio immediately.
            // Modern browsers often require user interaction for autoplay.
            audio.play().catch(error => {
                console.log("Audio autoplay prevented:", error);
                // If autoplay is blocked, wait for first user interaction to play
                document.body.addEventListener('click', () => {
                    audio.play().catch(e => console.log("Audio play on click failed:", e));
                }, { once: true });
            });
        });

        // Menu Toggle for responsive navigation
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    </script>
</body>
</html>
```
