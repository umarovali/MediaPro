import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { BsFillPlayFill } from "react-icons/bs";

import Video1 from "../../assets/videos/video_1.MP4";
import Video2 from "../../assets/videos/video_2.mp4";
import Video3 from "../../assets/videos/video_3.MOV";
import Video4 from "../../assets/videos/video_4.MOV";

export default function VideoSwiper() {
    const videoRefs = useRef([]);
    const [playingIndex, setPlayingIndex] = useState(null); // Текущий активный

    const videos = [Video1, Video2, Video3, Video4];

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
          450: {
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
                            style={{
                            }}
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