import Image from "next/image";
import styles from './whatsapp.module.css';

export default function WhatsappCTA({ whatsappLink }: { whatsappLink: string }) {
    return (
        <div className={styles.whatsappCtaWrapper}>
            <a href={whatsappLink} target="_blank" rel="noreferrer nofollow">
                <Image
                    className={styles.whatsappCta}
                    src={'/whatsapp.png'}
                    alt='WhatsApp Link'
                    width={64}
                    height={64}
                    quality={100} />
            </a>
        </div>
    )
}