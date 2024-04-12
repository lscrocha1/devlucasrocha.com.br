'use client';

import styles from './experiences.module.css';
import sharedStyles from '../shared/shared.module.css';
import { IJobExperience } from "@/src/interfaces/IJobExperience";
import ptExperiences from '@/public/data/experiences-pt.json';
import enExperiences from '@/public/data/experiences-en.json';
import { useEffect, useState } from "react";
import Loader from '../shared/loader.component';
import Image from 'next/image';

export default function Experience(
    { title, subtitle, downloadHere, experiencesId }:
        { title: string, subtitle: string, downloadHere: string, experiencesId: string }) {

    const [jobExperiences, setJobExperiences] = useState<IJobExperience[]>([]);

    const [downloadLink, setDownloadLink] = useState<string>();

    useEffect(() => {
        getJobExperiences();
        getCVDownloadLink()
    }, []);

    async function getJobExperiences() {
        let result: IJobExperience[] = [];

        if (location.pathname.includes('pt'))
            result = ptExperiences;
        else
            result = enExperiences;

        setJobExperiences(result);
    }

    function getCVDownloadLink() {
        if (location.pathname.includes('pt'))
            setDownloadLink('/cv/CV_Lucas_Rocha_pt.pdf');
        else
            setDownloadLink('/cv/CV_Lucas_Rocha_en.pdf');
    }

    function renderExperiences() {
        return [
            jobExperiences.map((experience, index) => (
                <div className={styles.experienceWrapper} key={index}>
                    <div className={styles.imageWrapper}>
                        <Image
                            className={styles.companyImage}
                            src={experience.image}
                            width={63}
                            height={63}
                            alt={`${experience.companyName} logo`} />
                    </div>
                    <div className={styles.experienceDetailWrapper}>
                        <a className={`${styles.companyName} ${sharedStyles.clickableLink}`} href={experience.url} target="_blank" rel="noreferrer nofollow">{experience.companyName}</a>
                        <div className={styles.experienceTitle}>{experience.title}</div>
                        <div className={styles.experiencePeriod}>{experience.period}</div>
                        <div className={styles.experienceDescription}>{experience.description}</div>
                        <div className={styles.skillsWrapper}>
                            <b className={styles.skills}>Skills:</b>
                            {experience.skills.map((skill, indexSkill) => <span key={indexSkill} className={styles.experienceSkill}>{skill}</span>)}
                        </div>
                    </div>
                </div>
            ))
        ]
    }

    return (
        <article className={`${sharedStyles.container} ${styles.experienceContainer}`} id={experiencesId}>
            <h1 className={`${sharedStyles.title} ${styles.title}`}>{title}</h1>
            <h3 className={`${sharedStyles.subtitle} ${styles.subtitle}`}>
                {subtitle}&nbsp;
                <a className={sharedStyles.clickableLink} href={downloadLink} download="Lucas Rocha - CV">{downloadHere}</a>.
            </h3>
            {
                jobExperiences && jobExperiences.length > 0
                    ? renderExperiences()
                    : <Loader centered={true} />
            }
        </article>
    )
}