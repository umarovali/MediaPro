import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { BsFillPlayFill } from "react-icons/bs";

import Video1 from "../../assets/videos/video_1.MOV";
import Video2 from "../../assets/videos/video_2.mp4";
import Video3 from "../../assets/videos/video_3.mp4";
import Video4 from "../../assets/videos/video_4.MOV";

export default function VideoSwiper() {
    const videoRefs = useRef([]);
    const [playingIndex, setPlayingIndex] = useState(null);

    const videos = [Video1, Video2, Video3, Video4];

    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (!video) return;

            video.muted = true;
            video.play().then(() => {
                setTimeout(() => {
                    video.pause();
                    video.currentTime = 0;
                }, 1000);
            }).catch(() => {
                video.pause();
            });
        });
    }, []);

    const handleVideoClick = (index) => {
        videoRefs.current.forEach((video, i) => {
            if (!video) return;

            if (i === index) {
                if (video.paused) {
                    video.play();
                    video.muted = false;
                    setPlayingIndex(index);
                } else {
                    video.pause();
                    video.muted = true;
                    setPlayingIndex(null);
                }
            } else {
                video.pause();
                video.currentTime = 0;
                video.muted = true;
            }
        });
    };

    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                460: {
                    slidesPerView: 2,
                },
                800: {
                    slidesPerView: 3,
                },
                1150: {
                    slidesPerView: 4,
                },
            }}
        >
            {videos.map((videoUrl, index) => (
                <SwiperSlide key={index} style={{ position: "relative" }}>
                    <div className='video_block'>
                        <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            src={videoUrl}
                            muted
                            playsInline
                            preload="metadata"
                            onClick={() => handleVideoClick(index)}
                        />
                        {playingIndex !== index && (
                            <BsFillPlayFill
                                className='play_icon'
                                onClick={() => handleVideoClick(index)}
                            />
                        )}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}