'use client';

import sharedStyles from '../shared/shared.module.css';
import { IJobExperience } from "@/src/interfaces/IJobExperience";
import ptExperiences from '@/public/data/experiences-pt.json';
import enExperiences from '@/public/data/experiences-en.json';
import { useEffect, useState } from "react";
import Loader from '../shared/loader.component';

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
                <div key={index}>
                    <li>{experience.companyName}</li>
                    <li>{experience.description}</li>
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