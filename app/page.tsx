import PostList from '@/components/posts';
import style from './page.module.css';

export default function Home() {
    return (
        <main className={style.main}>
            <PostList />
            <div className={style.sidebar}>sidebar</div>
        </main>
    );
}
