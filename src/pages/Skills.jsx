import React from "react";

const Skills = () => {
  return (
    <div className="max-w-[90vw] mx-auto min-h-[calc(100vh-80px)]">
      <h1 className="skillsh1 text-3xl  font-semibold">My Skills</h1>
      <p className="text-lg mb-8 text-gray-700">I’ll keep learning new technologies and expanding my skills.</p>

      <div className="grid gap-5">

        <div className="bg-gray-50 p-5 rounded-md shadow transition-all duration-300 shadow-gray-300 hover:shadow-lg hover:shadow-gray-500 hover:scale-105">
          <h1 className="skillsh1 text-2xl  font-medium">Frontend</h1>
          <ul className="w-8 flex gap-2">
            <img src="html.png" alt="" />
            <img src="css.png" alt="" />
            <img src="javascript.png" alt="" />
            <img src="reactjs.png" alt="" />
            <img src="tailwindcss.png" alt="" />
            <img src="bootstrap.png" alt="" />
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-md shadow transition-all duration-300 shadow-gray-300 hover:shadow-lg hover:shadow-gray-500 hover:scale-105">
          <h1 className="skillsh1 text-2xl  font-medium">Backend</h1>
          <ul className="w-8 flex gap-2">
            <img src="expressjs.png" alt="" />
            <img src="nodejs.png" alt="" />
            <img src="php.png" alt="" />  
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-md shadow transition-all duration-300 shadow-gray-300 hover:shadow-lg hover:shadow-gray-500 hover:scale-105">
          <h1 className="skillsh1 text-2xl  font-medium">Database</h1>
          <ul className="w-8 flex gap-2">
            <img src="mysql.png" alt="" />
            <img src="mongodb.png" alt="" />
          </ul> 
        </div>

        <div className="bg-gray-50 p-5 rounded-md shadow transition-all duration-300 shadow-gray-300 hover:shadow-lg hover:shadow-gray-500 hover:scale-105">
          <h1 className="skillsh1 text-2xl  font-medium">Version Control</h1>
          <ul className="w-8 flex gap-2">
            <img src="git.png" alt="" />
            <img src="githubs.png" alt="" />
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-md shadow transition-all duration-300 shadow-gray-300 hover:shadow-lg hover:shadow-gray-500 hover:scale-105">
          <h1 className="skillsh1 text-2xl  font-medium">More languages</h1>
          <ul className="w-8 flex gap-2">
            <img src="c.png" alt="" />
            <img src="python.png" alt="" />
            <img src="cpp.png" alt="" />
            <img src="java.png" alt="" />
            <img src="csharp.png" alt="" />
          </ul>
        </div>


      </div>

    </div>
  );
};

export default Skills;
