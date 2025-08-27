import React from "react";
import {useAuth} from "./AuthContext";

function Logout() {
  const {logout} = useAuth();

  return (
    <div>
    <button onClick={() => {logout()}}>
      로그아웃
    </button>
    </div>
  );
}

export default Logout;