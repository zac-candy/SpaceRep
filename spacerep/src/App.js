import React from "react";
import { useState } from "react";

const App = () => {

  const [topics, setTopics] = useState([])
  const [newTopic, setNewTopic] = useState('a new topic...')


  const handleTopicChange = (event)=> {
    event.preventDefault()
    setNewTopic(event.target.value)
  }

  const addTopic = (event)=> {
    event.preventDefault()
    const topicOb = {
      name: newTopic,
      curDate: new Date()
    }

    setTopics(topics.concat(topicOb))
  }


 

    return (
    <div>
      <h1>SpaceRep</h1>
      <ul>
      <h2>Enter the Topic</h2>
      <form onSubmit = {addTopic}>
        
        <p><input onChange = {handleTopicChange}/></p>
        <p><button type = "submit" >Submit</button></p>
      </form>


      </ul>
      <h2>Topics to revise today</h2>
      <ul>
      </ul>
     
    </div>
  )
}



export default App;
