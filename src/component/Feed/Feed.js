import React, { useState, useEffect } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import EventIcon from '@material-ui/icons/Event';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';

import './Feed.css';
import InputOption from './InputOption/InputOption';
import Post from './Post/Post';
import db from '../firebase/firebase';
import { selectUser } from '../features/userSlice';

const Feed = () => {
    const [ posts, setPosts ] = useState([]);
    const [ input, setInput ] = useState('');
    const user = useSelector(selectUser);
    console.log(user)

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => setPosts(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
        }))))
    }, [])

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input 
                            value={input}
                            onChange={e => setInput(e.target.value)}
                        />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption 
                        Icon={ImageIcon}
                        title="Photo"
                        color="#70b5f9"
                    />
                    <InputOption 
                        Icon={PlayCircleFilledIcon}
                        title="Video"
                        color="#e7a33e"
                    />
                    <InputOption 
                        Icon={EventIcon}
                        title="Event"
                        color="#A9BABD"
                    />
                    <InputOption 
                        Icon={CalendarViewDayIcon}
                        title="Write artilce"
                        color="#f5987e"
                    />
                </div>
            </div>
            {posts.map(({ id, data: { name, description, message, photoUrl }}) => (
               <FlipMove>
                    <Post 
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
               </FlipMove>
            ))}
        </div>
    )
}

export default Feed
