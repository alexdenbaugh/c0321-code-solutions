import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openedTopic: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const openedTopic = this.props.topics.filter(topic => {
      if (topic.header === event.target.innerText && topic !== this.state.openedTopic) {
        return true;
      } else {
        return false;
      }
    });
    if (openedTopic.length === 0) {
      this.setState({ openedTopic: null });
    } else {
      this.setState({ openedTopic: openedTopic[0] });
    }
  }

  render() {
    return (
      <TopicList list={this.props.topics} openedTopic={this.state.openedTopic} onClick={this.handleClick} />
    );
  }
}

function TopicList(props) {
  const topicAccordion = props.list.map(topic => {
    return (
      <ListItem key={topic.header} topic={topic} openedTopic={props.openedTopic} onClick={props.onClick} />
    );
  });
  return (
    <>
      { topicAccordion }
    </>
  );
}

function ListItem(props) {
  if (props.topic === props.openedTopic) {
    return (
      <>
        <div className='header' onClick={props.onClick}>
          <h2>{props.topic.header}</h2>
        </div>
        <div className="details">
          <p>{props.topic.details}</p>
        </div>
      </>
    );
  } else {
    return (
      <div className='header' onClick={props.onClick}>
        <h2>{props.topic.header}</h2>
      </div>
    );
  }
}

export default Accordion;
