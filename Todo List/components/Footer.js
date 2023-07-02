import React from 'react'

const Footer = () => {
  return ( 
  <footer className="text-gray-600 body-font">
    <div className="bg-gray-100">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center">
        <p className="text-gray-500 text-sm text-center sm:text-left ">© 2023 Todo List —
          <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@todolist</a>
        </p>
      </div>
    </div>
  </footer> 
  )
}

export default Footer