'use client'

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import styles from './youtube-video.module.css';
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

export default function YoutubeVideos() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    <div className={styles.embla__slide}>
                        <Image
                            priority={false}
                            src='/youtube-videos/youtube_video_example.png'
                            alt='Youtube Example'
                            className={styles.imageVideo}
                            width={600}
                            height={400} />
                    </div>
                    <div className={styles.embla__slide}>
                        <Image
                            priority={false}
                            src='/youtube-videos/youtube_video_example.png'
                            alt='Youtube Example'
                            className={styles.imageVideo}
                            width={600}
                            height={400} />
                    </div>
                    <div className={styles.embla__slide}>
                        <Image
                            priority={false}
                            src='/youtube-videos/youtube_video_example.png'
                            alt='Youtube Example'
                            className={styles.imageVideo}
                            width={600}
                            height={400} />
                    </div>
                </div>
            </div>

            <div className={styles.embla__controls}>
                <div className={styles.embla__dots}>
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={styles.embla__dot.concat(
                                index === selectedIndex ? ` ${styles.embla__dot__selected}` : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}