import React, {useState} from 'react'
import admin from '../../data/admins';
import '../../css/index.css'

const Login = props => {

    const [username, setUser] = useState();
    const [password, setPass] = useState();
    const [alert, setAlert] = useState();
    const [style, setStyle] = useState();
    const authenticationLogin =(e)=>{
            e.preventDefault();
        if (!username || !password) {
            setAlert("Fill out field");
            setStyle('alert alert-danger');

        }else{
            if (username === admin[0].username && password === admin[0].password) {
                props.history.push('/dashboard');
                document.querySelector('.navolya').className="navbar navbar-expand-lg bg-dark navbar-dark navolya d-flex"
            }else{
                setAlert('password or username is wrong!');
                setStyle('alert alert-danger');
            }
        }
    }
  return (
    <div className='login-b'>
      <div className='login-bg'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1536" preserveAspectRatio="xMidYMax slice">
		    <g fill="#FFF" fill-opacity=".15" transform="translate(55 42)">
			   <g id="snow-bottom-layer">
				  <ellipse cx="6" cy="1009.5" rx="6" ry="5.5"/>
				  <ellipse cx="138" cy="1110.5" rx="6" ry="5.5"/>
				  <ellipse cx="398" cy="1055.5" rx="6" ry="5.5"/>
				  <ellipse cx="719" cy="1284.5" rx="6" ry="5.5"/>
				  <ellipse cx="760" cy="1155.5" rx="6" ry="5.5"/>
				  <ellipse cx="635" cy="1459.5" rx="6" ry="5.5"/>
				  <ellipse cx="478" cy="1335.5" rx="6" ry="5.5"/>
				  <ellipse cx="322" cy="1414.5" rx="6" ry="5.5"/>
				  <ellipse cx="247" cy="1234.5" rx="6" ry="5.5"/>
				  <ellipse cx="154" cy="1425.5" rx="6" ry="5.5"/>
				  <ellipse cx="731" cy="773.5" rx="6" ry="5.5"/>
				  <ellipse cx="599" cy="874.5" rx="6" ry="5.5"/>
				  <ellipse cx="339" cy="819.5" rx="6" ry="5.5"/>
				  <ellipse cx="239" cy="1004.5" rx="6" ry="5.5"/>
				  <ellipse cx="113" cy="863.5" rx="6" ry="5.5"/>
				  <ellipse cx="102" cy="1223.5" rx="6" ry="5.5"/>
				  <ellipse cx="395" cy="1155.5" rx="6" ry="5.5"/>
				  <ellipse cx="826" cy="943.5" rx="6" ry="5.5"/>
				  <ellipse cx="626" cy="1054.5" rx="6" ry="5.5"/>
				  <ellipse cx="887" cy="1366.5" rx="6" ry="5.5"/>
				  <ellipse cx="6" cy="241.5" rx="6" ry="5.5"/>
				  <ellipse cx="138" cy="342.5" rx="6" ry="5.5"/>
				  <ellipse cx="398" cy="287.5" rx="6" ry="5.5"/>
				  <ellipse cx="719" cy="516.5" rx="6" ry="5.5"/>
				  <ellipse cx="760" cy="387.5" rx="6" ry="5.5"/>
				  <ellipse cx="635" cy="691.5" rx="6" ry="5.5"/>
				  <ellipse cx="478" cy="567.5" rx="6" ry="5.5"/>
				  <ellipse cx="322" cy="646.5" rx="6" ry="5.5"/>
				  <ellipse cx="247" cy="466.5" rx="6" ry="5.5"/>
				  <ellipse cx="154" cy="657.5" rx="6" ry="5.5"/>
				  <ellipse cx="731" cy="5.5" rx="6" ry="5.5"/>
				  <ellipse cx="599" cy="106.5" rx="6" ry="5.5"/>
				  <ellipse cx="339" cy="51.5" rx="6" ry="5.5"/>
				  <ellipse cx="239" cy="236.5" rx="6" ry="5.5"/>
				  <ellipse cx="113" cy="95.5" rx="6" ry="5.5"/>
				  <ellipse cx="102" cy="455.5" rx="6" ry="5.5"/>
				  <ellipse cx="395" cy="387.5" rx="6" ry="5.5"/>
				  <ellipse cx="826" cy="175.5" rx="6" ry="5.5"/>
				  <ellipse cx="626" cy="286.5" rx="6" ry="5.5"/>
				  <ellipse cx="887" cy="598.5" rx="6" ry="5.5"/>
			   </g>
		    </g>
		    <g fill="#FFF" fill-opacity=".3" transform="translate(65 63)">
			   <g id="snow-top-layer">
				  <circle cx="8" cy="776" r="8"/>
				  <circle cx="189" cy="925" r="8"/>
				  <circle cx="548" cy="844" r="8"/>
				  <circle cx="685" cy="1115" r="8"/>
				  <circle cx="858" cy="909" r="8"/>
				  <circle cx="874" cy="1438" r="8" transform="rotate(180 874 1438)"/>
				  <circle cx="657" cy="1256" r="8" transform="rotate(180 657 1256)"/>
				  <circle cx="443" cy="1372" r="8" transform="rotate(180 443 1372)"/>
				  <circle cx="339" cy="1107" r="8" transform="rotate(180 339 1107)"/>
				  <circle cx="24" cy="1305" r="8" transform="rotate(180 24 1305)"/>
				  <circle cx="8" cy="8" r="8"/>
				  <circle cx="189" cy="157" r="8"/>
				  <circle cx="548" cy="76" r="8"/>
				  <circle cx="685" cy="347" r="8"/>
				  <circle cx="858" cy="141" r="8"/>
				  <circle cx="874" cy="670" r="8" transform="rotate(180 874 670)"/>
				  <circle cx="657" cy="488" r="8" transform="rotate(180 657 488)"/>
				  <circle cx="443" cy="604" r="8" transform="rotate(180 443 604)"/>
				  <circle cx="339" cy="339" r="8" transform="rotate(180 339 339)"/>
				  <circle cx="24" cy="537" r="8" transform="rotate(180 24 537)"/>
			   </g>
		    </g>
		</svg>
    <form className='container col-6 l-con' onSubmit={authenticationLogin}>
        <h3 className='text-center' style={{color:'#5C6B9B'}} >Welcome Back ! </h3>
        <p className='text-center' style={{color:'#6C757D'}}>Sign in to continue to Velzon.</p>
        <h6 className={`text-center ${style}`}>{alert}</h6>
  <div className="mb-3 ">
    <label for="exampleInputEmail1" className="form-label" >Username </label>
    <input placeholder='Enter username' onChange={(e)=>{
        setUser(e.target.value);
    }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input placeholder='Enter password' type="password" onChange={(e)=>{
        setPass(e.target.value);
    }}className="form-control" id="exampleInputPassword1"/>
  </div>


  <button type="submit" className="btn btn-success log-b" style={{width:'100px', marginLeft:'40%'}}>Sign In</button>
</form>
<p className='text-center'></p>
</div>
</div>
  )
}

export default Login