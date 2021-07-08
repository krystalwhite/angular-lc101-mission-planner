export class Candidate {
    name: string;
    photo: string;
    inCrew: boolean;

    constructor(name : string, photo : string) {
        this.name = name;
        this.photo = photo;
        this.inCrew = false;
    }
}
