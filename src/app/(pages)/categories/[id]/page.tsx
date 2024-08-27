import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";
import { notFound } from "next/navigation";

/* eslint-disable @next/next/no-img-element */
export default async function SongsByCategoryPage({ params } : { params : {id : string }}) {

  let result:any = await new Promise((resolve) => {
    const categoryRef = ref(dbFirebase, `categories/${params.id}`);
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
      {/* CardInfo */}
      <CardInfo
        image={result.image}
        title={result.title}
        description={result.description}
      />

      {/* Section 2 */}
      <Section2 
       id={params.id}
      />
    </>
  );
}