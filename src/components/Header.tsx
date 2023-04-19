import { Link } from "react-router-dom";

interface HeaderProps {
  title: String,
  backButton: Boolean
}

function Header({title, backButton}: HeaderProps) {
  return (
    <div className='header'>
      <div className='header-text'>{title}</div>
      {backButton === true ? <Link className='back-button' to="/">Back</Link> : null}
    </div>
  );
}
export default Header;