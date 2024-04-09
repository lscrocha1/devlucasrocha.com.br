import styles from './shared.module.css';

export default function Loader({ centered }: { centered?: boolean }) {
    if (centered) {
        return (
            <div className={styles.loaderWrapper}>
                <span className={styles.loader}></span>
            </div>
        )
    }

    return (
        <span className={styles.loader}></span>
    );
}