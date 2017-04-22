import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-fbLogin',
  templateUrl: 'fbLogin.html',
})

export class LoginPage {

    autocompleteItems: any;
    autocomplete: any;
    acService:any;
    placesService: any; 

    @ViewChild('map') mapElement: ElementRef;
    map: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {

    }


    ionViewDidLoad() {
        this.loadMap();
        console.log('ionViewDidLoad fbLogin');
    }

	
	
	
	
}
	
