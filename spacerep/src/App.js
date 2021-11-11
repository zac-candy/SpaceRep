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
      curd : cd
    }

    setTopics(topics.concat(topicOb))
  }

  const GetDates = ({curDate}) => {

    const rep1 = curDate.setDate(curDate.getDate() + 1)


    return (
      <ul>
        <li>{rep1.toDateString()}</li>
      </ul>
    )
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
      <h2>SCHEDULE</h2>
      <ul>
      {topics.map(topic => <div>
      <p><b><i>{topic.name}</i></b> has to be revised on the following days</p>
      <GetDates curDate = {topic.curd} />
      </div>) }
      </ul>
     
    </div>
  )
}



export default App;
