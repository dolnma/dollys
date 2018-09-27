import React, { Component } from 'react'
import Link from 'gatsby-link'

class MainMenu extends Component {
render() {
<<<<<<< HEAD
// const data = this.props.menu.allWordpressWpApiMenusMenusItems.edges[0].node.items

return (
<div>
  <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"></input>
  <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>
  <div className="navbar">
    <ul>
      <li>
        <Link to="posts">Blog</Link>
      </li>
      <li>
        <Link to="projects">Projects</Link>
      </li>
      <li>
        <a href="https://drive.google.com/open?id=1Nxpf1eybbpP251mugnUZFyYgHQG7FzPR">Resume</a>
      </li>
      {/* {data.map(item => (
      <li key={item.object_slug}>
        <Link to={item.object_slug}>{item.title}</Link>
      </li>
      ))} */}
    </ul>
  </div>
  <div id="sidebarMenu">
    <ul className="sidebarMenuInner">
    <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="posts">Blog</Link>
      </li>
      <li>
        <Link to="projects">Projects</Link>
      </li>
      <li>
      <a href="https://drive.google.com/open?id=1Nxpf1eybbpP251mugnUZFyYgHQG7FzPR">Resume</a>
      </li>
      {/* {data.map(item => (
      <li key={item.object_slug}>
        <Link to={item.object_slug}>{item.title}</Link>
      </li>
      ))} */}
    </ul>
  </div>
=======
const data = this.props.menu.allWordpressWpApiMenusMenusItems.edges[0].node.items

return (
<div className="navbar">
  <ul>
    {data.map(item => (
    <li key={item.object_slug}>
      <Link to={item.object_slug}>{item.title}</Link>
    </li>
    ))}
    <li>
      <Link to="projects">Projects</Link>
    </li>
  </ul>
>>>>>>> 898d9c594bced6f70bc272b68ea42fbe305b27e4
</div>
)
}
}

export default MainMenu