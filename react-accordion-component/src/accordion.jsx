import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openedTopic: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // console.log('clicked', event.target)
    const openedTopic = this.props.topics.filter(topic => {
      if (topic.header === event.target.innerText && topic !== this.state.openedTopic) {
        return true;
      } else {
        return false;
      }
    });
    if (openedTopic === []) {
      this.setState({ openedTopic: null });
    } else {
      this.setState({ openedTopic: openedTopic });
    }
  }

  render() {
    // console.log('TopicList element:', <TopicList list={this.props.topics} />)
    return (
      <TopicList list={this.props.topics} openedTopic={this.state.openedTopic} />
    );
  }
}

function TopicList(props) {
  // console.log('Im inside TopicList', props.list)
  const topicAccordion = props.list.map(topic => {
    // console.log('topic', topic)
    return (
      <ListItem key={topic.header} topic={topic} openedTopic={props.openedTopic} />
    );
  });
  // console.log('topicAccordian in TopicList', topicAccordion)
  return (
    <>
      { topicAccordion }
    </>
  );
}

function ListItem(props) {
  // console.log("I'm inside ListItem", props.openedTopic)
  if (props.topic === props.openedTopic) {
    return (
      <>
        <div onClick={Accordion.handleClick} className='header'>
          <h2>{props.topic.header}</h2>
        </div>
        <div className="details">
          <p>{props.topic.details}</p>
        </div>
      </>
    );
  } else {
    return (
      <div onClick={Accordion.handleClick} className='header'>
        <h2>{props.topic.header}</h2>
      </div>
    );
  }
}

export default Accordion;
