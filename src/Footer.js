import React from "react";

export default function Footer() {
  let time = new Date().getFullYear();

  return <footer>Copyright @ {time}</footer>;
}
