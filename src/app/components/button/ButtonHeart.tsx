"use client"
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { ref, runTransaction } from "firebase/database";
import { useEffect, useState } from "react";
import {  FaHeart } from "react-icons/fa6";
export default function ButtonHeart(props : any) {
  
  const [isActive, setisActive] = useState(false);
 
    const { id, wishlist } = props;

    useEffect(() => {
      onAuthStateChanged(authFirebase, (user) => {
        if(user) {
          const userId = user.uid;

          if(wishlist && wishlist[userId]) {
            setisActive(true);
          }
        }
      });
    }, []);


    const handleAddWishList = () => {
        const userId = authFirebase?.currentUser?.uid;

        if(id && userId) {
          const songRef = ref(dbFirebase, `/songs/${id}`);
          runTransaction(songRef, (song) => {
            if(song) {
              if(song.wishlist && song.wishlist[userId]) {
                song.wishlist[userId] = null;
                setisActive(false);
              } else {
                if(!song.wishlist) {
                  song.wishlist = {};
                }
                song.wishlist[userId] = true;
                setisActive(true);
              }
            }
            return song;
          });
        }
    }

    return (
        <>
          <button 
          className={
            "w-[34px] h-[34px] rounded-full border  inline-flex items-center justify-center text-[15px] text-white ml-[10px]" +
            (isActive ? " border-primary bg-primary" : " border-white")
          }
          onClick={handleAddWishList}
          >
            <FaHeart />
          </button>
        </>
    )
}