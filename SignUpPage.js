import React from "react";

function SignUpPage() {

   return(
         <div>

             <form action={"http://localhost:4000/signup"} method={"post"}>
                 <input name={"name"} placeholder={"Enter name"}/><br/>
                 <input name={"username"} placeholder={"Enter username"}/><br/>
                 <input name={"password"} placeholder={"Enter password"}/><br/>
                 <input name={"email"} placeholder={"Enter email"}/><br/>
                 <input name={"institute"} placeholder={"Enter institute"}/><br/>
                 <input name={"role"} placeholder={"Enter role"}/><br/>
                 <button type={"submit"}>Click</button><br/>
             </form>
         </div>
   );

}


export default SignUpPage;