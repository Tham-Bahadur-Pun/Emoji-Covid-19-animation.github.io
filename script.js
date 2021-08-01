document.querySelector("body").addEventListener(e=>{
  let eye=document.querySelectorAll(".eye");
  eye.forEach(eye=>{
    let x=(eye.getBoundingClientRect().left)+(eye.clientWidth/2);
    let y=(eye.getBoundingClientRect().top)+(eye.clientHeight/2);
    
  })
})