'use client'

import styles from './contact.module.css';
import sharedStyles from '../shared/shared.module.css';
import { FormEvent, useCallback, useState } from 'react';
import { useReCaptcha } from 'next-recaptcha-v3';

export default function Contact({
    contactId,
    title,
    subtitle,
    tName,
    tMessage,
    tAuthorizeCheckbox,
    submit }: {
        contactId: string,
        title: string,
        subtitle: string,
        tName: string,
        tMessage: string,
        tAuthorizeCheckbox: string,
        submit: string
    }) {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [authorized, setAuthorized] = useState(false);

    const { executeRecaptcha } = useReCaptcha();

    const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const token = await executeRecaptcha("form_submit");

        console.log(token)
    }, [executeRecaptcha, name, message, email, authorized]);

    return (
        <article className={styles.contact} id={contactId}>
            <div className={styles.contactContainer}>
                <h1 className={sharedStyles.title}>{title}</h1>
                <h3 className={sharedStyles.subtitle}>{subtitle}</h3>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputWrapper}>
                        <input value={name} onChange={(e) => setName(e.target.value)} className={styles.input} id="name" type="text" required placeholder={tName}></input>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} id="email" type="email" required placeholder='Email'></input>
                    </div>
                    <div>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className={`${styles.input} ${styles.textarea}`} id="message" placeholder={tMessage} rows={10}></textarea>
                    </div>
                    <div className={styles.checkboxWrapper}>
                        <input checked={authorized} onChange={(e) => setAuthorized(e.target.checked)} required className={styles.checkbox} id="authorizeCheckbox" type="checkbox"></input>
                        <label className={styles.labelCheckbox} htmlFor="authorizeCheckbox">{tAuthorizeCheckbox}</label>
                    </div>
                    <div className={styles.buttonWrapper}>
                        <button type="submit" className={styles.submit}>{submit}</button>
                    </div>
                </form>
            </div>
        </article>
    )
}