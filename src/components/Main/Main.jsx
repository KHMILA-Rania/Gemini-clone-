
import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import '../../context/Context'
import { Context } from '../../context/Context'

const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
  return (
    <div className='main'>
      
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>


      <div className="main-container">

        {!showResult ? <>
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
        
        </> : 
        <div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>

          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading ? 
            
            <div className='loader'>
              <hr />
              <hr />
              <hr />
            </div> :
            <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
          </div>
        </div>
        }
        
        

        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>{setInput(e.target.value)}} value={input} type='text' placeholder='Enter a promt here' />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={()=>{onSent()}} src={assets.send_icon} alt="" />
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
