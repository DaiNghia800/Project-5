"use client"
import { FaPlay } from "react-icons/fa6";
export default function ButtonPlay(props : any) {

    const handlePlay = () => {
        const elementPlayAudio : any = document.querySelector(".play-audio");

        elementPlayAudio.setAttribute("song-id", props.id);

        const elementAudio = elementPlayAudio?.querySelector(".inner-audio");
        const elementSource = elementPlayAudio?.querySelector(".inner-source");
        elementSource.src = props.audio;
        elementAudio.load();
        elementAudio.play();

        if(elementPlayAudio.classList.contains("hidden")) {
            elementPlayAudio.classList.remove("hidden");
        }

        const elementImage = elementPlayAudio?.querySelector(".inner-image");
        elementImage.src = props.image;
        elementImage.alt = props.title;

        const elementTitle = elementPlayAudio?.querySelector(".inner-title");
        elementTitle.innerHTML = props.title;

        const elementSinger = elementPlayAudio?.querySelector(".inner-singer");
        elementSinger.innerHTML = props.singer;

        const boxButtonPlay = document.querySelector(".box-button-play");
        boxButtonPlay?.classList.add("play");

        const boxPlayTime: any = document.querySelector(".box-play-time");
        const boxPlayTimeTotal = boxPlayTime?.querySelector(".inner-total");
        const boxPlayTimeCurrent = boxPlayTime?.querySelector(".inner-current");


        elementAudio.onloadedmetadata = () => {
            const totalTime = elementAudio.duration;
            boxPlayTimeTotal.max = totalTime;

            elementAudio.ontimeupdate = () => {
                const currentTime = elementAudio.currentTime;
                boxPlayTimeTotal.value = currentTime;

                const percent = currentTime * 100 / totalTime;

                boxPlayTimeCurrent.style.width = `${percent}%`;
            }
        }
    }

    return(
        <>
        <button  
           onClick={handlePlay}
           className={props.className + " inner-button-play"}
        >
           <FaPlay />
        </button>
        </>
    )
}