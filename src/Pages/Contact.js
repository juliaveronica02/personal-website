import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class componentName extends Component {
    render() {
        return (
            // <div classNameName="pt-5 ml-5 pl-5 mt-5 text-light"style={{width:"90%"}}>
            // <div classNameName="bg-secondary text-center" >
            //     <h1 classNameName="mb-3">Contact</h1>
            //     <div>
            //     <div classNameName="row">
            //         <div classNameName="col-md-6">
            //             <input placeholder="Name" name="nama" type="text" style={{width:"70%"}} classNameName="mr-5 mb-3"></input>
            //             <input placeholder="Email" name="email" type="email" style={{width:"70%"}} classNameName="mr-5 mb-3"></input>
            //             <input placeholder="Comment" name="comment" type="text" style={{width:"70%",height:"90%"}} classNameName="mr-5"></input>
            //         </div>
            //         </div>
            //     </div>
            // </div>
            // </div>

            // bagi dua colom untuk buat submit form dan keterangan lokasi
            <div className="mt-4">
                <br/>
            <div className="container mt-5">

<h3 className="text-center">Contact Me</h3>
<hr
                        style={{
                        width: "10%",
                        border: "20%"
                    }}/>
<br/>

<div className="row">
  <div className="col-md-8">
      <form action="/post" method="post">
        <input className="form-control" name="name" placeholder="Name..." /><br />
        <input className="form-control" name="phone" placeholder="Phone..." /><br />
        <input className="form-control" name="email" placeholder="E-mail..." /><br />
        <textarea className="form-control" name="text" placeholder="How can we help you?" style={{height:"150px"}}></textarea><br/>
        <input className="btn btn-outline-primary" type="submit" value="Submit" /><br/><br/>
      </form>
  </div>
  <div className="col-md-4">
    <b>Customer service:</b> <br/>
    Phone: +1 129 209 291<br/>
    E-mail: <Link to="www.google.com">support@mysite.com</Link><br/>
    <br /><br />
    <b>Headquarter:</b><br />
    Company Inc, <br />
    Las vegas street 201<br />
    55001 Nevada, USA<br />
    Phone: +1 145 000 101<br />
    <a href="mailto:usa@mysite.com">usa@mysite.com</a><br />


    <br /><br />
    <b>Hong kong:</b><br />
    Company HK Litd, <br />
    25/F.168 Queen<br />
    Wan Chai District, Hong Kong<br />
    Phone: +852 129 209 291<br />
    <a href="mailto:hk@mysite.com">hk@mysite.com</a><br />
    </div>

  </div>
</div>
<footer className="page-footer font-small pt-4">
                        <div class="container-fluid text-center text-md-left">
                        <div className="row">
<div className="col-md-6 mt-md-0 mt-3">
  <h5 className="text-uppercase">Julia Veronica</h5>
  <p>Here you can use rows and columns to organize your footer content.</p>
</div> 
</div>
</div>
<div className="footer-copyright text-center pt-2">© 2020 Copyright:
    <Link href="https://github.com/juliaveronica02/personal-web/blob/master/contact.html"> Julia Veronica</Link>
  </div>
                        </footer>
</div>

        )
    }
}
