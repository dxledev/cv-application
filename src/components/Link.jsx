import '../css/Form.css';

function Link({ children, link }) {
  return (
    <a href={link} className="link">
      {children}
    </a>
  );
}

export default Link;
