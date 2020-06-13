import { Component, OnInit, OnDestroy } from '@angular/core';
import { InjectableRxStompConfig, RxStompService } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';

@Component({
  selector: 'app-ng2stompjs',
  templateUrl: './ng2stompjs.component.html',
  styleUrls: ['./ng2stompjs.component.scss']
})
//https://stomp-js.github.io/guide/ng2-stompjs/ng2-stomp-with-angular7.html
export class Ng2stompjsComponent implements OnInit, OnDestroy{

  constructor(private rxStompService: RxStompService) { }
  topicSubscription
  input_name:string;
  
  ngOnInit() {
    this.topicSubscription = this.rxStompService.watch('/topic/greetings').subscribe((message: Message) => {
      console.log(message);
      alert(message.body);
      console.log(message.body)
    });
  }

  onSendMessage(input_name){
    //const message = `Message generated at ${new Date}`;
    const message = JSON.stringify({
      'name': input_name
    });
    console.log("send:",message)
    this.rxStompService.publish({destination: '/app/hello', body: message});
  }

  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }
}
