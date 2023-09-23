import Image from 'next/image'
import './styles/home/home.style.css'

export default function Home() {
  return (
    <main>
      <div>
        <div className='container'>
          <div className='hello'>
            <h1>We're  Ready For Mars !</h1>
            <p>Everything is ready for the launch in 2024!</p>
          </div>
          <div className='solar'>
            <ul>
              <li><span className='sun'><p>Sun</p>
              <div className='__empty_circle_00'></div>
              <div className='__empty_circle_01'></div>
              <div className='__empty_circle_02'></div>
              <div className='__empty_circle_03'></div>
              </span></li>
              <li><span className='mercury'><p>Mercury</p></span></li>
              <li><span className='venus'><p>Venus</p></span></li>
              <li><span className='earth'><p>Earth</p></span></li>
              <li><span className='mars'><p>Mars</p></span></li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className='bottom'>
        <div className='circle'>
          <ul>
            <li><span id='circle_0'></span></li>
            <li><span id='circle_1'></span></li>
            <li><span id='circle_2'></span></li>
            <li><span id='circle_3'></span></li>
          </ul>
        </div>
      </div>
    </main>
  )
}
