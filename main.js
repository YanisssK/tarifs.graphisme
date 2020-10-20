$(document).ready(function(){

    //hamburger Toggle
    $('.humbarger').click(function(event){
    $('.menu-list').slideToggle(500);
    event.preventDefault();
    
    $('.menu-list li a').click(function(event) {
        if ($(window).width() < 768) {
          $('.menu-list').slideUp(500);
          event.preventDefault(); 
        }
      });
});

});
import { Client } from '@widgetbot/embed-api'

const api = new Client({
  id: 'test',
  iframe: document.getElementsByTagName('iframe')[0]
})

api.on('message', message => {
  console.log('message:', message.id)
})

api.emit('sendMessage', 'hello world')

import { Server } from '@widgetbot/embed-api'

const api = new Server({ id: 'test' })

api.on('sendMessage', message => {
  console.log('sending:', message)
})

api.emit('message', { id: 'testmessage' })