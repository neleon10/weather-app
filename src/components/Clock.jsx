import React, { Component } from 'react'
import styles from '../styles/Clock.module.css'

// using a class component just to practise a little bit more. 

export default class Clock extends Component {

constructor(props){
    super(props);

    this.state = {
        time: new Date().toLocaleTimeString()
    }
}
    //component mounted --> set interval --> calls the function each 1s.
    componentDidMount(){
        this.intervalID = setInterval(()=> this.tick(),1000)
    }

    //component unmounted --> clears the interval 
    componentWillUnmount(){
        clearInterval(this.intervalID)
    }
    //tick() function --> updates the state whenever is called. (1s)
    tick(){
        this.setState ({
            time: new Date().toLocaleTimeString()
        })
    }
    

  render() {
              //div --> shows the state object --> (time: property.)
    return (
        <div className={styles.container}>
            <div className={styles.time}>{this.state.time}</div>
        </div>
    )
  }
}
