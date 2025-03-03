"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const InterSkills = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dreams to reality</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n   @keyframes neon-pulse {\n 0%, 100% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #00ffff, 0 0 35px #00ffff, 0 0 40px #00ffff, 0 0 50px #00ffff, 0 0 75px #00ffff; }\n 50% { text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 7px #fff, 0 0 10px #00ffff, 0 0 17px #00ffff, 0 0 20px #00ffff, 0 0 25px #00ffff, 0 0 37px #00ffff; }\n        }\n\n        .neon-text {\n            animation: neon-pulse 1.5s infinite alternate;\n        }\n\n        .bg-animated {\n            background: linear-gradient(-45deg, #000000, #1a1a1a, #000033, #003366);\n            background-size: 400% 400%;\n            animation: gradient 15s ease infinite;\n        }\n\n        @keyframes gradient {\n            0% { background-position: 0% 50%; }\n            50% { background-position: 100% 50%; }\n            100% { background-position: 0% 50%; }\n        }\n\n      .feature-card {\n            backdrop-filter: blur(10px);\n            background-color: rgba(0, 0, 0, 0.5);\n            border: 1px solid rgba(0, 255, 255, 0.1);\n            transition: all 0.3s ease;\n        }\n\n        .feature-card:hover {\n            transform: translateY(-10px) scale(1.05);\n            box-shadow: 0 0 20px #EE097950\n        }\n\n        .feature-icon {\n            transition: all 0.3s ease;\n        }\n\n        .feature-card:hover .feature-icon {\n            transform: rotate(360deg) scale(1.2);\n        }\n\n        @keyframes float {\n            0%, 100% { transform: translateY(0); }\n            50% { transform: translateY(-20px); }\n        }\n\n        .floating {\n            animation: float 6s ease-in-out infinite;\n        }\n\n        .glitch-effect {\n            position: relative;\n            overflow: hidden;\n        }\n\n        .glitch-effect::before,\n        .glitch-effect::after {\n            content: attr(data-text);\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: rgba(0, 0, 0, 0.5);\n        }\n\n        .glitch-effect::before {\n            left: 2px;\n            text-shadow: -2px 0 #ff00de;\n            clip: rect(24px, 550px, 90px, 0);\n            animation: glitch-anim 3s infinite linear alternate-reverse;\n        }\n\n        .glitch-effect::after {\n            left: -2px;\n            text-shadow: -2px 0 #00ffff;\n            clip: rect(85px, 550px, 140px, 0);\n            animation: glitch-anim 2s infinite linear alternate-reverse;\n        }\n\n        @keyframes glitch-anim {\n            0% { clip: rect(39px, 9999px, 71px, 0); }\n            20% { clip: rect(3px, 9999px, 5px, 0); }\n            40% { clip: rect(6px, 9999px, 38px, 0); }\n            60% { clip: rect(13px, 9999px, 43px, 0); }\n            80% { clip: rect(44px, 9999px, 93px, 0); }\n            100% { clip: rect(54px, 9999px, 47px, 0); }\n        }\n    "
    }}
  />
  <section className=" py-16 relative overflow-hidden">
    <div className="container mx-auto px-4">
      <h2
        className="text-4xl md:text-6xl font-bold text-center mt-3 mb-12  "
        data-text="INTERPERSONAL SKILLS"
      >
        <TypeAnimation
            sequence={[
                
                'Why Choose Me?' ,
                1000, 
                '"Hire a Sparkplug, not just candidate"',
                1000,
                'Meet your dream team member',
                1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
        />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="feature-card rounded-lg p-6 floating">
          <div className="text-5xl mb-4 text-amber-400 feature-icon">
            <i className="fas fa-face-smile" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-center"> People Person</h3>
          <p className="text-gray-300 text-center">
            Effective communication is my superpower. I can distill complex ideas into simple, actionable insights.
          </p>
        </div>
        <div
          className="feature-card rounded-lg p-6 floating"
          style={{ animationDelay: "1s" }}
        >
          <div className="text-5xl mb-4 text-teal-300 feature-icon">
            <i className="fas fa-wand-magic-sparkles" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-center">Creative Catalyst</h3>
          <p className="text-gray-300 text-center">
            I generate innovative solutions by thinking out of the box & exploring unconventional approaches.
          </p>
        </div>
        <div
          className="feature-card rounded-lg p-6 floating"
          style={{ animationDelay: "2s" }}
        >
          <div className="text-5xl mb-4 text-red-600 feature-icon">
            <i className="fas fa-hand-holding-heart" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-center">Teamwork makes the Dream Work</h3>
          <p className="text-gray-300 text-center">
           My approach to teamwork? 
           <br></br>
           Empathy, active listening, & a dash of humor.
          </p>
        </div>
        <div
          className="feature-card rounded-lg p-6 floating"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="text-5xl mb-4 text-orange-400 feature-icon">
            <i className="fas fa-chess" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-center"> Innovative Influencer </h3>
          <p className="text-gray-300 text-center">
            My Leadership style?
            <br></br> 
            Collaborative, supportive, & always open to feedback
            <br></br>
            "Skilled at building bridges, not walls!"
          </p>
        </div>
        <div
          className="feature-card rounded-lg p-6 floating"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="text-5xl mb-4 text-yellow-400 feature-icon">
            <i className="fas fa-users-gear" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-center"> Conflict Resolution</h3>
          <p className="text-gray-300 text-center">
            My approach?<br></br>
            Analyze complex conflicts, identifying key issues & ensuring timely and effective resolution
          </p>
        </div>
        <div
          className="feature-card rounded-lg p-6 floating"
          style={{ animationDelay: "2.5s" }}
        >
          <div className="text-5xl mb-4 text-blue-500 feature-icon">
            <i className="fas fa-users-line" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-center"> Adaptability expert</h3>
          <p className="text-gray-300 text-center">
            My secret sauce? 
            <br></br>
            Embracing change with a flexible mindset and transforming obstacles into opportunities!
          </p>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default InterSkills