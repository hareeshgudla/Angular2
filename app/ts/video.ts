export class video{
    id: number;
    title: string;
    description: string;
    videoCode: string;

    constructor( id: number, title: string, description: string, videoCode: string){
            this.id= id;
            this.title= title;
            this.description= description;
            this.videoCode= videoCode;
     }
}