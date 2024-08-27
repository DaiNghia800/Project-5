import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";
import { notFound } from "next/navigation";

export default async function SongDetailPage({ params } : { params : {id : string }}) {
  


  let result:any = await new Promise((resolve) => {
    const categoryRef = ref(dbFirebase, `songs/${params.id}`);
    onValue(categoryRef, async (snapshot) => {
        const data : any = snapshot.val();
        resolve(data);
        });
    });

    if(!result) {
      notFound();
    }

  

    return (
        <>
          {/* CardInfor  */}
          <CardInfo
          image={result.image}
          title={result.title}
          description={result.description}
          />

          {/*Section2: Lời bài hát   */}

          <Section2 
           lyric={result.lyric}
          />

          {/* Section3: Bài hát cùng danh mục   */}

          <Section3
           id={params.id}
           songId={params.id}
          />
        </>
    )
}