import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'

import '../styles/index.scss'

import MainMenu from '../components/Menu/MainMenu'

const TemplateWrapper = ({ children, data }) => (
  <div className="wrapper">
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Frontend developer and coder. I like CSS, Javascript and Wordpress."
      />
      <meta
        name="keywords"
        content="coder, developer, wordpress, woocommerce, freelancer"
      />
      <title>
        Dollys.eu - freelance coder and frontend developer from Czech republic
      </title>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
      />
    </Helmet>
    <div className="header">
      <div className="header__wrap container">
        <div className="header__wrap__left">
          <Header />
        </div>
        <div className="header__wrap__right">
          <MainMenu menu={data} />
        </div>
      </div>
    </div>
    <div className="content">
      <div className="">{children()}</div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    allWordpressWpApiMenusMenusItems {
      edges {
        node {
          id
          name
          items {
            title
            url
            object_slug
          }
        }
      }
    }
  }
`
