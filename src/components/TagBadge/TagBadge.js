import "./TagBadge.css";

const TagBadge = ({ text, type }) => {
  return <span className={`badge ${type}`}>{text}</span>;
};

export default TagBadge;
