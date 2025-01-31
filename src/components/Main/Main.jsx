
import { assets } from '../../assets/assets'
import './Main.css'
const Main = () => {
  return (
    <div className='main'>
      
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>


      <div className="main-container">
        
        <div className="greed">
            <p> <span>Hello , ran</span></p>
            <p>How can I help you today ?</p>
        </div>

        <div className="cards">

            <div className="card">
                <p>suggest beautiful places to see o upcoming road trips</p>
            
                <img src={assets.compass_icon} alt="" />
            </div>

            <div className="card">
                <p>briefly summerize this concept </p>
            
                <img src={assets.message_icon} alt="" />
            </div>

            <div className="card">
                <p>explain Ci/CD and  how to use it </p>
            
                <img src={assets.bulb_icon} alt="" />
            </div>

            <div className="card">
                <p>improve readabilti of the folowing code </p>
            
                <img src={assets.code_icon} alt="" />
            </div>

        </div>

        <div className="main-bottom">
            <div className="search-box">
                <input type='text' placeholder='Enter a promt here' />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                </div>
               
            </div>
            <p className='bottom-info'>
                    Gemini may display inaacurate info , including about people , so double-check the responses
            </p>
        </div>
      </div>
    </div>
  )
}

export default Main
