<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import axios from "axios";

const Footer = (props) => {
  console.log(props);
  return (
    <div class="container">
  <footer class="py-3 my-4">
    <p class="text-center text-muted">{props.text}</p>
  </footer>
</div>
  );
};

=======
import React, { useState, useEffect } from "react";
import axios from "axios";

const Footer = (props) => {
  console.log(props);
  return (
    <div class="container">
  <footer class="py-3 my-4">
    <p class="text-center text-muted">{props.text}</p>
  </footer>
</div>
  );
};

>>>>>>> 8975eae (initial commit)
export default Footer;