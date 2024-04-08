import Image from 'next/image';
import styles from './header.module.css';

export default function Header() {
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
                        <a href='#sobremim'>sobre mim</a>
                    </li>
                    <li>
                        <a href='#conteudo'>criação de conteúdo</a>
                    </li>
                    <li>
                        <a href='#experiencias'>experiências</a>
                    </li>
                    <li>
                        <a href='#contato'>contato</a>
                    </li>
                </ol>
            </nav >
        </header >
    )
}