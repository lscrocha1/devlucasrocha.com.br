import Image from 'next/image';
import styles from './footer.module.css';
import { IFooterLink } from '@/interfaces/IFooterLink';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const links: IFooterLink[] = [
        {
            src: '/email.svg',
            url: 'mailto:devlucascrocha@gmail.com',
            height: 24,
            width: 24,
            alt: 'Enviar email para devlucascrocha@gmail.com'
        },
        {
            src: '/linkedin.svg',
            url: 'https://www.linkedin.com/in/lucascrocha/',
            height: 24,
            width: 24,
            alt: 'Linkedin'
        },
        {
            src: '/instagram.svg',
            url: 'https://instagram.com/devlucasrocha/',
            height: 24,
            width: 24,
            alt: 'Instagram'
        },
        {
            src: '/tiktok.svg',
            url: 'https://tiktok.com/@devlucasrocha/',
            height: 24,
            width: 24,
            alt: 'TikTok'
        },
        {
            src: '/twitch.svg',
            url: 'https://twitch.tv/devlucasrocha/',
            height: 24,
            width: 24,
            alt: 'Twitch'
        },
        {
            src: '/whatsapp.svg',
            url: 'https://wa.me/5519993814321',
            height: 24,
            width: 24,
            alt: 'WhatsApp'
        },
        {
            src: '/youtube.svg',
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
                    Desenvolvido com <a target="_blank" href="https://nextjs.org/" rel="noreferrer nofollow">Next.JS</a>.
                </div>
            </div>
            <div>
                <Image
                    src='/lr-logo.svg'
                    width={78}
                    height={74}
                    alt='Logo'/>
            </div>
        </footer>
    )
}