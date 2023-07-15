import style from './posts.module.css';

interface Props {
    likes: number;
}
const PostFooter: React.FC<Props> = props => {
    const { likes } = props;

    return (
        <div className={style.footer}>
            <button className={style.button}>Continue reading</button>
            <span className={style.like}>
                {String.fromCharCode(0x2764)}
                {likes}
            </span>
        </div>
    );
};

export default PostFooter;
