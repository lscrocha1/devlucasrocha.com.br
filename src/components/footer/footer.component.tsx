'use client'

import Image from 'next/image';
import styles from './footer.module.css';
import { IFooterLink } from '@/src/interfaces/IFooterLink';
import Script from 'next/script';

declare var Twitch: any;

export default function Footer({ developedWith }: { developedWith: string }) {
    const currentYear = new Date().getFullYear();

    const links: IFooterLink[] = [
        {
            src: '/footer-svgs/email.svg',
            url: 'mailto:devlucascrocha@gmail.com',
            height: 24,
            width: 24,
            alt: 'devlucascrocha@gmail.com'
        },
        {
            src: '/footer-svgs/linkedin.svg',
            url: 'https://www.linkedin.com/in/lucascrocha/',
            height: 24,
            width: 24,
            alt: 'Linkedin'
        },
        {
            src: '/footer-svgs/instagram.svg',
            url: 'https://instagram.com/devlucasrocha/',
            height: 24,
            width: 24,
            alt: 'Instagram'
        },
        {
            src: '/footer-svgs/tiktok.svg',
            url: 'https://tiktok.com/@devlucasrocha/',
            height: 24,
            width: 24,
            alt: 'TikTok'
        },
        {
            src: '/footer-svgs/twitch.svg',
            url: 'https://twitch.tv/devlucasrocha/',
            height: 24,
            width: 24,
            alt: 'Twitch'
        },
        {
            src: '/footer-svgs/github.svg',
            url: 'https://github.com/lscrocha1',
            height: 22,
            width: 23,
            alt: 'GitHub'
        },
        {
            src: '/footer-svgs/whatsapp.svg',
            url: 'https://wa.me/5519993814321',
            height: 24,
            width: 24,
            alt: 'WhatsApp'
        },
        {
            src: '/footer-svgs/youtube.svg',
            url: 'https://youtube.com/@devlucasrocha',
            height: 24,
            width: 24,
            alt: 'Youtube'
        }
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.footerDetails}>
                <div className={styles.links}>
                    {
                        links.map((link) => (
                            <a key={link.url} href={link.url} target="_blank" rel="noreferrer nofollow">
                                <Image
                                    className={styles.imageLink}
                                    src={link.src}
                                    width={link.width}
                                    height={link.height}
                                    alt={link.alt} />
                            </a>
                        ))}
                </div>
                <div>
                    Copyright © {currentYear} - Lucas Rocha.
                    &nbsp;{developedWith} <a target="_blank" href="https://nextjs.org/" rel="noreferrer nofollow">Next.JS</a>.
                </div>
            </div>
            <div className={styles.logoWrapper}>
                <Image
                    src='/footer-svgs/lr-logo.svg'
                    width={78}
                    height={74}
                    alt='Logo'/>
            </div>
            <Script
                src='https://embed.twitch.tv/embed/v1.js'
                strategy='lazyOnload'
                onLoad={() => {
                    new Twitch.Embed('twitch', {
                        width: '100%',
                        height: '100%',
                        channel: 'devlucasrocha',
                        layout: 'video',
                        allowfullscreen: true
                    });
                }}
            />
        </footer>
    )
}