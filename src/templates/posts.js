import React, { Component } from "react";
import Link from "gatsby-link";
import Img from 'gatsby-image'
<<<<<<< HEAD
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
=======
>>>>>>> 898d9c594bced6f70bc272b68ea42fbe305b27e4

const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url}>{props.text}</Link>;
    } else {
        return <span>{props.text}</span>;
    }
};

const IndexPage = ({ data, pathContext }) => {
    const { group, index, first, last, pageCount } = pathContext;
    const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();

    console.log(group)

    return (
<<<<<<< HEAD
        <Layout>
        <div className="posts">
            <div className="projects__title p-1 text-center">
            <h4>{pageCount} posts</h4>
    </div>
    <div className="container p-1">
    <div className="col-lg-6 mt-3 p-1 block--shadow block--white">

            {group.map(({ node }) => (
                <div key={node.slug} className={"post"}>
=======
        <div>
            <h4>{pageCount} Pages</h4>

            {group.map(({ node }) => (
                <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
>>>>>>> 898d9c594bced6f70bc272b68ea42fbe305b27e4

                    {node.featured_media && node.featured_media.localFile.childImageSharp.resolutions &&
                        <div>
                            <Img resolutions={node.featured_media.localFile.childImageSharp.resolutions} />
                        </div>
                    }


                    <Link to={'/post/' + node.slug}>
<<<<<<< HEAD
                        <h3 className="pt-1 pb-1 text--third">{node.title}</h3>
=======
                        <h3>{node.title}</h3>
>>>>>>> 898d9c594bced6f70bc272b68ea42fbe305b27e4
                    </Link>

                    <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

                    {node.date}
                </div>
            ))}
<<<<<<< HEAD
                        </div>
=======
>>>>>>> 898d9c594bced6f70bc272b68ea42fbe305b27e4
            <div className="previousLink">
                <NavLink test={first} url={"/posts/" + previousUrl} text="Go to Previous Page" />
            </div>
            <div className="nextLink">
                <NavLink test={last} url={"/posts/" + nextUrl} text="Go to Next Page" />
            </div>
<<<<<<< HEAD
            </div>
            </div>
            </Layout>
=======
        </div>
>>>>>>> 898d9c594bced6f70bc272b68ea42fbe305b27e4
    );
};
export default IndexPage;