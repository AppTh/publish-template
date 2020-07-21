import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'


const DynCol = ({children}) => {
  console.log('the children', children)
  return (
    <div className="dyn-col">
      {children}
    </div>
  )
}

const Articles = ({children}) => {
  return (
    <div className="dyn-col-art">
      {children}
    </div>
  )
}

const Promo = ({children}) => {
  return (
    <div className="dyn-col-pro">
      {children}
    </div>
  )
}

const Puff = ({puff:{title, body, img}}) => {
  console.log('EXC', title, body, img)
  return (
    <div>
      <div>
        {title}
      </div>
      <div>
        {body}
      </div>
      <div className="bb">
        {img}
      </div>
    </div>
  )
}

const puffs = [
  {
    title: 'Podcast',
    body: 'Detta är en ljudmedia innehållandes mekaniska vågor i digitalt format.',
    img: 'Bild',
  },
  {
    title: 'Mest läst',
    body: 'Detta är samma artikel som du kan se här breve.',
    img: 'Bild?',
  },
  {
    title: 'Dagens aktie',
    body: 'Detta är alltid $TSLA men vi låtsas som att det kan ändras nån gång tills vidare.',
    img: 'Bild?',
  }
]

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        <Navigation />
        <DynCol>
          <Articles>
            {children}
          </Articles>
          <Promo>
            {puffs.map(puff => <Puff puff={puff} key={puff.title}></Puff>)}
          </Promo>
        </DynCol>
      </Container>
    )
  }
}

export default Template
