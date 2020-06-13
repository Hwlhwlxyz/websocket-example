import { Component, OnInit, OnDestroy } from '@angular/core';
import * as SockJS from 'sockjs-client';
import Stomp from 'stompjs'

@Component({
  selector: 'app-stomp',
  templateUrl: './stomp.component.html',
  styleUrls: ['./stomp.component.scss']
})
export class StompComponent implements OnInit, OnDestroy {
  stompClient: any;
  webSocketEndPoint = 'http://localhost:8080';
  constructor() {
    const that = this;
    const socket = new SockJS(this.webSocketEndPoint+"/gs-guide-websocket");
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, function (frame) {
      console.log('Connected: ' + frame);
      let topicaddr = '/topic/greetings';
      that.stompClient.subscribe(topicaddr, function(greeting) {
        console.log("receive:")
        console.log(greeting)
        alert(greeting);
      });
    }, function(err) {
      console.log('err', err);
    });
   }

  

  ngOnInit() {
  }


  sendName(input_name) {
    let addr =  '/app/hello';
    console.log(addr)
    this.stompClient.send(addr, {}, JSON.stringify({
      'name': input_name
    }));
  }

  ngOnDestroy(){
    this.stompClient.unsubscribe();
  }
}
