import { Component, Input } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'lai-tab-group-body',
  templateUrl: './tab-group-body.component.html',
  styleUrls: ['./tab-group-body.component.scss'],
})
export class TabGroupBodyComponent {
  @Input() tab!: TabComponent;
}
