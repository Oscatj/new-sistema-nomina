import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    let listElement = document.querySelectorAll('.list__button--click');
    let height ;
    listElement.forEach(listElement => {
    
      listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');
    
         height =0 ;
         let menu = <HTMLScriptElement>listElement.nextElementSibling;
        if (menu.clientHeight == 0){
    
            height = menu.scrollHeight;
        }
        menu.style.height=`${height}px`
      })
      
    });
  }

}
