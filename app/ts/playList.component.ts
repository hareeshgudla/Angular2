import {Component} from 'angular2/core';
import {video} from './video';
@Component({
    selector: 'playList',
    templateUrl: 'app/ts/playList.component.html',
    inputs: ['videos']
})

export class PlaylistComponent {
    onSelect(vid:video){
        console.log(JSON.stringify(vid));
    }
}