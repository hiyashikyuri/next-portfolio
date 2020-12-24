import Link from "next/link";
import Layout from '../components/Layout';

const About = () => (
    <Layout title="About">
        <div>
            <Link href="/">Home</Link>
            <p>A Javascript programmer</p>
            <img src="/static/javascript-logo.png" alt="Javascript" height="200px"/>
        </div>
    </Layout>
);

export default About;
