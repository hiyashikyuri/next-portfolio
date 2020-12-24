import Layout from '../components/Layout';

export default ({ statusCode }) => (
    <Layout title="Error!">
        { statusCode? `Could not load user data: : Status code ${ statusCode }` : `Could not get that page` }
        <p>Couldnt get that page, sorry!</p>
    </Layout>
)
