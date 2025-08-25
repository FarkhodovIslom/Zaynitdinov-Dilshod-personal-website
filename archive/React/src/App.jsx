import React from 'react';
import Navbar from './components/ui/Navbar/Navbar.jsx';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />

            <main>
                <section id="home" className="section">
                    <div className="content">       
                        <h1>Welcome to my. Portfolio</h1>
                        <p>This is the home section</p>
                    </div>
                </section>

                <section id="about" className="section">
                    <div className="content">
                        <h2>About</h2>
                        <p>Learn more about me and my work</p>
                    </div>
                </section>

                <section id="portfolio" className="section">
                    <div className="content">
                        <h2>Portfolio</h2>
                        <p>Check out my latest projects</p>
                    </div>
                </section>

                <section id="contact" className="section">
                    <div className="content">
                        <h2>Contact</h2>
                        <p>Get in touch with me</p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
