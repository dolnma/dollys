import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
<<<<<<< HEAD
import { StaticQuery, graphql } from 'gatsby'


import Layout from '../components/layout'
=======
>>>>>>> 898d9c594bced6f70bc272b68ea42fbe305b27e4

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost
        const resolutions = (post.featured_media) ? post.featured_media.localFile.childImageSharp.resolutions : null


        console.log(resolutions)

        // let facebook = ''
        // let twitter = ''

        // if(post.acf !== null) {

        //     if(post.acf.facebook !== '') {
        //         facebook = `<h3>Facebook</h3> ${post.acf.facebook}`
        //     }

        //     if(post.acf.twitter !== '') {
        //         twitter = `<h3>Twitter</h3> ${post.acf.twitter}`
        //     }

        // }

        return (
<<<<<<< HEAD
            <Layout>
                <div className="container post p-1 pb-2">
=======
            <div>
>>>>>>> 898d9c594bced6f70bc272b68ea42fbe305b27e4
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

                {resolutions &&
                    <div>
                        <Img resolutions={resolutions}/>
                        < img src={resolutions.src} alt=""/>
                    </div>
                }

                <div dangerouslySetInnerHTML={{ __html: post.content }} />

                {/* <div dangerouslySetInnerHTML={{__html: facebook}}></div>
                <div dangerouslySetInnerHTML={{__html: twitter}}></div> */}

                {/*{post.acf !== null &&
                    <div>
                        <h3>Facebook</h3>
                        {post.acf.facebook}

                            <h3>Twitter</h3>
                        {post.acf.twitter}
                    </div>
                }*/}
<<<<<<< HEAD
                </div>
            </Layout>
=======
            </div>
>>>>>>> 898d9c594bced6f70bc272b68ea42fbe305b27e4
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
            featured_media{
                localFile{
                    childImageSharp{
                        resolutions(width:500, height: 200){
                            src
                            width
                            height
                        }
                    }
                }
            }
        }
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`