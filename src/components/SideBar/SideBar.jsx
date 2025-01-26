
import './sidebar.css'
import {assets} from '../../assets/assets'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context';
const SideBar = () => {

  const [extended , setExtended]=useState(false);

  const {onSent,previousPrompt, setRecentPromt}=useContext(Context)

  const loadPrompt=async (prompt)=>{
    setRecentPromt(prompt)
    await onSent(prompt)
  }

  return (
    <div className='sidebar'>
      
      <div className="top">
        <img className='menu' src={assets.menu_icon}  
        onClick={()=>setExtended(prev=>!prev)}
        />
        <div className="new-chat">
          <img src={assets.plus_icon} />
          {extended? <p>New chat</p>: null }
        </div>

        {extended ? 
        <div className="recent">
          <p className='recent-title'>
            Recent
          </p>
          { previousPrompt.map((item,index)=>{
            return (
              <div onClick={()=>{
                loadPrompt(item)
           
              }} className="recent-entry">
              <img src={assets.message_icon} />
              <p>{item.slice(0,18)} ...</p>
            </div>
            )
          })}
         
        </div>
      : null
      }
 </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">

          <img src={assets.question_icon} alt="" />
        {extended?  <p>Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">

          <img src={assets.history_icon} alt="" />
       {extended ?   <p>Activity </p> : null}
        </div>

        <div className="bottom-item recent-entry">

          <img src={assets.setting_icon} alt="" />
       {extended ?   <p>Settings</p> : null}
        </div>

      </div>
    </div>
  )
}

export default SideBar
