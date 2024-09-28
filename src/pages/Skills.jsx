import React from "react";

const Skills = () => {
  return (
  <div className="max-w-[88vw] mx-auto min-h-[calc(100vh-80px)] tracking-wide">
      <h1 className="text-gray-600 text-4xl text-center font-bold font-serif uppercase  pt-7">My Skills</h1>
      {/* <p className="text-lg font-medium text-gray-700 text-center">I’ll keep learning new technologies and expanding my skills.</p> */}

    <div className="grid gap-7 lg:gap-10 lg:grid-cols-3 mt-9 ">
 
      {/* frontend */}
      <div className="bg-gray-50 p-4 rounded-md shadow transition-all duration-300 shadow-gray-400 hover:shadow-lg hover:shadow-gray-400 hover:scale-[1.04]">
        <h1 className="skillsh1 font-serif text-2xl font-semibold uppercase">Front-end</h1>
        <hr className="mt-2 h-0.5 bg-gray-400"/>
        <p className="text-gray-800 font-medium text-lg text-justify my-3"><span className="text-teal-700">HTML</span> is used to structure web pages, while <span className="text-teal-700">CSS</span> and <span className="text-teal-700">Tailwind CSS</span> provide styling and design. <span className="text-teal-700 ">JavaScript</span> and <span className="text-teal-700">React</span> bring interactivity and dynamic features to the interface, and <span className="text-teal-700">Bootstrap</span> is great for creating responsive layouts quickly.</p>
        <ul className="flex gap-3 justify-center  ">
          <img src="html.png" alt="HTML" className="w-8" />
          <img src="css.png" alt="CSS" className="w-8" />
          <img src="javascript.png" alt="JavaScript" className="w-8" />
          <img src="reactjs.png" alt="React" className="w-8" />
          <img src="tailwindcss.png" alt="Tailwind CSS" className="w-8" />
          <img src="bootstrap.png" alt="Bootstrap" className="w-8" />
        </ul>
      </div>

      {/* backend */}
      <div className="bg-gray-50 p-4 rounded-md shadow transition-all duration-300 shadow-gray-400 hover:shadow-lg hover:shadow-gray-400 hover:scale-[1.04]">
          <h1 className="skillsh1 font-serif text-2xl font-semibold uppercase">Back-end</h1>
          <hr className="mt-2 h-0.5 bg-gray-400"/>
          <p className="text-gray-800 font-medium text-lg text-justify my-3">Efficient server-side development with <span className="text-teal-700">Express.js</span> and <span className="text-teal-700">Node.js</span> for building fast, scalable applications. <span className="text-teal-700">PHP</span> is used for handling server-side scripting and creating dynamic web pages.</p>
          <ul className="flex gap-5 justify-center">
            <img src="expressjs.png" alt="Express.js" className="w-8" />
            <img src="nodejs.png" alt="Node.js" className="w-8" />
            <img src="php.png" alt="PHP" className="w-8" />
          </ul>
      </div>


      {/* databases */}
      <div className="bg-gray-50 p-4 rounded-md shadow transition-all duration-300 shadow-gray-400 hover:shadow-lg hover:shadow-gray-400 hover:scale-[1.04]">
          <h1 className="skillsh1 font-serif text-2xl font-semibold uppercase">Database</h1>
          <hr className="mt-2 h-0.5 bg-gray-400"/>  
          <p className="text-gray-800 font-medium text-lg text-justify my-3">Data management with <span className="text-teal-700">MySQL</span> for structured, relational data and <span className="text-teal-700">MongoDB </span> for flexible, document-based storage.</p>
          <ul className="flex gap-5 justify-center">
            <img src="mysql.png" alt="MySQL" className="w-8" />
            <img src="mongodb.png" alt="MongoDB" className="w-8" />
          </ul> 
      </div>


      {/* version control */}
      <div className="bg-gray-50 p-4 rounded-md shadow transition-all duration-300 shadow-gray-400 hover:shadow-lg hover:shadow-gray-400 hover:scale-[1.04]">
          <h1 className="skillsh1 font-serif text-2xl font-semibold uppercase">Version Control</h1>
          <hr className="mt-2 h-0.5 bg-gray-400"/>  
          <p className="text-gray-800 font-medium text-lg text-justify my-3">Efficiently track code changes and collaborate on projects using <span className="text-teal-700">Git</span> for version control and <span className="text-teal-700">GitHub</span> for code hosting and team collaboration.</p>
          <ul className="flex gap-5 justify-center">
            <img src="githubs.png" alt="GitHub" className="w-8" />
            <img src="git.png" alt="Git" className="w-8" />
          </ul>
      </div>


      {/* more languages */}
      <div className="bg-gray-50 p-4 rounded-md shadow transition-all duration-300 shadow-gray-400 hover:shadow-lg hover:shadow-gray-400 hover:scale-[1.04]">
        <h1 className="skillsh1 font-serif text-2xl font-semibold uppercase">More Languages</h1>
        <hr className="mt-2 h-0.5 bg-gray-400"/>
        <p className="text-gray-800 font-medium text-lg text-justify my-3">Versatile programming experience with <span className="text-teal-700">C</span> for low-level tasks, <span className="text-teal-700">C++</span> and <span className="text-teal-700">C#</span> for object-oriented projects, <span className="text-teal-700">Python</span> for scripting and automation, and <span className="text-teal-700">Java</span> for building cross-platform applications.</p>
        <ul className="flex gap-5 justify-center">
          <img src="c.png" alt="C" className="w-8" />
          <img src="python.png" alt="Python" className="w-8" />
          <img src="cpp.png" alt="C++" className="w-8" />
          <img src="java.png" alt="Java" className="w-8" />
          <img src="csharp.png" alt="C#" className="w-9" />
        </ul>
    </div>



      </div>

    </div>
  );
};

export default Skills;
