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
    const cd = new Date()
    const topicOb = {
      id : 1,
      name: newTopic,
      reps : [cd, cd.setDate(cd.getDate() + 1),cd.setDate(cd.getDate() + 7),
        cd.setDate(cd.getDate() + 30),cd.setDate(cd.getDate() + 90)]
    }

    setTopics(topics.concat(topicOb))
  }
const nd = new Date()



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
      <h2>Topics entered</h2>
      <ul>
      {topics.map(topic => <p>{topic.name}</p>)}
      </ul>
     
    </div>
  )
}



export default App;
