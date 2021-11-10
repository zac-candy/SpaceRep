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
      curDate: new Date().toISOString(),
      reps: [this.curDate, this.curDate + 1, this.curDate + 7, this.curDate + 30, this.curDate + 90]
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
      {topics.m()}
      <ul>

      </ul>
     
    </div>
  )
}



export default App;
