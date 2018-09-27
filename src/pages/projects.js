import React from 'react'
import Link from 'gatsby-link'

<<<<<<< HEAD
import Layout from '../components/layout'

const PageProjects = ({ data }) => (
  <Layout>
    <div className="projects__title p-1 text-center">
      <h1>My works</h1>
    </div>
    <div className="projects">
      <div className="container row pt-2 pb-2">
        {data.allWordpressWpProjects.edges.map(project => (
          <div key={project.node.id} className="project col-12 col-lg-6">
            <div className="project__wrap block--shadow text-center">
              <h2 dangerouslySetInnerHTML={{ __html: project.node.title }} />
              <p className="p-1 text--secondary"
                dangerouslySetInnerHTML={{
                  __html: project.node.acf.description,
                }}
              />
              <a className="text--third" href={project.node.acf.url}>{project.node.acf.url}</a>
              <div className="project__wrap__labels">
                {(() => {
                  if (project.node.acf.html == true) {
                    return <span className="label label--primary">HTML</span>
                  } else {
                    return <div />
                  }
                })()}
                {(() => {
                  if (project.node.acf.css == true) {
                    return <span className="label label--secondary">CSS</span>
                  } else {
                    return <div />
                  }
                })()}
                {(() => {
                  if (project.node.acf.javascript == true) {
                    return <span className="label label--third">Javscript</span>
                  } else {
                    return <div />
                  }
                })()}
                {(() => {
                  if (project.node.acf.webdesign == true) {
                    return (
                      <span className="label label--fourth">Webdesign</span>
                    )
                  } else {
                    return <div />
                  }
                })()}
              </div>
              <a href={project.node.acf.url}><img
                src={
                  project.node.acf.image.localFile.childImageSharp.resize.src
                }
              />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Layout>
=======
const PageProjects = ({ data }) => (
<div>
    <div className="projects__title text-center">
        <h1>My works</h1>
    </div>
    <div className="projects">
        <div className="container row">
            {data.allWordpressWpProjects.edges.map(project => (
            <div key={project.node.id} className="project col-6">
                <div className="project__wrap block--shadow text-center">
                    <h2 dangerouslySetInnerHTML={{ __html: project.node.title }} />
                    <p dangerouslySetInnerHTML={{
                  __html: project.node.acf.description,
                }} />
                <div className="project__wrap__labels">
                    <span className="label label--primary" dangerouslySetInnerHTML={{ __html: project.node.acf.html }} />
                    <span className="label label--secondary" dangerouslySetInnerHTML={{ __html: project.node.acf.css }} />
                    <span className="label label--third" dangerouslySetInnerHTML={{ __html: project.node.acf.javascript }} />
                    <span className="label label--fourth" dangerouslySetInnerHTML={{ __html: project.node.acf.webdesign }} />
                    </div>
                    <img src={ project.node.acf.image.localFile.childImageSharp.resize.src } />
                </div>
            </div>
            ))}
        </div>
    </div>
</div>
>>>>>>> 898d9c594bced6f70bc272b68ea42fbe305b27e4
)

export default PageProjects

export const pageQuery = graphql`
  query PageProjects {
<<<<<<< HEAD
    allWordpressWpProjects(sort: {fields: [acf___order]}) {
=======
    allWordpressWpProjects {
>>>>>>> 898d9c594bced6f70bc272b68ea42fbe305b27e4
      edges {
        node {
          id
          title
          type
          content
          acf {
            url
            description
            html
            css
            javascript
            webdesign
<<<<<<< HEAD
            order
=======
>>>>>>> 898d9c594bced6f70bc272b68ea42fbe305b27e4
            image {
              localFile {
                childImageSharp {
                  resize(width: 1024, height: 500, grayscale: false) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
<<<<<<< HEAD
`
=======
`
>>>>>>> 898d9c594bced6f70bc272b68ea42fbe305b27e4
