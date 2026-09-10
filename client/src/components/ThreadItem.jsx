import PropTypes from "prop-types";

export default function ThreadItem({ thread }) {
  return (
    <li className="thread">
      <div className="thread-top">
        <img className="avatar" src= {thread.author?.avatarUrl || "/placeholder-avatar.svg"} alt="placeholder" />

        <div className="thread-main">
          <h3>{thread.title}</h3>
          <p className="meta">by {thread.author?.name||"anonymous"}</p>
        </div>

        <span className="badge">{thread._count?.comments??0} replies</span>
      </div>

      <p>{thread.body}</p>
     
    </li>
  );
}

ThreadItem.propTypes = {
  thread: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    authorName: PropTypes.string,
    commentCount: PropTypes.number,
  }).isRequired,
};
