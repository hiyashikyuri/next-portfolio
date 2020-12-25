import Layout from '../components/Layout';
import Link from "next/link";



const PostLink = ({ title, slug }) => (
    <li>
        <Link as={ `/${slug}` } href={ `/post?title=${ title }` }>
            <a>{ title }</a>
        </Link>
    </li>
);

export default () => (
    <Layout title="My blog">
        <ul>
            <PostLink slug="react-post" title='React'/>
            <PostLink slug="Angular-post" title='Angular'/>
            <PostLink slug="vue-post" title='vue'/>
        </ul>
    </Layout>
)
