import React from 'react';

import ShowCategories from "../components/showCategories";

function Login({bg_img}) {
  return (
    <>
      <main className="h-screen w-screen flex" >
        <div className="h-full w-1/2 flex flex-col px-32 justify-center items-left" style={{backgroundImage:bg_img}}>
            <h1 className="text-6xl">Bienvenida</h1>
            <p className="mt-2">Frace de bienvenida</p>
            <ShowCategories categories={["LMS","Moodle","Videos"]}/>
        </div>
        <div className="h-full w-1/2 flex flex-col justify-center items-center">
            <h2></h2>
            <form className="w-1/2 flex flex-col justify-center items-left">
                <label name="email" >Email</label>
                <input name="email" type="email" className="p-1 w-full border-2 border-blue-200 rounded mt-2" placeholder="Correo electronico" autoFocus={true}/>
                <input type="submit" className="bg-blue-600 w-full mt-3 text-white rounded-xl py-1"/>
            </form>
        </div>
      </main>
    </>
  );
}

export default Login;