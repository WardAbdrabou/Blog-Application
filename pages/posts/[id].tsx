import Image from "next/image";
import boxImage from "../../public/images/cat-03.jpg";
import styles from '../../styles/Post.module.css';
import { useRouter } from "next/router";


export default function PostDetails(props: any) {

    return (
      <>
      <div className={styles.pageDetails}>
      <h1 className={styles.postTitleD}>Post Details</h1>
            <div className={styles.postDetails}>
            <Image src={boxImage} alt="not Found" className={styles.imgdetial} />
                    <div className={styles.contentpost }>
                        <h3 className={styles.postTitle}>
                        {props.post.title}
                        </h3>

                        <p className={styles.postBody}>{props.post.body}</p>
                        </div> 
                    
                </div>
      </div>
      
      </>
    );
  }

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map( (d: { id: any; }) => {
    return{
      params:{id: `${d.id}`}
    }

  })

  return{
    paths:paths,
    fallback: false,
  }
  
}
  export async function getStaticProps(context: { params: { id: any; }; }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const data = await res.json();

    return{
      props:{
        post: data
      }
    }
    
  }