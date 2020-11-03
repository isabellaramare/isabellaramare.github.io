import React from 'react';
import '../App.css';


class ScrollToTop extends React.Component { 
  
  handleClick(scrollTo) {
    var element = document.getElementById(scrollTo);
    
    try {
      element.scrollIntoView();
    }

    catch {

    }
  }
  render() {
    return (
      <button id="btnScrollTop" onClick={(e) => this.handleClick('top')} className="btn-scroll-top">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
        </svg>
      </button>
      );
    }
}

export default ScrollToTop;