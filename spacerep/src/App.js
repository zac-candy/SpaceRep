import React from "react";
import { useState } from "react";

const App = () => {

  const [topics, setTopics] = useState([])
  const [newTopic, setNewTopic] = useState('')


  const handleTopicChange = (event)=> {
    event.preventDefault()
    setNewTopic(event.target.value)
  }

  const addTopic = (event)=> {
    event.preventDefault()
    const topicOb = {
      id : 1,
      name: newTopic,
      curd : new Date()
    }

    setTopics(topics.concat(topicOb))
    setNewTopic('')
  }

  function addDays(date, days) {

  }

  const GetDates = ({curDate}) => {
    let example = new Date(curDate)
    const cur = new Date(curDate)
    const rep1 = new Date(example.setDate(example.getDate() + 1))
    const rep2 = new Date(example.setDate(example.getDate() + 7))
    const rep3 = new Date(example.setDate(example.getDate() + 30))
    const rep4 = new Date(example.setDate(example.getDate() + 90))
  
    return (
      <ul>
        <li>{cur.toDateString()}</li>
        <li>{rep1.toDateString()}</li>
        <li>{rep2.toDateString()}</li>
        <li>{rep3.toDateString()}</li>
        <li>{rep4.toDateString()}</li>
      </ul>
    )
  }



    return (
    <div>
      <h1>SpaceRep</h1>
      <ul>
      <h2>Enter the Topic</h2>
      <form  onSubmit = {addTopic}>
        
        <p><input value  = {newTopic} onChange = {handleTopicChange}/></p>
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
