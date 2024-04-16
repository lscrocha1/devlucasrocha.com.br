import { useTranslations } from "next-intl"
import Image from "next/image";
import sharedStyles from '../shared/shared.module.css';
import styles from './about-me.module.css';

export default function AboutMe() {
    const tShared = useTranslations('shared');
    const t = useTranslations('aboutMe');

    function getIntroduction() {
        const introductionText = t('introduction');

        const workAge = new Date().getUTCFullYear() - 2016;

        const myAge = new Date().getUTCFullYear() - 1998;

        return introductionText
            .replace('ageReplace', workAge.toString())
            .replace('myAgeReplace', myAge.toString());
    }

    function getHardSkills() {
        const hardSkills = t('hardSkills').split(',');

        return hardSkills.map((skill: string, index: number) => <span key={index} className={sharedStyles.chip}>{skill}</span>);
    }

    function getSoftSkills() {
        const softSkills = t('softSkills').split(',');

        return softSkills.map((skill: string, index: number) => <span key={index} className={sharedStyles.chip}>{skill}</span>);
    }

    return (
        <article id={tShared('aboutMeId')} className={`${sharedStyles.container} ${styles.aboutMeContainer}`}>
            <div className={styles.introductionWrapper}>
                <div>
                    <Image
                        className={styles.memoji}
                        src='/memoji.png'
                        alt='Me as memoji'
                        width={400}
                        height={400}
                        quality={100} />
                </div>
                <div className={styles.introductionTextWrapper}>
                    {getIntroduction()}
                </div>
            </div>
            <div className={styles.hobbiesWrapper}>
                {t('hobbies')}
            </div>
            <div>
                <b>Hard Skills</b>
                <div className={styles.skillsWrapper}>
                    {getHardSkills()}
                </div>
            </div>
            <div className={styles.softSkillsWrapper}>
                <b>Soft Skills</b>
                <div className={styles.skillsWrapper}>
                    {getSoftSkills()}
                </div>
            </div>
        </article>
    )
}