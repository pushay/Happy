import React,{ useEffect, useState} from 'react';
import SingleSound from './SingleSound/SingleSound';
import waves from '../../Assets/waves.png';
import rainy from '../../Assets/rainy.png';
import moon from '../../Assets/moon.png';
import clean_hands from '../../Assets/clean_hands.png';
import music from '../../Assets/music.png';
import soap from '../../Assets/soap.mp3';
import relax from '../../Assets/relax.mp3';
import night from '../../Assets/night.mp3';
import rain from '../../Assets/rain.mp3';
import sea from '../../Assets/sea.mp3'

function Sounds(props){

    const [sound, setSound] = useState('')

    const turnOnMusicHandler = (music) => {
        if (sound) {
            sound.pause();
            sound.currentTime = 0;
            setSound(null)
        }
            let song = new Audio();
            song.src = music;
            song.load();
            song.play();
            setSound(song);
    }


    useEffect( () => () => {
        if (sound) {
            sound.pause()
        }
    });

    return(
        <div className="sounds">
            <SingleSound turnMusic={turnOnMusicHandler} setBackground={props.changeBackground} music={sea} image={waves}/>
            <SingleSound turnMusic={turnOnMusicHandler} setBackground={props.changeBackground} music={rain} image={rainy}/>
            <SingleSound turnMusic={turnOnMusicHandler} setBackground={props.changeBackground} music={night} image={moon}/>
            <SingleSound turnMusic={turnOnMusicHandler} setBackground={props.changeBackground} music={soap} image={clean_hands}/>
            <SingleSound turnMusic={turnOnMusicHandler} setBackground={props.changeBackground} music={relax} image={music}/>
        </div>
    )
}

export default Sounds