import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { change: false };
    this.TopicList = this.TopicList.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.ListItem = this.ListItem.bind(this);
  }

  handleClick(event) {
    if (this.state.change) {
      this.setState({ change: false });
    } else {
      this.setState({ change: true });
    }
    for (let i = 0; i < this.props.topics.length; i++) {
      if (this.props.topics[i].header === event.target.innerText && this.props.topics[i].selected === false) {
        this.props.topics[i].selected = true;
      } else {
        this.props.topics[i].selected = false;
      }
    }
  }

  ListItem(topic) {
    if (topic.value.selected) {
      return (
        <>
          <div onClick={this.handleClick} className='header'>
            <h2>{topic.value.header}</h2>
          </div>
          <div className="details">
            <p>{topic.value.details}</p>
          </div>
        </>
      );
    } else {
      return (
        <div onClick={this.handleClick} className='header'>
          <h2>{topic.value.header}</h2>
        </div>
      );
    }
  }

  TopicList(list) {
    const topics = list.list;
    const topicAccordion = topics.map(topic => {
      return (
        <this.ListItem key={topic.header} value={topic} />
      );
    });
    return (
      <>
        { topicAccordion }
      </>
    );
  }

  render() {
    return (
      <this.TopicList list={this.props.topics} />
    );
  }
}

export default Accordion;
