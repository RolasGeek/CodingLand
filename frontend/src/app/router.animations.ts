import {trigger, state, animate, style, transition} from '@angular/animations';

export function routerTransition() {
  return slideToTop();
}



export function slideToTop() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'78%', height:'100%'}) ),
    state('*', style({position:'relative', width:'100%', height:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateY(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.1s ease-in-out', style({transform: 'translateY(-100%)'}))
    ])
  ]);
}