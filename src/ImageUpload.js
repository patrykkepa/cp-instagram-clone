import React, { useState } from 'react'

import { Button, Input } from '@material-ui/core';

import firebase from 'firebase';
import { db, storage } from './firebase'

import './ImageUpload.css';

function ImageUpload(props) {

    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');

    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0 ])
        }
    }

    const handleUpload = (e) => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress)
            },
           (error) => {
               console.log(error);
               alert(error.message);
           },
           () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection("posts").add({
                            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                            caption : caption,
                            imgURL : url,
                            username : props.username
                        });
                    setProgress(0);
                    setCaption('');
                    setImage(null);

                    })
           }
        )
    }

    return (
        <div className="imageUpload"> 
            <div className="imageUpload__inputs">
                <progress className="imageUpload__progress" value={progress} max="100" />
                <input type="text" placeholder="Enter a caption..." onChange={event => setCaption(event.target.value )} value={caption}/>
                <input type="file" onChange={handleChange}/>
                <Button onClick={handleUpload}>Upload</Button>
            </div>
            
        </div>
    )
}


export default ImageUpload

