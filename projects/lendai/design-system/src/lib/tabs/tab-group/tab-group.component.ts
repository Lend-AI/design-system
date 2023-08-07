import {
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { TabSize, TabType } from '../shared';
import { TAB_GROUP, TabGroup } from './tab-group';

@Component({
  selector: 'lai-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
  providers: [{ provide: TAB_GROUP, useExisting: TabGroupComponent }],
})
export class TabGroupComponent implements AfterViewInit, TabGroup {
  @Input()
  @HostBinding('attr.size')
  size: TabSize = 'md';

  @Input()
  @HostBinding('attr.type')
  type: TabType = 'line';

  @Output() selectedChange = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  selectedTab?: TabComponent;

  ngAfterViewInit(): void {
    if (!this.selectedTab && this.tabs.first) {
      this.selectedTab = this.tabs.first;
    }
  }

  onSelectedChange(index: number): void {
    this.selectedTab = this.tabs.get(index);
    this.selectedChange.emit(index);
  }

  onRemove(index: number): void {
    this.remove.emit(index);
  }
}
