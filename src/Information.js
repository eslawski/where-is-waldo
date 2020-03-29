import React, {useState} from 'react';
import './Information.css';
import infoIcon from './images/information.png'
import wallyAndFriends from './images/wally-and-friends.png'


function Information() {
    const [modalOpen, setModalOpen] = useState(true);

    return (
        <>
            <img className="info-icon" src={infoIcon} onClick={() => setModalOpen(!modalOpen)}/>
            <div className={`info-modal ${modalOpen ? 'open' : 'closed'}`}>
                <h1>Where's Waldo?</h1>

                <div className="instructions">
                    Waldo and his friends have gone missing! Can you help find all of them in each of the wacky worlds?
                </div>

                <img className="wally-and-friends" src={wallyAndFriends}/>

                <div className="close-modal" onClick={() => setModalOpen(false)}>Let's Go!</div>

                <small>built using <a href="https://github.com/eslawski/react-iiif-viewer">react-iiif-viewer</a></small>
            </div>
        </>
    )
}

export default Information;
