import Image from 'next/image';

import PostFooter from './postFooter';
import PostHeader from './postHeader';
import style from './posts.module.css';

interface Props {
    likes: number;
    title: string;
    subtitle: string;
    date: Date;
    author: string;
    imageLink: string;
    description: string;
}

const Post: React.FC<Props> = props => {
    const { imageLink, description } = props;
    return (
        <div className={style.post}>
            <PostHeader {...props} />
            <div className={style['headband-wrapper']}>
                <Image
                    src={imageLink}
                    alt="img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={style.headband}
                />
            </div>
            <p className={style.description}>{description}</p>
            <PostFooter {...props} />
        </div>
    );
};

export default Post;
