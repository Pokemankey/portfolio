import styles from './App.module.css';
import githubIcon from './Assets/github.svg'
import linkedinIcon from './Assets/linkedin.svg'
import gmailIcon from './Assets/gmail.svg'

import awsIcon from './Assets/aws.png'
import mongoDBIcon from './Assets/mongodb.png'
import mysqlIcon from './Assets/mysql.png'
import nodeIcon from './Assets/node.png'
import pythonIcon from './Assets/python.png'
import reactIcon from './Assets/react.png'
import unityIcon from './Assets/unity.png'
import sendIcon from './Assets/send.png'
import raspberryIcon from './Assets/raspberry.png'
import flaskIcon from './Assets/flask.png'
import arduinoIcon from './Assets/arduino.png'
import yoloIcon from './Assets/yolo.png'
import expressIcon from './Assets/express.png'
import chatBotIcon from './Assets/chatbot.png'
import cv from './Assets/Srilakshman CV.pdf'
import closeIcon from './Assets/close.png'


import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { useState, useRef, useEffect } from 'react'


function App() {
  const [openChat, setOpenChat] = useState(false)
  // const [messages, setMessages] = useState([{ message: "Hello! Ask Me Anything About Srilakshman?", from: "bot" }])
  const [messages, setMessages] = useState([{ message: "The chatbot is currently unavailable. \nIf you would like to contact Srilakshman you can do so through the following:\n Email: srilakshman.k02@gmail.com\nPhone No:0521351776", from: "bot" }])
  const [waitingOnResponse, setWaitingOnResponse] = useState(false)
  const [dots, setDots] = useState('.');
  const [showPDF, setShowPDF] = useState(false);
  const messageInputRef = useRef(null)

  const handleButtonClick = () => {
    setShowPDF(!showPDF);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // handleMessageSend();
    }
  };

  const handleClickOutside = (e) => {
    let targetElement = e.target;
    while (targetElement) {
      if (targetElement.id === "MESSAGES" || targetElement.id === "CHATICON") {
        return;
      }
      targetElement = targetElement.parentElement;
    }
    setOpenChat(false)
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prevDots => {
        if (prevDots.length < 8) {
          return prevDots + '. ';
        } else {
          return '. ';
        }
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const handleMessageSend = async () => {
    if (waitingOnResponse) {
      return
    }
    let message = messageInputRef.current.value
    if (message) {
      const newMessage = { message, from: "user" };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setWaitingOnResponse(true)
      messageInputRef.current.value = ""
      try {
        const response = await axios.post(process.env.REACT_APP_CHAT_BOT_URL, { query: message });
        const botMessage = { message: response.data.response, from: "bot" };
        setWaitingOnResponse(false)
        setMessages(prevMessages => [...prevMessages, botMessage]);
      } catch (error) {
        console.error("Error sending message to bot:", error);
        const botMessage = { message: "Server Error", from: "error" };
        setMessages(prevMessages => [...prevMessages, botMessage]);
        setWaitingOnResponse(false)
      }
    }
  };

  document.addEventListener('click', handleClickOutside);
  return (
    <div className={styles.pageWrapper}>
      {/* <div className={styles.bubbles}>
        <a href='https://github.com/Pokemankey'>
          <div className={styles.bubblesImage}>
            <img src={githubIcon} />
          </div>
        </a>
        <a href='https://www.linkedin.com/in/srilakshman-karthikeyan-706717237/'>
          <div className={styles.bubblesImage}>
            <img src={linkedinIcon} />
          </div>
        </a>
        <a href='mailto:srilakshman.k02@gmail.com'>
          <div className={styles.bubblesImage}>
            <img src={gmailIcon} />
          </div>
        </a>
      </div> */}
      <div className={styles.pageInner}>
        <div className={styles.headerWrapper}>
          <div className={styles.onlineWrapper}>
            <p className={styles.greenCircle}></p>
            <p>Online.</p>
          </div>
          <div className={styles.mainText}>
            <h2>Hey, I'm Srilakshman</h2>
            <h1>Software Engineer.</h1>
          </div>
          <div className={styles.links}>
            <a href='https://github.com/Pokemankey'>
              <div className={styles.link}>
                <img src={githubIcon} />
                <p>Github</p>
              </div>
            </a>
            <a href='https://www.linkedin.com/in/srilakshman-karthikeyan-706717237/'>
              <div className={styles.link}>
                <img src={linkedinIcon} />
                <p>Linkedin</p>
              </div>
            </a>
            <a href='mailto:srilakshman.k02@gmail.com'>
              <div className={styles.link}>
                <img src={gmailIcon} />
                <p>Mail</p>
              </div>
            </a>
          </div>
          <div className={styles.headerContent}>
            <p>Hi, I am Srilakshman, Final year student at Amity University Dubai, with a passion for innovation and problem-solving. Ready to create innovative solutions for real world applications!</p>
          </div>
        </div>
        <div className={styles.timeLineWrapper}>
          <h3>My Timeline</h3>
          <div className={styles.timeLine}>
            <div className={styles.rightTimeLineBox}>
              <div className={styles.dotsRight}></div>
              <p><span>August 2020</span><br /><br />Highschool Diploma from Our Own Indian Highschool Dubai</p>
            </div>
            <div className={styles.leftTimeLineBox}>
              <div className={styles.dotsLeft}></div>
              <p><span>September 2024</span><br /><br />Bachelor of Technology in Computer Science from Amity University Dubai</p>
            </div>
            {/* <div className={styles.rightTimeLineBox}>
              <div className={styles.dotsRight}></div>
              <p><span>Current</span><br /><br />Web Developer in Cheil</p>
            </div> */}

          </div>
        </div>
        <div className={styles.projectsWrapper}>
          <h2>Projects</h2>
          <div className={styles.projectsCardWrapper}>
            <div className={styles.projectsCard}>
              <h3>Blind Helmet</h3>
              <p>Built an AI powered helmet to aid the blind by performing functions such as object detection, facial recognition, Gemini integration and much more...</p>
              <div className={styles.iconsWrapper}>
                <img src={pythonIcon} />
                <img src={raspberryIcon} />
                <img src={yoloIcon} />
              </div>
            </div>
            <div className={styles.projectsCard}>
              <h3>Rescue Edge</h3>
              <p>Built an AI powered drone that can detect humans under rubble and in need of help. Detections with geo location is passed into our app.</p>
              <div className={styles.iconsWrapper}>
                <img src={pythonIcon} />
                <img src={flaskIcon} />
                <img src={raspberryIcon} />
                <img src={awsIcon} />
              </div>
            </div>
            <div className={styles.projectsCard}>
              <h3>Smart Water Meter</h3>
              <p>Created an innovative project deploying IoT technology to upgrade water meters, ensuring real-time monitoring and improved accuracy. Hosted it up on AWS</p>
              <div className={styles.iconsWrapper}>
                <img src={arduinoIcon} />
                <img src={reactIcon} />
                <img src={nodeIcon} />
                <img src={expressIcon} />
                <img src={awsIcon} />
              </div>
            </div>
            <div className={styles.projectsCard}>
              <h3>Volunteer Me</h3>
              <p>Created 2 React Native Applications, one for business side to create volunteering jobs and find volunteers and the other app to let users find volunteering jobs</p>
              <div className={styles.iconsWrapper}>
                <img src={reactIcon} />
                <img src={nodeIcon} />
                <img src={expressIcon} />
                <img src={mysqlIcon} />
                <img src={awsIcon} />
              </div>
            </div>
            <div className={styles.projectsCard}>
              <h3>Zero Gravity</h3>
              <p>This project was a 2D Video Game which had multiple game modes to play from, this game was posted on play store, but then was later removed.</p>
              <div className={styles.iconsWrapper}>
                <img src={unityIcon} />
              </div>
            </div>
            <div className={styles.projectsCard}>
              <h3>Discord Chatbot</h3>
              <p>Created a discord chatbot using nodejs and hosted on Heroku. it performed various functions such as playing audio clips, playing music, interaction with users and many more...</p>
              <div className={styles.iconsWrapper}>
                <img src={nodeIcon} />
                <img src={awsIcon} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.techWrapper}>
          <h3>Tech Stack</h3>
          <div className={styles.techCardWrapper}>
            <div className={styles.techCard}>
              <img src={reactIcon} />
            </div>
            <div className={styles.techCard}>
              <img src={awsIcon} />
            </div>
            <div className={styles.techCard}>
              <img src={mongoDBIcon} />
            </div>
            <div className={styles.techCard}>
              <img src={mysqlIcon} />
            </div>
            <div className={styles.techCard}>
              <img src={nodeIcon} />
            </div>
            <div className={styles.techCard}>
              <img src={pythonIcon} />
            </div>
            <div className={styles.techCard}>
              <img src={raspberryIcon} />
            </div>
            <div className={styles.techCard}>
              <img src={arduinoIcon} />
            </div>
            <div className={styles.techCard}>
              <img src={flaskIcon} />
            </div>
            <div className={styles.techCard}>
              <img src={expressIcon} />
            </div>
            <div className={styles.techCard}>
              <img src={yoloIcon} />
            </div>
            <div className={styles.techCard}>
              <img src={unityIcon} />
            </div>
          </div>
        </div>
        {openChat && <div className={styles.chatBotMessagesWrapper} id='MESSAGES'>
          <div className={styles.chatBotMessagesInner}>
            <div className={styles.chatWrapper}>
              <img className={styles.closeIcon} src={closeIcon} onClick={() => setOpenChat(false)} />
              {messages.map((item) => {
                if (item.from === "bot") {
                  return <div key={uuidv4()} className={styles.botMessage}>
                    <p>{item.message}</p>
                  </div>
                } else if (item.from === "user") {
                  return <div key={uuidv4()} className={styles.userMessage}>
                    <p>{item.message}</p>
                  </div>
                } else {
                  return <div key={uuidv4()} className={styles.errorMessage}>
                    <p>{item.message}</p>
                  </div>
                }
              })}
              {waitingOnResponse &&
                <div className={styles.botMessage}>
                  <p>{dots}</p>
                </div>}
            </div>
            <div className={styles.chatInputWrapper}>
              <input ref={messageInputRef} placeholder='Ask Something About Srilakshman' onKeyDown={handleKeyPress}></input>
              {/* <div onClick={handleMessageSend} className={styles.sendButton}> */}
              <div className={styles.sendButton}>
                <img src={sendIcon} alt='send message' />
              </div>
            </div>
          </div>
        </div>}
        <div onClick={() => setOpenChat(!openChat)} className={styles.chatBotIcon} >
          {!openChat && <div className={styles.chatBotIconWrapper} id='CHATICON'>
            <img src={chatBotIcon} alt='chat bot' />
          </div>}
        </div>
        <div className={styles.pdfWrapper}>
          <button onClick={handleButtonClick}>{showPDF ? "Hide Resume" : "Resume"}</button>
          {showPDF && (
            <div className={styles.pdfStyles}>
              <embed src={cv} type="application/pdf" width="100%" height="100%" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
