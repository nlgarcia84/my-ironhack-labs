<template>

    <footer>
     <!-- Logo -->
     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Patagonia_%28Unternehmen%29_logo.svg/2560px-Patagonia_%28Unternehmen%29_logo.svg.png" alt="">
     <!-- links nav -->
     <ul>
         <li><a href="#"></a>Link 1</li>
         <li><a href="#"></a>Link 2</li>
     </ul>
    </footer>
 
 </template>
 
 <script setup>
 
 
 
 </script>
 
 <style scoped>
 
 footer,
 ul {
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-content: center;
     align-items: center;
     background-color: grey;
     color: white;
 }
 
 li {
     list-style: none;
     padding: 0 1rem;
 
 }
 
 img {
     width: 20%;
     height: 10%;
 }
 </style>