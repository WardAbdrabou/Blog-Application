import Link from "next/link";
import { Key, Suspense } from "react";
import styles from "../styles/Posts.module.css";
import Image from "next/image";
import boxImage from "../public/images/cat-03.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import Landing from "@/components/landing";

export default function Home(props: any) {
  return (
    <>
   <Landing></Landing>
      <div className={styles.posts}>
      <h2 className={styles.mainTitle}>Posts</h2>

        <div className={styles.container}>
          <div className={styles.containerArt}>
          
              {props.posts.map(
                (post: { id: Key; title: string; body: string ; img:any}) => (
                  <>
                    <div className={styles.box}>
                    <Image src={boxImage} alt="" className={styles.image} />
                    {/* <Image src={post.img} alt="not found" className={styles.image} /> */}
                    <div className={styles.content}>
                      <div key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                          <h3 className={styles.boxTitle}>{post.title}</h3>
                          <p className={styles.boxBody}>{post.body}</p>
                        </Link>
                      </div>
                    </div>
                    <div className={styles.info}>
                      <Link
                        href={`/posts/${post.id}`}
                        className={styles.ReadMore}
                      >
                        Read More
                      </Link>
                      <FaLongArrowAltRight className={styles.arrowRight} />
                    </div>
                    </div>
                  </>
                )
              )}
          </div>
        </div>
      </div>
     
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props:{
      posts:data
    }
  }
  
 } 