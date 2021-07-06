import { Link, useHistory} from "react-router-dom";
const NavBar = ({fullName,onSignOut,selectedTab}) => {

  const history = useHistory();
    
    return (
        <header className="header">
        
        <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        
        <Link to="/ProductList" className="navbar-brand">Supermercados Hermanos</Link>
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav mr-auto">
        
        {
          selectedTab==="ProductList" ?  
          <li className="nav-item active"><Link to="/ProductList" className="nav-link">Productos</Link></li>
          :<li className="nav-item"><Link to="/ProductList" className="nav-link">Productos</Link></li>
        }

        {
          selectedTab==="ShoppingList" ?  
          <li><Link to="/ShopingList" className="nav-link active">Listas de Compras</Link></li>
          : <li><Link to="/ShopingList" className="nav-link">Listas de Compras</Link></li>
        }
        


        </ul>

        <ul className="navbar-nav">
        <li className="nav-item"><p className="nav-link" href="#">{fullName}</p></li>
        
        <li className="nav-item"> <button type="button" id="signout" className="btn btn-danger" onClick={()=>{
            
            history.push("/Login")
            onSignOut();
        
        }}>Sign out</button></li>
        </ul>


        </div>

    
       
       
      </nav>
      </div>
        </header>
       
      
    );
}


export default NavBar;