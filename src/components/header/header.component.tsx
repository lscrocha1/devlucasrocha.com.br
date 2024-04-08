import Image from 'next/image';
import styles from './header.module.css';
import { useTranslations } from 'next-intl';

export default function Header() {
    const t = useTranslations('header');
    const tShared = useTranslations('shared');

    return (
        <header className={styles.header}>
            <nav>
                <ol>
                    <li>
                        <Image
                            src='/image-profile.png'
                            alt='Profile'
                            width={40}
                            height={40}
                            priority />
                    </li>
                    <li>
                        <a href='/'>Lucas Rocha</a>
                    </li>
                    <li>
                        <a href={`#${tShared('aboutMeId')}`}>{t('aboutMe')}</a>
                    </li>
                    <li>
                        <a href={`#${tShared('contentCreationId')}`}>{t('contentCreation')}</a>
                    </li>
                    <li>
                        <a href={`#${tShared('experiencesId')}`}>{t('experiences')}</a>
                    </li>
                    <li>
                        <a href={`#${tShared('contactId')}`}>{t('contact')}</a>
                    </li>
                </ol>
            </nav >
        </header >
    )
}