"use client"
/* eslint-disable @next/next/no-img-element */
import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Section1() {
  const [data , setData] = useState([]);
  const searchParam = useSearchParams();
  const keyword = searchParam.get("keyword") || "";

  useEffect(() => {
    const fetchApi = async () => {
      let result:any = await new Promise((resolve) => {
        const songsRef = ref(dbFirebase, "songs");
        onValue(songsRef, async (snapshot) => {
            const data : any = [];
            for(const key in snapshot.val()) {
                const value = snapshot.val()[key];
                data.push({
                    id: key,
                    title: value.title,
                    image: value.image,
                    audio: value.audio,
                    listen: value.listen,
                    link: `/song/${key}`
                })
            }
            resolve(data);
        })
    })
    const regex = new RegExp(keyword ,"i");
    result = result.filter((item : any) => regex.test(item.title));
    setData(result);
   }
   fetchApi();
  }, [keyword])

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Ket Qua Tim Kiem" />

        <SongList2 data={data} />
      </div>
    </>
    );
}