import { useButton } from "@react-aria/button";
import { AriaLinkOptions, useLink } from "@react-aria/link";
import React from "react";


const ReactAriaButtons: React.FC<{className: string; type: "submit" | "button"; onPress: ()=> void;}> = (props) => {
  const ref = React.useRef(null);
  const {buttonProps} = useButton(props, ref);
  const {children} = props;

  return (
    <button {...buttonProps} className={props.className} ref={ref}>
      {children}
    </button>
  );
}

const ReactAriaDivButton: React.FC<{className: string; type: "submit" | "button"; onPress: ()=> void; elementType?: string;}> = (props) => {
    const ref = React.useRef(null);
  const {buttonProps} = useButton({...props, elementType: "div"}, ref);
  const {children} = props;

  return (
    <div {...buttonProps} className={props.className} ref={ref}>
      {children}
    </div>
  );
}

interface ExtendedLinkProps extends AriaLinkOptions {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
  }

const ReactAriaLinks: React.FC<ExtendedLinkProps> = (props) => {
    const ref = React.useRef(null);
    const {linkProps} = useLink(props, ref);
  
    return (
      <a
        {...linkProps}
        ref={ref}
        href={props.href}
        className={props.className}>
    
        {props.children}
      </a>
    )}



const WithReactAriaPage: React.FC = ()=>{
    return <main>
        <h1>Accessibility with React Aria</h1>
        <section className="section">
            <h2>Buttons</h2>
            <div className="flex-row evenly">
                <ReactAriaButtons className="btn" type="button" onPress={()=> console.log("Simple button pressed")}>Simple button</ReactAriaButtons>
                <ReactAriaButtons className="btn" type="submit" onPress={()=> console.log("Submit button pressed")}>Submit button</ReactAriaButtons>
                <ReactAriaDivButton className="btn" type="submit" onPress={()=> console.log("Div button pressed")}>Div button</ReactAriaDivButton>
            </div>
        </section>
        <section className="section">
            <h2>Links</h2>
            <div className="flex-row evenly">
                <ReactAriaLinks href="https://google.com" className="link">Going to Google</ReactAriaLinks>
                <ReactAriaLinks href="#" className="link">Going nowhere</ReactAriaLinks>
            </div>
        </section>
    </main>
}

export default WithReactAriaPage;