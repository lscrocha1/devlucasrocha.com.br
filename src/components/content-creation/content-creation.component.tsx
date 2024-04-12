import { useTranslations } from "next-intl";
import sharedStyles from '../shared/shared.module.css';
import styles from './content-creation.module.css';
import useEmblaCarousel from "embla-carousel-react";
import YoutubeVideos from "./youtube-video/youtube-video.component";

export default function ContentCreation() {
    const t = useTranslations('contentCreation');
    const tShared = useTranslations('shared');

    return (
        <article className={`${sharedStyles.container} ${sharedStyles.textCenter} ${styles.contentCreationContainer}`} id={tShared('contentCreationId')}>
            <h1 className={sharedStyles.title}>{t('title')}</h1>
            <h3 className={`${sharedStyles.subtitle} ${styles.lineBreaker}`}>
                {t('livesOnSubtitle')}
                &nbsp;<a className={sharedStyles.clickableLink} target="_blank" rel="noreferrer nofollow" href="https://twitch.tv/devlucasrocha">Twitch</a>
                ,&nbsp;<a className={sharedStyles.clickableLink} target="_blank" rel="noreferrer nofollow" href="https://kick.com/devlucasrocha">Kick</a>
                &nbsp;{t('andSubtitle')}&nbsp;
                <a className={sharedStyles.clickableLink} target="_blank" rel="noreferrer nofollow" href="https://youtube.com/@devlucasrocha">YouTube</a>&nbsp;
                {t('livesTimeSubtitle')}&nbsp;
                <a className={sharedStyles.clickableLink} target="_blank" rel="noreferrer nofollow" href="https://youtube.com/@devlucasrocha">YouTube</a>.
            </h3>
            <div className={styles.twitchWrapper} id="twitch"></div>
            <h3 className={sharedStyles.subtitle}>
                {t('onSubtitle')}&nbsp;
                <a className={sharedStyles.clickableLink} target="_blank" rel="noreferrer nofollow" href="https://youtube.com/@devlucasrocha">YouTube</a>{t('youtubeVideosSubtitle')}
            </h3>
            <h2 className={`${sharedStyles.subtitleHeader} ${styles.latestVideosWrapper}`}>
                {t('latestVideos')}
            </h2>
            <YoutubeVideos />
        </article>
    )
}