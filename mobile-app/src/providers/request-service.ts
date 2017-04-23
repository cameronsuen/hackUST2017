import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
  
@Injectable()
export class RequestService {  
    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http) {
         
    }
  
    sendNotification(currencyAmount, holdCurrency, needCurrency, currency, coords) {
        console.log('Entering send');
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'key=AAAA7_jbKNI:APA91bFdhtRltuumj3u36yQFdqLmo4vCsaAeRIZvpt7fQWEYUPaOcfs2VvnR8NoOt1XL013SENtMTnQ5hB1sx337fItgxlPMYEw889sXqkhLDleBs2rKaf_NGvpMQ5sAxs_-er3rIBoR'});
        let options = new RequestOptions({ 'headers': headers });
        var url = 'https://fcm.googleapis.com/fcm/send';
        var body = {
          "notification":{
            "title": "New Exchange Request",
            "body":"Click to Open",
            "sound":"default",
            "click_action":"FCM_PLUGIN_ACTIVITY",
            "icon":"fcm_push_icon"
          },
          "data":{
              "message": "Some message data to help render the content when received.",
              "currencyAmount": currencyAmount,
              "holdCurrency": holdCurrency,
              "currency": currency,
              "coords": coords
          },
            "to":"/topics/topic",
            "priority":"high",
            "restricted_package_name":""
        }
        var response = this.http.post(url, body, options).map(res => res.json());
        response.subscribe((data) => {
            console.log(data);
        });
        return response;
    }
}
