import Image from 'next/image';
import style from './posts.module.css';

interface Props {
    title: string;
    subtitle: string;
    date: Date;
    author: string;
}

const PostHeader: React.FC<Props> = props => {
    const { title, subtitle, date, author } = props;

    return (
        <div className={style.header}>
            <div className={style.titles}>
                <h2 className={style.title}>{title}</h2>
                <p className={style.subtitle}>{subtitle}</p>
            </div>
            <div className={style.about}>
                <time dateTime={date.toString()} className={style.date}>
                    {formatDate(date)}
                </time>
                <div className={style.author}>
                    <span className={style['author-name']}>{author}</span>
                    <Image
                        alt="img"
                        width={30}
                        height={30}
                        className={style.avatar}
                        src="https://d33wubrfki0l68.cloudfront.net/0ec005ed0443e9a8d1c16f2bccbc9c76cb66e0f5/aaa2d/images/author-avatar.png"
                    />
                </div>
            </div>
        </div>
    );
};

function formatDate(date: Date) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    } as const;

    return date.toLocaleString('en-US', options);
}

export default PostHeader;
