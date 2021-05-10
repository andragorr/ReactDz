import {useEffect, useState} from 'react';
import Post from "../post/Post";
import axiosInstance from '../../services/api';
import './Posts.css';

export default function Posts(){
    let [posts, setPosts] = useState([]);
    let [chosenPost, setChosenPost] = useState(null);

    useEffect(() => {
        axiosInstance.get('/posts').then(value => setPosts([...value.data]));
    },[]);

    const search = (id) =>{
        let findedPost = posts.find(value => value.id === id);
        console.log(findedPost);
        setChosenPost(findedPost);
    };




    return(
        <div className={'wrap-post'}>
            <div className={'posts-box'}>
                {
                    posts.map((value) => <Post key={value.id}
                    item={value}
                    search={search}/>)
                }
                <div className={'single-post-box'}>
                    {
                        chosenPost ? (<h2>{chosenPost.id} - {chosenPost.title}</h2>) : (<div>post not defined</div>)
                    }
                </div>

            </div>

        </div>
    );



}