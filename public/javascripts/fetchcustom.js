
const fetchSave=(url,params)=>{
  let response=fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json;charset=utf-8'
      },
      body:JSON.stringify(params)
    });
    
}


const fetchMenu=(url,id)=>{
  let st=fetch(url,{
    method:'GET',
    headers:{
      'Content-Type':'application/json;charset=utf-8'
    },

  })
  .then(response=>{
      //console.log(data.json());
      return response.json();

  }).then(data=>{

    let elem=document.getElementById(id);

      data.map((f)=>{

     
       elem.appendChild(menuHTML(f.link,f.svg));
     
        
     
      })

    

  })
}

const menuHTML=(link,svg)=>{

  let content=`
   <a href="${link}">
    ${svg}    
  </a>
  `
let div=document.createElement('div');



  div.classList.add('col','s6','m6');

  div.innerHTML=content;
  
  

  return div;
 
  

}

const fetchViewSVG=(url)=>{
  let st=fetch(url,{
    method:'GET',
    headers:{
      'Content-Type':'application/json;charset=utf-8'
    },

  })
  .then(response=>{
      //console.log(data.json());
      return response.json();

  }).then(data=>{


   
    const docker=document.getElementById('docker');
    const header=`<h4>${data.results['title']}</h4>`;
    const content=`<div style="">${data.results['svg']}</div>`
    const footer=`
    <button class="waves-effect waves-red btn-flat btn-large" data-close="true"><i class="material-icons">close</i></button>
   
    `
    

    createModal(docker,header,content,footer) 

        

  })
}

const createModal=(docker,header,content,footer)=>{

  
  const mModal=document.createElement('div');
  const mHeader=document.createElement('div');
  const mContent=document.createElement('div');
  const mFooter=document.createElement('div');

  mHeader.innerHTML=header;
  mContent.innerHTML=content;
  mFooter.innerHTML=footer;

  mHeader.classList.add('container');
  mContent.classList.add('container');
  mContent.style='padding-bottom:3em;'


  mModal.appendChild(mHeader);
  mModal.appendChild(mContent);
  mModal.appendChild(mFooter);

  docker.appendChild(mModal);

 

  mModal.classList.add('grey','lighten-4');
 
  mModal.classList.add('z-depth-5');
  mModal.style="position:fixed;top: 10%; right: 10%;bottom: 30%;left: 10%;z-index: 10;flex-direction:column"

  mContent.style="height:70%;max-height:70%";


  let counts=mModal.getBoundingClientRect().width;

  console.log(counts);
  

  mFooter.style="border-top:1px solid gray;height:20%;padding:2em;";
 
 
  for (let i=0;i<mFooter.childElementCount;i++){
    
    mFooter.children[i].style="float:right";
    

  }
 
  const dataClose=document.querySelector('[data-close]');

  dataClose.style.alignContent = "space-between";

  
  dataClose.addEventListener('click',()=>{
    mModal.remove();
  })




}