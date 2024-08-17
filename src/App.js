// import React from 'react';
// import ReactDOM from 'react-dom';
// class ReactState extends ReactState.component{
//     constructor(){
//         super();
//             this.state={MyWebsite:"Welcome to my Website"}
//         }
//         render(){
//         return <h1>{this.state.MyWebsite}</h1>
//         }
// }
// ReactDOM.render(<ReactState/>,document.getElementById,("root"));

// export default ReactState;

// import React ,{useEffect, useState} from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

// function Welcome(){
//   const[count,setCount]=useState(10);
//   return(
//     <div >
//       <p>click{count}times</p>
//       <button onClick={()=>setCount(count+1)}>+</button>
//       <button onClick={()=>setCount(count-1)}>-</button>
//     </div>
//   );
// }
// ReactDOM.render(<Welcome/>,document.getElementById("root"));

// export default Welcome;

// function Examplerender(){
//   const[count,setCount]=useState(0);

//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount(count=>count+1)
//     },1000)
//   },  );
// return(
//   <h1>It is counting {count} times</h1>
// )
// }

// export default Examplerender



// function ProgressBar() {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setProgress((prevProgress) => {
//         if (prevProgress < 100) {
//           return prevProgress + 10;
//         }
//         return prevProgress;
//       });
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [progress]);

//   return (
//     <div>
//       <progress value={progress} max="100" />
//       <p>Progress: {progress}%</p>
//     </div>
//   );
// }

// export default ProgressBar;

// function CountdownTimer() {
//   const [time, setTime] = useState(100); 

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTime((prevTime) => {
//         if (prevTime > 0) {
//           return prevTime - 1;
//         }
//         return prevTime;
//       });
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [time]);
  
//   return (
//     <div>
//       <p>Time remaining: {time} seconds</p>
//     </div>
//   );
// }

// export default CountdownTimer;


// function TypingIndicator() {
//   const [typing, setTyping] = useState(false);
//   const [timeoutId, setTimeoutId] = useState(null);

//   const handleTyping = () => {
//     setTyping(true);
//     clearTimeout(timeoutId);
//     const newTimeoutId = setTimeout(() => {
//       setTyping(false);
//     }, 2000); // 2 seconds
//     setTimeoutId(newTimeoutId);
//   };

//   return (
//     <div>
//       <input type="text" onKeyUp={handleTyping} />
//       {typing && <p>Typing...</p>}
//     </div>
//   );
// }

// export default TypingIndicator;



// function Carousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = ['Slide 1', 'Slide 2', 'Slide 3'];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCurrentSlide((prevSlide) => {
//         if (prevSlide < slides.length - 1) {
//           return prevSlide + 1;
//         }
//         return 0;
//       });
//     }, 3000); // 3 seconds

//     return () => clearTimeout(timer);
//   }, [currentSlide]);

//   return (
//     <div>
//       <p>{slides[currentSlide]}</p>
//     </div>
//   );
// }

// export default Carousel;

// function LiveUpdates() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('(link unavailable)');
//       const newData = await response.json();
//       setData(newData);
//     };

//     const timer = setTimeout(() => {
//       fetchData();
//     }, 5000); // 5 seconds

//     return () => clearTimeout(timer);
//   }, [data]);

//   return (
//     <div>
//       {data ? (
//         <p>Live data: {data.value}</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default LiveUpdates;

import React ,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

function Name(){
    const[users,setUsers]=useState([]);
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch('http://universities.hipolabs.com/search?country=United+States')
        .then(response=>response.json())
        .then(data=>{
            setUsers(data);
            setLoading(false);
        })
        .catch(error=>{
            console.error("It is not loading and it will be a error")
            setLoading(false);
        });
    },[]);

if(loading){
     return<p>loading...</p>;
}


return(
    <div>
    <h2>List of universities in US</h2>
    <ol>{users.map(user=>(
    <li key={user.alpha_two_code}>{user.name} --{user.country}--{user.domains}</li>
        ))}
    </ol>
    
     </div>
    );
    }
export default Name;







