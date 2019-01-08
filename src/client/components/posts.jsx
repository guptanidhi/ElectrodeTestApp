import React from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions/index.jsx";
import custom from "../styles/custom.css"; // eslint-disable-line no-unused-vars

type Props = {
  posts:
    | Array
    | Array<{
        id: number,
        title: string
      }>,
  getPosts: Function
};

class Posts extends React.Component<Props> {
  componentDidMount() {
    console.log("Trigger mounte");// eslint-disable-line no-undef, no-console
    this.props.getPosts();
  }

  render() {
    if (!this.props.posts || this.props.posts.length === 0) {
      return <div>No Posts</div>;
    }

    return (
      <div>
        <ul className="posts">
          {this.props.posts.map(post => {
            return (
              <li key={post.id}>
                <h2>{post.title}</h2>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}


export default connect(
  state => {
    return {
      posts: state.posts
    };
  },
  dispatch => {
    return {
      getPosts: () => {
        dispatch(getPosts());
      }
    };
  }
)(Posts);
