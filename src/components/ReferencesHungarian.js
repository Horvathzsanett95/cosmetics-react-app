import React from 'react'
import './FlippableCardStyle.scss'
import reference from '../assets/reference1.jpg';

export default function ReferencesHungarian() {
    return (
        <div className="page-container">
        <BlogCard />
      </div>
    )
  }


class BlogCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false };
    this.flip = this.flip.bind(this);
  }

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  }
  render() {
    return (


      <div onMouseEnter={this.flip} onMouseLeave={this.flip} className={"card-container" + (this.state.flipped ? " flipped" : "")}>

        <Front />
        <Back />
      </div>

    )
  }
}

class Front extends React.Component {
  render() {
    return (
      <div className="front">
        <ImageArea />
        <MainArea />
      </div>
    )
  }
}

class Back extends React.Component {
  render() {
    return (
      <div className="back">
        <p>Mélyen tisztítja a bőrt, méregtelenítő, antibakteriális hatású és felszívja a felesleges faggyút.</p>
        <p>Erősítő és összehúzó hatású, a terméshúsban található olaj lágyító és bőrkondicionáló anyag.</p>
      </div>
    )
  }
}

class ImageArea extends React.Component {
  render() {
    return (
      <div className="image-container">
        <img className="card-image" src={reference} alt="example"></img>
        <h1 className="title">Bőrtisztítás</h1>
      </div>
    )
  }

}

class MainArea extends React.Component {
  render() {
    return (
      <div className="main-area">
        <div className="blog-post">
        <p className="date">{new Date().toLocaleDateString()}</p>
          <p className="blog-content">
          Mélyen tisztítja a bőrt, méregtelenítő, antibakteriális hatású és felszívja a felesleges faggyút.
            </p>
          <p className="read-more">Több...</p>

        </div>

      </div>
    )
  }
}