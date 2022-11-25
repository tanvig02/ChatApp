import React from "react";
import Navbar from "./Components/Navbar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./Components/Chat";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  styleContainer: `lex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* NavBar */}
        <Navbar />
        {/* ChatComponent */}
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
