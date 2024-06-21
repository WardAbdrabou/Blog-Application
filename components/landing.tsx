import landing from "../public/images/landing-image.png";
import Image from "next/image";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import stylesN from '../styles/Home.module.css';


export default function Landing() {
    return (
      <>
    <div className={stylesN.landing}>
        <div className={stylesN.container}>
            <div className={stylesN.text}>
                <h1 className={stylesN.headOne}>Welcome , To Blog Application</h1>
                <p className={stylesN.parag}>
                    Here Iam gonna share everything about my life. Books Iam reading,
                    Games Iam Playing, Stories and Events
                </p>
            </div>
            <div >
                <Image  src={landing} alt="" className={stylesN.image}/>
            </div>
        </div>
        <a href="#articlea" className={stylesN.goDown}>
        <MdKeyboardDoubleArrowDown className={stylesN.iconDown}/>

        </a>
    </div>    
      </>
    );
  }