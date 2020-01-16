import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ViewContainerRef,
    ViewChild,
    ComponentFactoryResolver,
    AfterViewInit,
} from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements AfterViewInit {
    @Input() content: any;

    @Output() closeModalEvent = new EventEmitter<object>();

    // Properties for modal size, by default 50% of window size
    public inputHeight = '50%';
    public inputWidth = '50%';

    constructor() {}

    ngAfterViewInit() {
        this.inputHeight = this.content.size[0] + '%';
        this.inputWidth = this.content.size[1] + '%';
    }

    closeModal() {
        this.closeModalEvent.emit();
    }
}
