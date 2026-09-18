```jsx
import PropTypes from "prop-types";

export default function ThreadItem({ thread }) {
  return (
    <li className="thread">
      <div className="thread-top">
        <img
          className="avatar"
          src={thread.author?.avatarUrl ?? "/placeholder-avatar.svg"}
          alt={thread.author?.name ?? "Unknown author"}
        />

        <div className="thread-main">
          <h3>{thread.title}</h3>
          <p className="meta">
            by {thread.author?.name ?? "Unknown author"}
          </p>
        </div>

        <span className="badge">
          {thread._count?.comments ?? 0} replies
        </span>
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

    author: PropTypes.shape({
      name: PropTypes.string,
      avatarUrl: PropTypes.string,
    }),

    _count: PropTypes.shape({
      comments: PropTypes.number,
    }),
  }).isRequired,
};
```
