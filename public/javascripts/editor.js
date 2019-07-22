// This is a code of tools bars for make formatation text.
    
const bold=document.getElementById('bold');
const italic=document.getElementById('italic');
const underline=document.getElementById('underline');
const alignLeft=document.getElementById('align-left');
const alignCenter=document.getElementById('align-center');
const alignJustify=document.getElementById('align-justify');
const alignRight=document.getElementById('align-right');
const image=document.getElementById('image');
//const file=document.createElement('input');
const reaize=document.createElement('resize');
//file.type='file';

this.formData=new FormData();





italic.addEventListener('click',()=>{
    document.execCommand('italic',false,null);
   document.getElementById(getFocusable).focus();
})
bold.addEventListener('click',()=>{
    document.execCommand('bold',false,null);
    document.getElementById(getFocusable).focus();
})
underline.addEventListener('click',()=>{
    document.execCommand('underline',false,null);
    document.getElementById(getFocusable).focus();
})
alignLeft.addEventListener('click',()=>{
    document.execCommand('justifyleft',false,null);
    document.getElementById(getFocusable).focus();
})
alignCenter.addEventListener('click',()=>{
    document.execCommand('justifycenter',false,null);
    document.getElementById(getFocusable).focus();
})
alignJustify.addEventListener('click',()=>{
    document.execCommand('justifyFull',false,null);
    document.getElementById(getFocusable).focus();
})
alignRight.addEventListener('click',()=>{
    document.execCommand('justifyright',false,null);
    document.getElementById(getFocusable).focus();
    
})
resize.addEventListener('click',()=>{
    document.execCommand('enableObjectResizing',"","");
    document.getElementById(getFocusable).focus();
    
})
image.addEventListener('click',()=>{


  let file=document.createElement('input');
  file.type='file';
    file.click();
    file.addEventListener('change',()=>{
   

    let  fileURL=window.URL.createObjectURL(file.files[0]);

   // console.log(file.files[0])

        this.formData.append('image',file.files[0]);
       
       // document.execCommand('insertImage',0,fileURL);
       let img=document.createElement('img');
       let div=document.createElement('div');
      
      // console.log(file.files[0])
       img.src=fileURL;
       img.classList.add('imgText');
       img.dataset.name=file.files[0].name;
      
          

       let el= document.getElementById(getFocusable)

       el.appendChild(img);

       el.focus()
    


    })

    
    
    
  //  document.execCommand('insertImage',0,'file:///home/kdezen/Imagens/wallpaper/wallpaper1.jpg');
})
