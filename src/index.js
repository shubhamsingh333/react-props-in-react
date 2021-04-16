import React from "react";
import ReactDOM from "react-dom";
import Card from './Cards'



ReactDOM.render(
  <>
    <Card 
     imgsrc = "https://picsum.photos/200/300 "
     title = "Netflix Original Series"
     sname = "DARK"
     link = " https://www.facebook.com/"
    />


    <Card  
    imgsrc = "https://picsum.photos/200 "
     title = "Netflix Original Series"
     sname = "Extra Curricular"
     link = " https://www.facebook.com/"/>


    <Card 
    imgsrc = "https://picsum.photos/200/300 "
     title = "Netflix Original Series"
     sname = "Stranger Things"
     link = " https://www.facebook.com/"/>
  </>,

  document.getElementById("root")
);
