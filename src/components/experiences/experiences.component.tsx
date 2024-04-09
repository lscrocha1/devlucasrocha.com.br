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

    useEffect(() => { getJobExperiences() }, []);

    async function getJobExperiences() {
        let result: IJobExperience[] = [];

        if (location.pathname.includes('pt'))
            result = ptExperiences;
        else
            result = enExperiences;

        setJobExperiences(result);
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
                    <div>
                        <a href={experience.url} target="_blank" rel="noreferrer nofollow">{experience.companyName}</a><br />
                        <span>{experience.title}</span><br />
                        <span>{experience.period}</span><br />
                        <span>{experience.description}</span><br />
                        <span>{experience.skills}</span>
                    </div>
                </div>
            ))
        ]
    }

    return (
        <article id={experiencesId}>
            <h1 className={sharedStyles.title}>{title}</h1>
            <h3 className={sharedStyles.subtitle}>
                {subtitle}&nbsp;
                <a href='#download'>{downloadHere}</a>.
            </h3>
            {
                jobExperiences && jobExperiences.length > 0
                    ? renderExperiences()
                    : <Loader centered={true} />
            }
        </article>
    )
}