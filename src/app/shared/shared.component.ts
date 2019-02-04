import {Component, OnChanges, OnInit, OnDestroy, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-shared',
    templateUrl: './shared.component.html',
    styleUrls: ['./shared.component.css']
})

export class sharedComponent implements OnChanges, OnInit, OnDestroy  {
    starwidth : number;
    @Input() rating : number;
    @Output() ratingClicked : EventEmitter<string> =  new EventEmitter<string>();
    ngOnChanges(): void{
        console.log("  Change hook");
    }

    ngOnInit(): void{
        this.starwidth = this.rating * 86 / 6;
        console.log("  Init hook " + this.rating + "  "+  this.starwidth );
    }

    ngOnDestroy(): void{
        console.log(" Destroy hook")
    }

    onStar(): void {

        this.ratingClicked.emit(`Rating ${this.rating}`);

    }
}