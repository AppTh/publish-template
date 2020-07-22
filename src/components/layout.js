import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'


const Columns = ({children}) => {
  console.log('the children', children)
  return (
    <div className="columnist">
      {children}
    </div>
  )
}

const Articles = ({children}) => {
  return (
    <div className="articles">
      {children}
    </div>
  )
}

const Plugs = ({children}) => {
  return (
    <div className="plugs">
      {children}
    </div>
  )
}

const Plug = ({plug:{title, body, img}}) => {
  return (
    <div className="plug">
      <div>
        <h5>{title}</h5>
      </div>
      <div className="body"
        dangerouslySetInnerHTML={{
          __html: body.childMarkdownRemark.html,
        }}
        />
    </div>
  )
}

const Footer = ({feet}) => (
  <div className="feet">
    {feet.map(foot => (
      <div className="foot">
        <div className="title">
          {foot.title}
        </div>
        <div className="content"
          dangerouslySetInnerHTML={{
            __html: foot.content.childMarkdownRemark.html,
          }}
        />
      </div>
    ))}
  </div>
)

class Template extends React.Component {
  render() {
    const { children, categories, plugs, feet} = this.props
    return (
      <Container>
        <Navigation categories={categories} />
        <Columns>
          <Articles>
            {children}
          </Articles>
          <Plugs>
            {plugs.map(plug => <Plug plug={plug} key={plug.title}></Plug>)}
          </Plugs>
        </Columns>
        <Footer feet={feet}/>
      </Container>
    )
  }
}

export default Template
