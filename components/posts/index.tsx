import Post from './post';
import style from './posts.module.css';
//remove when added backend
const mockPosts: Props[] = [
    {
        id: '1',
        likes: 5,
        messagesCount: 13,
        title: 'WOMEN CAMPING HIKING TRAVEL',
        subtitle: 'LOREM IPSUM DOLOR AMET NULLAM CONSEQUAT ETIAM FEUGIAT',
        date: new Date(500000000000),
        author: 'Catherine Doe',
        imageLink:
            'https://d33wubrfki0l68.cloudfront.net/4bf284e26c018f9425f060084cc646b882907e4e/3352b/images/large-post01.jpg',
        description:
            'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    },
    {
        id: '2',
        likes: 5,
        messagesCount: 13,
        title: 'WOMEN CAMPING HIKING TRAVEL',
        subtitle: 'LOREM IPSUM DOLOR AMET NULLAM CONSEQUAT ETIAM FEUGIAT',
        date: new Date(500000000000),
        author: 'Catherine Doe',
        imageLink:
            'https://d33wubrfki0l68.cloudfront.net/4bf284e26c018f9425f060084cc646b882907e4e/3352b/images/large-post01.jpg',
        description:
            'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    },
    {
        id: '3',
        likes: 5,
        messagesCount: 13,
        title: 'WOMEN CAMPING HIKING TRAVEL',
        subtitle: 'LOREM IPSUM DOLOR AMET NULLAM CONSEQUAT ETIAM FEUGIAT',
        date: new Date(500000000000),
        author: 'Catherine Doe',
        imageLink:
            'https://d33wubrfki0l68.cloudfront.net/4bf284e26c018f9425f060084cc646b882907e4e/3352b/images/large-post01.jpg',
        description:
            'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    },
];
interface Props {
    id: string;
    likes: number;
    messagesCount: number;
    title: string;
    subtitle: string;
    date: Date;
    author: string;
    imageLink: string;
    description: string;
}

const PostList: React.FC = () => {
    return (
        <div className={style.posts}>
            {mockPosts.map(prop => (
                <Post key={prop.id} {...prop} />
            ))}
        </div>
    );
};

export default PostList;
