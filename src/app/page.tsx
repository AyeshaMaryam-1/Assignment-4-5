import Image from "next/image";

export default function Home(){
  return(
    <div className="parentContainer">
      <Image className="bg-img" 
            src="/bg.webp"
            alt="img"
            width={980}
            height={450}/>

      <h1 className="welcome tracking-in-expand-fwd-top">Welcome to my Blogging Website</h1>
    </div>
  );
}