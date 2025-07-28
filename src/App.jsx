import UseLayout from './UseLayout';
import UseState from './UseState';
import UseRef from './UseRef';
import UseEffect from './UseEffect';
import UseMemo from './UseMemo';
import UseCallback from './UseCallback';
import UseContext from './UseContext';
import UserReducer from './UserReducer';
import User2 from './User2';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './assets/ReactRouter/Home';
import User from './assets/ReactRouter/User';
import About from './assets/ReactRouter/About';
import Contact from './assets/ReactRouter/Contact';
import Navbar from './assets/ReactRouter/Navbar';
import Users from './assets/ReactRouter/Users';
import Error from './assets/ReactRouter/Error';
//   return (
//     <>
//     <h1>App</h1>
//     <h2>Hey</h2>
//     </>
//   );
// }
function Hello() {
  return(
    <>
    <h1>Hello 
    World</h1>
    <h2>Good Morning</h2>
    </>
  );
};

function App() {
  const userData={
    name:"Abhi",
    age:26,
    phone:9843621821,
    email:"abhi@gmail.com",
  };
  return(
    <>
    <h1>Hello World</h1>
    <User2
    name={userData.name}
    age={userData.age}
    phone={userData.phone}
    email={userData.email}
    />
   <User2 />
    <UseState />
    <UseEffect />
    <UseRef />
    <UseMemo />
    <UseCallback />
    <UseContext />
    <UserReducer />
    <UseLayout />
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/user/:username" element={<User />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}
export {Hello, App};