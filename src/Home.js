import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'
import Screen from './Screen'
import css from './Home.module.sass'
import likeButton from './like.svg'

function Home() {
    const [video, setVideo] = useState(null)
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3001/').then(({ data }) => {
            setVideo(data)
        })
    }, [])

    if (!video) {
        return <Screen>Loading...</Screen>
    }

    return (
        <div>
            <button
                type="button"
                onClick={() => {
                    setShowMenu(true)
                }}
                className={css.menuButton}
            >
                <span />
                <span />
                <span />
            </button>
            <div
                style={{
                    borderRadius: 12,
                    overflow: 'hidden',
                }}
            >
                <ReactPlayer url={video.url} width={414} height={736} playing />
            </div>

            <div style={{ marginTop: 8, marginLeft: 4 }}>
                <strong>{video.username}</strong>
            </div>
            <div className={css.likeButtonContainer}>
                <button
                    type="button"
                    className={css.likeButton}
                    onClick={() => {
                        axios.post('/like', {
                            id: 123,
                        })
                    }}
                >
                    <img src={likeButton} alt="like button" />
                </button>
            </div>
        </div>
    )
}

export default Home
