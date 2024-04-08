import { useTranslations } from "next-intl";
import styles from './contact.module.css';

export default function Contact() {
    const t = useTranslations('contact');
    const tShared = useTranslations('shared');

    return (
        <article className={styles.contact} id={tShared('contactId')}>
            <div className={styles.contactContainer}>
                <h1 className={styles.title}>{t('title')}</h1>
                <h3 className={styles.subtitle}>{t('subtitle')}</h3>
                <form>
                    <div className={styles.inputWrapper}>
                        <input className={styles.input} id="name" type="text" placeholder={t('name')}></input>
                        <input className={styles.input} id="email" type="text" placeholder='Email'></input>
                    </div>
                    <div>
                        <textarea className={`${styles.input} ${styles.textarea}`} id="message" placeholder={t('message')} rows={10}></textarea>
                    </div>
                    <div className={styles.checkboxWrapper}>
                        <input className={styles.checkbox} id="authorizeCheckbox" type="checkbox"></input>
                        <label className={styles.labelCheckbox} htmlFor="authorizeCheckbox">{t('authorizeCheckbox')}</label>
                    </div>
                    <div className={styles.buttonWrapper}>
                        <button type="submit" className={styles.submit}>{t('submit')}</button>
                    </div>
                </form>
            </div>
        </article>
    )
}