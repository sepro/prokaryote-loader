import { Component, Element, Prop, h } from '@stencil/core';
import { TimelineMax, Elastic } from 'gsap';

@Component({
  tag: 'prokaryote-loader',
  styleUrl: 'prokaryote-loader.css',
  shadow: true
})

export class ProkaryoteLoader {
  @Element() el: HTMLElement;
  
  @Prop() message: string;
  
  ts: TimelineMax;
  running: boolean = false;
  
  componentDidLoad() {
    if (!this.running) {
        this.ts = new TimelineMax({repeat:-1, repeatDelay:1});
        var s1 = this.el.shadowRoot.querySelector("#spike_01");
        var s2 = this.el.shadowRoot.querySelector("#spike_02");
        var s3 = this.el.shadowRoot.querySelector("#spike_03");
        var s4 = this.el.shadowRoot.querySelector("#spike_04");
        var s5 = this.el.shadowRoot.querySelector("#spike_05");
        var s6 = this.el.shadowRoot.querySelector("#spike_06");
        var s7 = this.el.shadowRoot.querySelector("#spike_07");
        var s8 = this.el.shadowRoot.querySelector("#spike_08");

        this.ts.to(s1, 1.5, {scale:0.55, transformOrigin:"50% 100%",  ease:Elastic.easeInOut.config(1.5, 0.5) })
               .to(s2, 1.5, {scale:0.55, transformOrigin:"0% 100%",   ease:Elastic.easeInOut.config(1.5, 0.5) }, "-=1.2")
               .to(s3, 1.5, {scale:0.55, transformOrigin:"0% 50%",    ease:Elastic.easeInOut.config(1.5, 0.5) }, "-=1.2")
               .to(s4, 1.5, {scale:0.55, transformOrigin:"0% 00%",    ease:Elastic.easeInOut.config(1.5, 0.5) }, "-=1.2")
               .to(s5, 1.5, {scale:0.55, transformOrigin:"50% 0%",    ease:Elastic.easeInOut.config(1.5, 0.5) }, "-=1.2")
               .to(s6, 1.5, {scale:0.55, transformOrigin:"100% 0%",   ease:Elastic.easeInOut.config(1.5, 0.5) }, "-=1.2")
               .to(s7, 1.5, {scale:0.55, transformOrigin:"100% 50%",  ease:Elastic.easeInOut.config(1.5, 0.5) }, "-=1.2")
               .to(s8, 1.5, {scale:0.55, transformOrigin:"100% 100%", ease:Elastic.easeInOut.config(1.5, 0.5) }, "-=1.2")
               .to(s1, 1.5, {scale:1  , transformOrigin:"50% 100%",  ease:Elastic.easeInOut.config(1.5, 0.5) }, "-=0.5")
               .to(s2, 1.5, {scale:1  , transformOrigin:"0% 100%",   ease:Elastic.easeInOut.config(1.5, 0.5)}, "-=1.2")
               .to(s3, 1.5, {scale:1  , transformOrigin:"0% 50%",    ease:Elastic.easeInOut.config(1.5, 0.5)}, "-=1.2")
               .to(s4, 1.5, {scale:1  , transformOrigin:"0% 00%",    ease:Elastic.easeInOut.config(1.5, 0.5)}, "-=1.2")
               .to(s5, 1.5, {scale:1  , transformOrigin:"50% 0%",    ease:Elastic.easeInOut.config(1.5, 0.5)}, "-=1.2")
               .to(s6, 1.5, {scale:1  , transformOrigin:"100% 0%",   ease:Elastic.easeInOut.config(1.5, 0.5)}, "-=1.2")
               .to(s7, 1.5, {scale:1  , transformOrigin:"100% 50%",  ease:Elastic.easeInOut.config(1.5, 0.5)}, "-=1.2")
               .to(s8, 1.5, {scale:1  , transformOrigin:"100% 100%", ease:Elastic.easeInOut.config(1.5, 0.5)}, "-=1.2")
         
        this.running = true;
    }

  }
  
  render() {
    var message = null;
    if (this.message) { message = (<p>{ this.message }</p>); }
    return (
        <div class="container">
        <svg  xmlns="http://www.w3.org/2000/svg" version="1.1">
          <g transform="translate(15 7)">
            <g id="layer1" filter="url(#sticky)">
              <g fill="#404040">
                <path id="spike_08" d="m48.112 31.498c-1.5975 16.486 56.111 71.856 51.338 76.082-4.7991 4.2484-59.907-53.179-75.062-52.358-4.1282 0.22362 0.01754-10.604 6.5687-17.155 6.5511-6.5511 17.554-10.684 17.155-6.5687z"/>
                <path id="spike_07" d="m7.4058 94.377c10.528 12.787 90.487 11.133 90.099 17.497-0.38942 6.3976-79.964 4.7573-90.099 16.054-2.761 3.0772-7.4857-7.5105-7.4857-16.775 0-9.2647 4.8579-19.967 7.4857-16.775z"/>
                <path id="spike_06" d="m23.205 167.48c16.486 1.5975 71.856-56.111 76.082-51.338 4.2484 4.7991-53.179 59.907-52.358 75.062 0.22362 4.1282-10.604-0.0175-17.155-6.5687-6.5511-6.5511-10.684-17.554-6.5687-17.155z"/>
                <path id="spike_01" d="m121.21 15.699c-12.787 10.528-11.133 90.487-17.497 90.099-6.3976-0.38942-4.7573-79.964-16.054-90.099-3.0772-2.761 7.5105-7.4857 16.775-7.4857 9.2647 0 19.967 4.8579 16.775 7.4857z"/>
                <path id="spike_05" d="m86.084 208.19c12.787-10.528 11.133-90.487 17.497-90.099 6.3976 0.38942 4.7573 79.964 16.054 90.099 3.0772 2.761-7.5105 7.4857-16.775 7.4857-9.2647 0-19.967-4.858-16.775-7.4857z"/>
                <path id="spike_04" d="m159.19 192.39c1.5975-16.486-56.111-71.856-51.338-76.082 4.7991-4.2484 59.907 53.179 75.062 52.358 4.1282-0.22362-0.0175 10.604-6.5687 17.155-6.5511 6.5511-17.554 10.684-17.155 6.5687z"/>
                <path id="spike_03" d="m199.89 129.51c-10.528-12.787-90.487-11.133-90.099-17.497 0.38942-6.3976 79.964-4.7573 90.099-16.054 2.761-3.0772 7.4857 7.5105 7.4857 16.775 0 9.2647-4.858 19.967-7.4857 16.775z"/>
                <path id="spike_02" d="m184.09 56.405c-16.486-1.5975-71.856 56.111-76.082 51.338-4.2484-4.7991 53.179-59.907 52.358-75.062-0.22362-4.1282 10.604 0.01754 17.155 6.5687 6.5511 6.5511 10.684 17.554 6.5687 17.155z"/>
                <circle id="body" cx="103.65" cy="111.94" r="54.294"/>
              </g>
            </g>
          </g>  
          <filter id="sticky">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </svg>
        { message }
        </div>
    );
  }
}
