import Link from "next/link";
import Image from "next/image";

export default function Responsive() {
    return (
      <div className="parentContainer">
        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
          <Image className="img" 
            src="/AI & ML.jpg"
            alt="img"
            width={280}
            height={320}/>
          </div>
          <h1 className="title">Course 1</h1>
          <p className="description">AI and Machine Learning{" "}</p>
          <Link href={"/components/course1"}><button className="readMore">Read More</button></Link>
        </div>
  
        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
          <Image className="img" 
            src="/cyber.jpg"
            alt="img"
            width={270}
            height={300}/>
          </div>
          <h1 className="title">Course 2</h1>
          <p className="description">Cybersecurity and Networking{" "}</p>
          <Link href={"/components/course2"}><button className="readMore">Read More</button></Link>
        </div>
  
        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
          <Image className="img" 
            src="/cloud.jpg"
            alt="img"
            width={300}
            height={170}/>
          </div>
          <h1 className="title">Course 3</h1>
          <p className="description">Cloud Computing and Architecture{" "}</p>
          <Link href={"/components/course3"}><button className="readMore">Read More</button></Link>
        </div>
        <div className="childContainer bounce-in-right">
            <div className="imageContainer">
            <Image className="img" 
            src="/data-science.jpg"
            alt="img"
            width={270}
            height={160}/>
            </div>
          <h1 className="title">Course 4</h1>
          <p className="description">Data Science and Analytics{" "}</p>
          <Link href={"/components/course4"}><button className="readMore">Read More</button></Link>
        </div>
        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
          <Image className="img" 
            src="/digital-marketing.jpg"
            alt="img"
            width={300}
            height={170}/>
          </div>
          <h1 className="title">Course 5</h1>
          <p className="description">Digital Marketing and E-commerce{" "}</p>
          <Link href={"/components/course5"}><button className="readMore">Read More</button></Link>
        </div>
        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
          <Image className="img" 
            src="/web.jpg"
            alt="img"
            width={280}
            height={190}/>
          </div>
          <h1 className="title">Course 6</h1>
          <p className="description">Full Stack Web Development{" "}</p>
          <Link href={"/components/course6"}><button className="readMore">Read More</button></Link>
        </div>
      </div>
    );
  }