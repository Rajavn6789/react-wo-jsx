'use strict';

const likeButtonContainer = document.getElementById('like_button_container');

class LikeButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      liked: false,
    }
    this.onLikeHandler = this.onLikeHandler.bind(this);
  }

  onLikeHandler() {
    this.setState(prevState => ({
      liked: !prevState.liked
    }));
  }

  render() {
    const { liked } = this.state;
    const btnText = (liked) ? 'UnLike' : 'Like';
    return createElement(
      'div',
      {className: 'like-container'},
      createElement('h3', null, "Like Section"),
      createElement('button', { onClick: this.onLikeHandler }, btnText),
    );
  }
}

// Mounts to dom
ReactDOM.render(
  createElement(LikeButton),
  likeButtonContainer
);
