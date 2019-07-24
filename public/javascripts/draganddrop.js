/*
    opt.style.display='none';
    close.style.display='none';
    
    down.addEventListener('click',()=>{
        opt.style.display='block';
        close.style.display='block';
        down.style.display='none'
    })
    close.addEventListener('click',()=>{
        opt.style.display='none';
        close.style.display='none';
       down.style.display='block'
    })

*/
   

const dragBars=(dragMe)=>{
    let  dragOfX=0;
    let  dragOfY=0;

    const dragStart=(e)=>{
        dragOfX=e.pageX-dragMe.offsetLeft;
        dragOfY=e.pageY - dragMe.offsetTop;

        addEventListener('mousemove',dragMove);
        addEventListener('mouseup',dragEnd);
    }

    const dragMove=(e)=>{
        dragMe.style.left=(e.pageX-dragOfX)+ 'px';
        dragMe.style.top=(e.pageY -dragOfY) + 'px';
    }
    const dragEnd=()=>{
        removeEventListener('mousemove',dragMove);
        removeEventListener('mouseup',dragEnd);
    }

    dragMe.addEventListener('mousedown',dragStart);

}

const contentTextBar=()=>{
    const div=document.createElement('div');
   

    div.innerHTML +=`
    <div class="row">
        <div class="input-field col s6">
            <input  id="kerning" type="number" class="active">
            <label for="kerning">Kerning</label>
        </div>
        <div class="input-field col s6">
            <select id="und" >
            <option value="" disabled selected>und</option>
            <option value="px">px</option>
            <option value="pt">pt</option>
            <option value="%">%</option>
            <option value="em">em</option>
            </select>
            <label>und</label>
         </div>
       
    </div>
    `;
    

   


    return div;
}

const startBarText=()=>{
    const barText=document.createElement('div');
    const barContent=document.createElement('div');
    const docker=document.getElementById('docker')
    const btnMin=document.createElement('button');
    const btnMax=document.createElement('button');
   
    
    btnMax.classList.add('waves-efect','waves-gray','btn-flat','white-text');
    btnMin.classList.add('waves-efect','waves-gray','btn-flat','white-text');


    barText.classList.add('black','white-text','right-align');
    barContent.classList.add('grey','lighten-2','z-depth-5')

   barText.style=`
   width:350px;
   height:2em;
   top:15%;
   lef:35%;
   right:5%;
   bottom:20%;
   position:absolute;
   z-index:999;
   display:block;
   border-radius:10px`

   barContent.style=`
   top:2em;
   width:auto;
   height:10em;
   flex-direction:row;
   `


   btnMin.innerHTML=`<i class="material-icons">arrow_drop_up</i>`;
   btnMax.innerHTML=`<i class="material-icons">aspect_ratio</i>`;

    barText.innerHTML=`<span id="bar-title-text">teste</scpan>`;

    //const teste=contentTextBar();
   barContent.appendChild(contentTextBar());
   console.log(contentTextBar())

    barText.appendChild(btnMin);
    barText.appendChild(btnMax);
    barText.appendChild(barContent) 
    dragBars(barText);

    docker.appendChild(barText);

    btnMin.addEventListener('click',()=>{
        barContent.style.display='none';
    })
    btnMax.addEventListener('click',()=>{
        barContent.style.display='block';
    })

    //return barText;
    console.log(docker);


}








