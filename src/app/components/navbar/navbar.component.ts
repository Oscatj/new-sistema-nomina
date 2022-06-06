import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
