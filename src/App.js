import { useState, useEffect } from 'react'

import styles from './app.module.css'

export function App() {
  const [text, setText] = useState(0)
  const [messageList, setMessageList] = useState([
  ])

  const handleClick = () => {
    let newMessage = {
      author: 'me', text: text
    }
    setMessageList([...messageList, newMessage])
    setText('')
  }

  const handleChange = (event) => {
    setText(event.target.value)
  }

  useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author === 'me') {
      let newMessage = {
        author: 'bot', text: 'bot message'
      }
      setMessageList([...messageList, newMessage])
    }
    console.log(messageList)
  });

  return (
    <>
      <h1> Hello world!!!</h1>
      <h2 > Text Message: {text}</h2>
      <input type='text' value={text} onChange={handleChange} className={styles.border} />
      <button className='btn' onClick={handleClick}>Отправить</button>
      <ul className={styles.message_list}>
        {messageList.map((item) => (
          <li className={styles.message_list__item}>{item.author}: {item.text}</li>
        ))}
      </ul>
    </>
  )
}

export default App