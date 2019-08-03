import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<style>
/*
header,div,footer,nav{
border: 1px solid black;
}
*/

body{
  background-color: #BAB2B5;
}

ul {
    display: inline-block;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #EDC7B7;
height: 48px;
}

li {
    float: left;
}

li a {
    display: block;
    color: #AC3B61;
    text-align: center;
    padding: 10px 16px;
    text-decoration: none;
  font-weight: bold;
    font-size: 20px;
}

li a:hover {
    background-color: #de977a;
}
#headerdiv {
  text-align: center;
  background-color: #EEE2DC;
  color: #AC3B61;
    font-family: 'Cookie', serif;
    font-size: 150px;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
#navdiv {
  text-align: center;
  background-color: #EDC7B7;
  height: 48px;
}
#footerdiv {
  text-align: center;
  background-color: #EEE2DC;
  padding: 14px;
  height: 48px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

</style>
<header id="headerdiv">Grande Gift</header>
<div id="navdiv">
  <ul>
    <li><a routerLink="/home">Home</a></li>
    <li><a routerLink="/about">About Us</a></li>
    <li><a routerLink="/contact">Contact</a></li>
  </ul>
</div>
<div class="container" style="width: 700px">
  <router-outlet></router-outlet>
</div>
<footer id="footerdiv">Copyright</footer>
`
})
export class AppComponent { }
