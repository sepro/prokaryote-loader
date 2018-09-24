import { Component, Element } from '@stencil/core';
import { TimelineMax, Elastic, Power1 } from 'gsap';

@Component({
  tag: 'prokaryote-loader',
  styleUrl: 'prokaryote-loader.css',
  shadow: true
})
export class ProkaryoteLoader {
  @Element() el: HTMLElement;
  
  ts: TimelineMax;
  running: boolean = false;
  
  componentDidLoad() {
    if (!this.running) {
        this.ts = new TimelineMax({repeat:-1, repeatDelay:1});
        var c2 = this.el.shadowRoot.querySelector('#circle02');
        var c3 = this.el.shadowRoot.querySelector('#circle03');

        this.ts.to([c2, c3], 2, { x:75, fill:"#666", ease:Elastic.easeOut.config(1, 0.5) })
               .to(c3, 2, { x:150, fill:"#BBB", ease:Elastic.easeOut.config(1, 0.5) })
               .to([c2,c3], 0.5, { x:0, fill:"black", ease:Power1.easeInOut })
         
        this.running = true;
    }

  }
  
  render() {
    return (
        <svg  xmlns="http://www.w3.org/2000/svg" version="1.1">
          <g filter="url(#sticky)">
            <circle
                    fill="black"
                    id="circle01"
                    cx="75"
                    cy="75"
                    r="25"/>
            <circle
                    fill="black"
                    id="circle02"
                    cx="75"
                    cy="75"
                    r="25"/>
           <circle
                    fill="black"
                    id="circle03"
                    cx="75"
                    cy="75"
                    r="25"/>
          </g>
          <filter id="sticky">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </svg>
    );
  }
}
