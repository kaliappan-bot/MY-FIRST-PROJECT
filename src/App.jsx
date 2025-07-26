import User from './User';
import UseState from './UseState';
import UseRef from './UseRef';
import UseEffect from './UseEffect';
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
}

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
    <User 
    name={userData.name}
    age={userData.age}
    phone={userData.phone}
    email={userData.email}
    />
    <User />
    <UseState />
    <UseEffect />
    <UseRef />
    </>
  );
}
export {Hello, App};