
import PropTypes from "prop-types";

// Render a thread using the nested Prisma include response.
export default function ThreadItem({ thread }) {
  const authorName = thread.author?.name ?? "Unknown author";
  const avatarUrl = thread.author?.avatarUrl;
  const replyCount = thread._count?.comments ?? 0;

  return (
    <li className="thread">
      <div className="thread-top">
        {avatarUrl ? (
          <img className="avatar" src={avatarUrl} alt={authorName} />
        ) : (
          <img
            className="avatar"
            src="/placeholder-avatar.svg"
            alt="placeholder"
          />
        )}

        <div className="thread-main">
          <h3>{thread.title}</h3>
          <p className="meta">by {authorName}</p>
        </div>

        <span className="badge">{replyCount} replies</span>
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

