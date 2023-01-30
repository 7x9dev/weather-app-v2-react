import "./App.css";

export default function Footer() {
   return (
      <p className="footer">
         Coded and designed by
         <a
            className="footLink"
            href="https://www.7x9.dev/"
            target="_blank"
            rel="noopener noreferrer"
         >
            {" "}
            Valerie&nbsp;D.
         </a>{" "}
         and is open-souced on
         <a
            className="footLink"
            href="https://github.com/7x9dev"
            target="_blank"
            rel="noopener noreferrer"
         >
            {" "}
            GitHub
         </a>
      </p>
   );
}
