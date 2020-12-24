import Link from "next/link";
import Layout from '../components/Layout';

const Index = () => (
    <Layout title="Home">
        <div>
            <Link href="/about">Go to about</Link>
            Welcom to the home page
        </div>
    </Layout>
);

export default Index;
