import {Component} from 'angular2/core';
import {Config} from './config.component';
import {video} from './video';
import {PlaylistComponent} from './playList.Component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {

    heading = Config.VARIABLE;
    videos:Array<video>;

    constructor(){
        this.videos=[
            new video(1, "Toliprema Movie", "movie", "CbklMuDh7i0"),
            new video(2, "learn angular", "angular", "f8qBeaGe2S4"),

        ]

    }
}



