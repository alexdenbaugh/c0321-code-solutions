import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.TopicList = this.TopicList.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.ListItem = this.ListItem.bind(this);
  }

  handleClick(event) {
    const x = 2;
    return x;
    // console.log(event, this.props);
  }

  ListItem(topic) {
    // console.log('inside ListItem', topic)
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
    // console.log(list)
    const topics = list.list;
    // console.log('topics:', topics)
    const topicAccordion = topics.map(topic => {
      // console.log('one-topic', topic);
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
