import {Emblem} from "./components/Emblem";
import {Paragraph} from "./components/Paragraph";
import {Whitespace} from "./components/Whitespace";
import {Header} from "./components/Header";
import {Accordion} from "./components/Accordion";
import logo from "../assets/emblem.jpg";
import * as ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement);

root.render(<div className='app'>
    <Header level={2} text="React-Intro" />
    <Paragraph text="Hello" />
    <Whitespace />
    <br />
    <Accordion text="This is accordion example" />
    <br />
    <Emblem src={logo} />
</div >);