console.log("script running...")
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display ='inline';
        document.querySelector('.cross').style.display ='none';
    }
    else{
        document.querySelector('.ham').style.display ='none' 
        setTimeout(() => {
        document.querySelector('.cross').style.display ='inline';
        },350);
    }
}) 


// for image select drawer

const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach ((imgItem) => {
    imgItem.addEventListener('click',(event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  })

}) 

function slideImage(){
    const displaywidth = document.querySelector('.img-showcaseimg:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = 'translateX(${- (imgId - 1) * displayWidth}px)';
}

let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});