import { Link ,useNavigate} from 'react-router-dom';
//' no more useHistory, 
const Products = () => {
  const navigate = useNavigate()
  navigate('/welcome',{replace: true})
  //'if want to redirect, use replace:true, which will replace current route with new one instead of pushing
  navigate(-1)
  //' use numbers -1 go back one page, 1 go forward one page n for n pages
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to='/products/p1'>A Book</Link>
        </li>
        <li>
          <Link to='/products/p2'>A Carpet</Link>
        </li>
        <li>
          <Link to='/products/p3'>An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
