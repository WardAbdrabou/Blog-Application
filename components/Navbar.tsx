import Link from "next/link";
import styles from '../styles/Navbar.module.css';
// import landing from "../public/images/landing-image.png";
// import Image from "next/image";
// import { MdKeyboardDoubleArrowDown } from "react-icons/md";
// import stylesN from '../styles/Home.module.css';
import { MdAddToPhotos } from "react-icons/md";


export default function Navbar() {
    return (
      <>
      
      <div>
        <div className={styles.header} id="header">
        <div className={styles.container}>
            <a href="#"  className={styles.logo}>Blog</a>
            <ul className={styles.mainNav}>
                <li><Link href="/" className={styles.LinkNav}>Home</Link></li>
                {/* <li><Link href="/posts" className={styles.LinkNav}>Posts</Link></li> */}
                <li><Link href="/posts/addpost" className={styles.LinkNav}><MdAddToPhotos />
                </Link></li>
               
            </ul>
        </div>
    </div>

    {/* <div className={stylesN.landing}>
        <div className={stylesN.container}>
            <div className={stylesN.text}>
                <h1 className={stylesN.headOne}>Welcome , To Blog World</h1>
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
    </div> */}
      </div>
      </>
    );
  }