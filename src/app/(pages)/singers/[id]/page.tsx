import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { notFound } from "next/navigation";

export default async function DetailOfSingerPage({ params } : {params : { id : string}}) {

    const result : any = await new Promise((resolve) => {
      const singerRef = ref(dbFirebase, `singers/${params.id}`);
      onValue(singerRef, async (snapshot) => {
        const data = snapshot.val();
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


          {/* Section2: Danh sách bài hát   */}

          <Section2 singerId={params.id} />
        </>
    )
}