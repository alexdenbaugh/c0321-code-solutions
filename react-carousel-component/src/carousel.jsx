import React from 'react';

const images = [
  {
    src: '001.png',
    alt: 'Bulbasaur'
  },
  {
    src: '004.png',
    alt: 'Charmander'
  },
  {
    src: '007.png',
    alt: 'Squirtle'
  },
  {
    src: '025.png',
    alt: 'Pikachu'
  },
  {
    src: '039.png',
    alt: 'Jigglypuff'
  }
];

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0

    };
    this.handleClick = this.handleClick.bind(this);
    this.carouselChange = this.carouselChange.bind(this);
    this.intervalId = setInterval(this.carouselChange, 3000);
  }

  handleClick(event) {
    clearInterval(this.intervalId);
    let index;
    if (event.target.getAttribute('data-view') === 'right') {
      index = this.state.imageIndex === images.length - 1
        ? 0
        : this.state.imageIndex + 1;
    } else if (event.target.getAttribute('data-view') === 'left') {
      index = this.state.imageIndex === 0
        ? images.length - 1
        : this.state.imageIndex - 1;
    } else {
      index = Number(event.target.getAttribute('data-view'));
    }
    this.setState({ imageIndex: index });
    this.intervalId = setInterval(this.carouselChange, 3000);
  }

  carouselChange() {
    if (this.state.imageIndex === images.length - 1) {
      this.setState({ imageIndex: 0 });
    } else {
      const index = this.state.imageIndex + 1;
      this.setState({ imageIndex: index });
    }
  }

  render() {
    const progress = {
      index: this.state.imageIndex,
      handleClick: this.handleClick
    };
    return (
      <>
        <div className="row">
          <div className="arrow">
            <i className="fas fa-chevron-left" onClick={this.handleClick} data-view="left"></i>
          </div>
          <div className="pokemon">
            <img src={`./images/${images[this.state.imageIndex].src}`} alt={images[this.state.imageIndex].alt} />
          </div>
          <div className="arrow">
            <i className="fas fa-chevron-right" onClick={this.handleClick} data-view="right"></i>
          </div>
        </div>
        <div className="row">
          <ProgressDot progress={progress} />
        </div>
      </>
    );
  }
}

export default Carousel;

function Dot(props) {
  return (props.current.index === props.myIndex
    ? <i className="fas fa-circle" onClick={props.current.handleClick} data-view={`${props.myIndex}`}></i>
    : <i className="far fa-circle" onClick={props.current.handleClick} data-view={`${props.myIndex}`}></i>
  );
}

function ProgressDot(props) {
  const dots = images.map((dot, index) => {
    return <Dot key={dot.alt} myIndex={index} current={props.progress} />;
  });
  return dots;
}
