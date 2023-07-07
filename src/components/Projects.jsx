import React, { useEffect } from 'react'
import Aos from 'aos';
const Projects = () => {
  useEffect(()=>{
    Aos.init()
},[])

  return (
    <>
          <div className="project " data-aos="flip-left" data-aos-easing="ease-in" data-aos-duration="500">
                <div className='porus'></div>
            <div className='project_content'>
                <p>porus bakery clone with html and css</p>
                <a href='' className='web-link'>check it out</a>
            </div>
          </div>

          <div className="project " data-aos="flip-left" data-aos-easing="ease-in" data-aos-duration="500">
          <div className='gnisoft'></div>
            <div className='project_content'>
                <p>gnisoft clone using bootstrap</p>
                <a href='' className='web-link'>check it out</a>
            </div>
          </div>

          <div className="project " data-aos="flip-left" data-aos-easing="ease-in" data-aos-duration="500">
          <div className='todo-list'></div>
            <div className='project_content'>
                <p>Todo list with javascript</p>
                <a href='' className='web-link'>check it out</a>
            </div>
          </div>
          
          <div className="project " data-aos="flip-left" data-aos-easing="ease-in" data-aos-duration="500">
          <div className='todo-react'></div>
            <div className='project_content'>
                <p>Todo list with reactJS(local storage) </p>
                <a href='' className='web-link'>check it out</a>
            </div>
          </div>
          <div className="project " data-aos="flip-left" data-aos-easing="ease-in" data-aos-duration="500">
          <div className='Mock-API'></div>
            <div className='project_content'>
                <p>Playing with Mock API Data</p>
                <a href='' className='web-link'>check it out</a>
            </div>
          </div>
        
    </>
  )
}
export default Projects
