'use client'

import Image from 'next/image';
import styles from './header.module.css';
import { useState } from 'react';

export default function Header({
    aboutMeId,
    aboutMeText,
    contentCreationId,
    contentCreationText,
    experiencesId,
    experiencesText,
    contactId,
    contactText }: {
        aboutMeId: string,
        aboutMeText: string,
        contentCreationId: string,
        contentCreationText: string,
        experiencesId: string,
        experiencesText: string,
        contactId: string,
        contactText: string
    }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return [
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
                <ol className={styles.olImage}>
                    <li>
                        <a href='/' className={styles.imageLogo}>
                            <Image
                                className={styles.imageLogo}
                                src='/image-profile.png'
                                alt='Profile'
                                width={40}
                                height={40}
                                priority />
                        </a>
                    </li>
                    <li>
                        <a className={styles.nameLogo} href='/'>Lucas Rocha</a>
                    </li>
                </ol>
                <ol className={`${styles.ol} ${!isOpen ? styles.olMenuOff : ''}`}>
                    <li>
                        <a onClick={toggleMenu} href={`#${aboutMeId}`}>{aboutMeText}</a>
                    </li>
                    <li>
                        <a onClick={toggleMenu} href={`#${contentCreationId}`}>{contentCreationText}</a>
                    </li>
                    <li>
                        <a onClick={toggleMenu} href={`#${experiencesId}`}>{experiencesText}</a>
                    </li>
                    <li>
                        <a onClick={toggleMenu} href={`#${contactId}`}>{contactText}</a>
                    </li>
                </ol>
            </nav >
        </header >,
        isOpen && <div onClick={toggleMenu} className={styles.backdrop}></div>
    ]
}