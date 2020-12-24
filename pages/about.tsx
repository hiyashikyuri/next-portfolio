import Link from "next/link";
import Layout from '../components/Layout';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

export default class About extends Component<any, any> {
    // public state = {
    //     user: null
    // };
    //
    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/hiyashikyuri');
        const data = await res.json();
        return { user: data };
    }
    
    // componentDidMount() {
    //     fetch('https://api.github.com/users/readbarger')
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState(
    //                 { user: data }
    //             );
    //         });
    // }
    
    render() {
        const { user } = this.props;
        return (
            <Layout title="About">
                <p>{ user.name }</p>
                <p>A Javascript programmer</p>
                <img src={ user.avatar_url } alt="Ne" height="200px"/>
            </Layout>
        );
    }
}
