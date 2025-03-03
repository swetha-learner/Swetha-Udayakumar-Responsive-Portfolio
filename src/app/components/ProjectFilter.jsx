import React from 'react'

const ProjectFilter = ({ filterName, onClick, isSelected }) => {
  const btnStyles = isSelected ? 
  "text-white" :
  "text-[#ADB7BE]"
  return (
    
    <button
        className={`${btnStyles}text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-pink-200 dark:focus:ring-[#ee0979] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
        onClick={() => onClick(filterName)}
    > {filterName}
    </button>
    
  )
}

export default ProjectFilter