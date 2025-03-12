"use client"
import React, { useState } from 'react'
import ProjectCards from './ProjectCards'
import ProjectFilter from './ProjectFilter'

const ProjectData = [
    {
        id: 1,
        title: "Boo - Connect with Boo-mates",
        description: "Boo - A Product of The Boo Studio is a real-time chat application made to connect with strangers and engage with diverse communities worldwide! Boo lets you meet new people, explore different cultures, and join conversations that match your interests—all in a safe and interactive environment.",
        image:"/images/Project/Boo-chatapp.png",
        tag: ["Everything","Web"],
        gitUrl: "https://github.com/swetha-learner/The-Boo-Studio",
        preview:"https://the-boo-studio.onrender.com",
    },
    {
        id: 2,
        title: "Responsive Portfolio",
        description: "My responsive portfolio, built with Next.js for high performance, scalability, & seamless user experience. Designed to adapt across all devices, it features dynamic content, smooth navigation, and optimized loading speeds. Explore my projects and skills through a modern interface that highlights both design and functionality.",
        image:"/images/Project/portfolio.png",
        tag: ["Everything","Web"],
        gitUrl: "/",
        preview:"/",
    },
    {
        id: 3,
        title: "Boo - Music Recommendation Chatbot",
        description: "Boo - An NLP-based chatbot that recommends music using sentiment analysis interprets user emotions from text inputs to provide personalized song suggestions. By analyzing text, the chatbot identifies the user's mood and matches it with appropriate tracks from Last.fm.",
        image:"/images/Project/Chatbot-song.png",
        tag: ["Everything","NLP"],
        gitUrl: "https://github.com/swetha-learner/Chatbot-song-recommendation-system",
        preview:"https://www.kaggle.com/code/swethaudayakumar3990/chatbot-recommendation-system-chat-with-boo",
    },
    {
        id: 4,
        title: "Warriorz - Digital Diagnosing Tool",
        description: "Warriorz - a COVID-19 diagnosing tool using deep learning leverages advanced neural networks to analyze medical images, such as X-rays or CT scans, for accurate and rapid detection of the virus.. This AI-driven approach enhances diagnostic speed, reduces workload, and improves patient outcomes.",
        image:"/images/Project/Warriorz.png",
        tag: ["Everything","DL"],
        gitUrl: "https://github.com/swetha-learner/Covid-19-Diagnostics-using-Deep-Learning",
        preview:"https://www.kaggle.com/code/swethaudayakumar3990/covid-19-classification-warriorz",
    },
    {
        id: 5,
        title: "Diamonds Classifier System",
        description: "A diamonds classifier using machine learning leverages advanced algorithms to predict a diamond's quality based on key attributes such as carat, cut, color, and clarity. By training on labeled datasets, the model learns to classify diamonds accurately, aiding in valuation and quality assessment.",
        image:"/images/Project/diamonds.png",
        tag: ["Everything","ML"],
        gitUrl: "https://github.com/swetha-learner/diamond-classifier",
        preview:"https://github.com/swetha-learner/diamond-classifier",
    },
    {
        id: 6,
        title: "Game Recommendation System ",
        description: "A game recommendation system using machine learning analyzes user preferences, gameplay history, and ratings to suggest personalized game recommendations. By leveraging techniques like collaborative filtering, the system identifies patterns in player behavior and game attributes to enhance user experience.",
        image:"/images/Project/gaming.png",
        tag: ["Everything","ML"],
        gitUrl: "https://github.com/swetha-learner/gaming-system",
        preview:"https://github.com/swetha-learner/gaming-system",
    },
    {
        id: 7,
        title: "Iris Classifier System",
        description: "An Iris classifier system using machine learning accurately categorizes iris flowers into species—Setosa, Versicolor, and Virginica—based on key features like sepal and petal dimensions. By training on the well-known Iris dataset, the model learns to recognize patterns and make precise classifications.",
        image:"/images/Project/Iris-final.png",
        tag: ["Everything","ML"],
        gitUrl: "https://github.com/swetha-learner/Iris-flower-classification",
        preview:"https://github.com/swetha-learner/Iris-flower-classification",
    },
]
const ProjectsBento = () => {
  const [tag, setTag] = useState("Everything")

  const handleFilter = (newTag) => {
    setTag(newTag)
  }

  const filterResults = ProjectData.filter((project) =>
    project.tag.includes(tag)
  )
  return (
    <>
    <h2 id='works' className='text-center text-4xl md:text-6xl font-bold text-white mt-4 mb-8 md:mb-12 pt-16'>
         What I've Been Building
    </h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        {/* <button
           className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-[#ee0979] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
        > Everything </button>
        <button
             className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-[#ee0979] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
        > Web Dev </button>
        <button
             className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-[#ee0979] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
        > NLP </button>
        <button
             className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-[#ee0979] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
        > Deep Learning </button>
        <button
             className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-[#ee0979] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
        > Machine Learning </button> */}
        <ProjectFilter 
            onClick={handleFilter} 
            filterName="Everything" 
            isSelected={tag === "Everything"} 
        />
        <ProjectFilter 
            onClick={handleFilter} 
            filterName="Web" 
            isSelected={tag === "Web"} 
        />
        <ProjectFilter 
            onClick={handleFilter} 
            filterName="NLP" 
            isSelected={tag === "NLP"} 
        />
        <ProjectFilter 
            onClick={handleFilter} 
            filterName="DL" 
            isSelected={tag === "DL"} 
        />
        <ProjectFilter 
            onClick={handleFilter} 
            filterName="ML" 
            isSelected={tag === "ML"} 
        />
        
    </div>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filterResults.map((project) => 
            <ProjectCards
            key={project.id} 
            title={project.title}
            description={project.description}
            imageUrl={project.image} 
            tag={project}
            gitUrl={project.gitUrl}
            preview={project.preview}
            /> 
        )}     
    </div>
    </>
  )
}

export default ProjectsBento
