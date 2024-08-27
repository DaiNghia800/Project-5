"use client"
import { FaBackwardStep, FaPlay, FaForwardStep, FaVolumeHigh, FaPause } from "react-icons/fa6";
export default function PlayAction() {

    const handlePlay = () => {
        const playAudio : any = document.querySelector(".play-audio");
        const boxButtonPlay = playAudio?.querySelector(".box-button-play");
        const innerAudio = playAudio?.querySelector(".inner-audio");

        if(boxButtonPlay?.classList.contains("play")) {
            boxButtonPlay.classList.remove("play");
            innerAudio.pause();
        }
        else {
            boxButtonPlay?.classList.add("play");
            innerAudio.play();
        }
    }

    const handleNextPrev = (action : any) => {
      const playAudio = document.querySelector(".play-audio");
      const isSongCurrent = playAudio?.getAttribute("song-id");
      const elementSongCurrent : any = document.querySelector(`[song-list] [song-id="${isSongCurrent}"]`);

      if(elementSongCurrent) {
        switch (action) {
          case "pre":
            const elementSongPre = elementSongCurrent.previousElementSibling;    
            if(elementSongPre) {
              const buttonPlay = elementSongPre.querySelector(".inner-button-play");
              buttonPlay.click();
            }        
            break;

          case "next":
            const elementSongNext = elementSongCurrent.nextElementSibling;  
            if(elementSongNext) {
              const buttonPlay = elementSongNext.querySelector(".inner-button-play");
              buttonPlay.click();
            }        
            break;
        }
      }
    }

    return (
        <>
         <div className="flex items-center justify-center">
            <button 
              className="text-[16px] text-white"
              onClick={() => handleNextPrev("pre")}
            >
              <FaBackwardStep />
            </button>
            <button 
            onClick={handlePlay}
            className="text-[16px] text-white w-[32px] h-[32px] bg-primary rounded-full inline-flex items-center justify-center mx-[42px] box-button-play">
              <FaPlay className="inner-icon-play"/>
              <FaPause className="inner-icon-pause"/>
            </button>
            <button 
              className="text-[16px] text-white"
              onClick={() => handleNextPrev("next")}
            >
              <FaForwardStep />
            </button>
        </div>
        </>
    );
}