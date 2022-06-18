import React from 'react'
import { useParams } from 'react-router-dom';
import styles from '../styles/Ciudad.module.css'



function Ciudad(props) {

  let {id} = useParams()//using hooks!

  //console.log(typeof +id);
  let ciudad = props.cities.filter((c)=> c.id === +id) //filter returns an array! remember that!
    
  return (
    <div className={styles.main}>
                <div className={styles.secondMain}>
                    <h2>{ciudad[0].name}</h2>
                    <div className={styles.info}>
                        <div>Temperature: {ciudad[0].temp} ºC</div>
                        <div>Weather: {ciudad[0].weather}</div>
                        <div>Wind: {ciudad[0].wind} km/h</div>
                        <div>Clouds: {ciudad[0].clouds}</div>
                        <div>Latitude: {ciudad[0].latitud}º</div>
                        <div>Longitude: {ciudad[0].longitud}º</div>
                    </div>
            </div>
        </div>
  )
}

export default Ciudad