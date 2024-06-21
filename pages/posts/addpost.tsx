import { useState } from 'react';
import axios from "axios";
import styles from '../../styles/Post.module.css';

export default function AddPost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [err, setErr] = useState("");


    // //function CREATE POST
    async function HandleSubmit() {
        alert('you successfully add new post')  
        // const form = new  FormData();
        // form.append('title', title);
        // form.append("body" , body);
        // try {
        //     const res = await axios.post(`http://127.0.0.1:8000/api/post/create_post`,form) ;
        //     console.log(res);         
        //     // alert('you successfully add new post')  
        //     // window.location.pathname = "/posts";
        // } catch (err) {
        //     setErr('try again');
        //     console.log(err)
        // }

    }
    return (
        <>
        <div className={styles.dotsUp} ></div>
        <div className={styles.dotsDown} ></div>
        <h3 className={styles.mainTitle}>Create Post</h3>
        <div className={styles.parent}>
            <form className={styles.form} onSubmit={HandleSubmit}>
                    <label className={styles.label}> Title: </label>
                    <input
                        className={styles.input}
                        name='title'
                        value={title}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        type="text" placeholder="title....." />

                    <label className={styles.label}> Body: </label>
                    <input
                        className={styles.input}
                        name='body'
                        value={body}
                        required
                        onChange={(e) => setBody(e.target.value)}
                        type="text" placeholder="body....." />
                <div style={{textAlign:"center"}}>
                <button 
                disabled={
                    title.length > 1 
                    ? false  : true
                    } className={styles.btnpost}>Create Post</button>
                    </div>

            </form>
            {err !== "" && <span className="error">{err}</span>}


        </div>
            
        </>
    );
}

