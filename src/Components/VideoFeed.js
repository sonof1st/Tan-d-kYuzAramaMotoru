import React from 'react';
import '../App.css'
 

const VideoFeed = () => {

    return (
        <div className="video_feed">
            <h2>Güvenlik Kamerası</h2>
            <iframe 
               allowFullScreen
                title='camera feed'
                webkitallowfullscreen
                mozallowfullscreen
                src={"http://192.168.1.102:8080/browserfs.html"}
                // src={"https://www.researchgate.net/publication/331626135/figure/fig4/AS:734369975123969@1552098854172/Person-of-Interest-The-Machine-timeline-interface-48-Similar-to-shows-such-as-Burn-Notice.png"}
                frameBorder="0"
                width="100%"
                height="400" />
        </div>
    );
};

export default VideoFeed;