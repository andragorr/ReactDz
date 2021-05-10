import {useEffect, useState} from 'react';
import Comment from "../comment/Comment";
import axiosInstance from   '../../services/api';

export default function Comments() {
    let [comments, setComments] = useState([]);
    let [singleComment , setSingleComment] = useState(null);

    useEffect(() => {
        axiosInstance.get('/comments').then(value => setComments([...value.data]));
    },[]);

    const search = (id) => {
        let findComment = comments.find(value => value.id === id);
        console.log(findComment);
        setSingleComment(findComment);
    };

    return (
        <div className={'wrap-comments'}>
            <div className={'comments-box'}>
                {
                    comments.map(value => <Comment
                    key={value.id}
                    item={value}
                    search={search}/>)
                }

            </div>
            <div className={'single-comment-box'}>
                {
                    singleComment ? (<h2>{singleComment.id} -
                        {singleComment.name} -
                        {singleComment.email}  </h2>) : (<div>comment not defined</div>)
                };

            </div>

        </div>
    );

}