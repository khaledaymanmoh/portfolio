//Project Screenshots
import reacttodo from "./images/reacttodo.JPG";
import reactwavesplayer from "./images/reactwavesplayer.JPG";
import reactgallery from "./images/reactgallery.JPG";
const projects = [
    {
        id: 1,
        title: "Waves Music Player",
        description: "Developed this through out The Creative React Course by Dev Ed, my favorite instructor on the internet. The project is very interesting and included the implementation of a variety of concepts and features which enhanced my journey in using ReactJS. ",
        image: reactwavesplayer,
        using: ["ReactJS"], link: "https://react-waves-player.netlify.app/"
    },
    {
        id: 2,
        title: "Todo List",
        description: "My first by-myself react project, it is extremely basic. However, I was keen on implementing it to put the ReactJS basics I learned into action, props, states, etc. along with some cool libraries such as React Router and Framer Motion.",
        image: reacttodo,
        using: ["ReactJS"], link: "http://khaloudastodo.netlify.app"
    },
    {
        id: 3,
        title: "React Gallery",
        description: "A first step towards back-end development, I chose firebase due its simplicity.. Created an online gallery that saves uploaded photos in a firestore storage and present them in a simple grid, added styles using Styled Components and simple animations using Framer Motion.",
        image: reactgallery,
        using: ["ReactJS", "Firebase"], link: "http://fire-reactgram.netlify.app"
    }

];



export default projects
