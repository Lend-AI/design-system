import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  inject,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { BodyLevel } from '../../typography';
import { IconSize } from '../../icon';
import {
  TAB_GROUP_SIZE_TO_BODY_LEVEL,
  TAB_GROUP_SIZE_TO_ICON_SIZE,
} from '../shared';
import { TAB_GROUP, TabGroup } from '../tab-group/tab-group';

@Component({
  selector: 'lai-tab-label',
  templateUrl: './tab-label.component.html',
  styleUrls: ['./tab-label.component.scss'],
})
export class TabLabelComponent {
  @HostBinding('class.selected')
  @Input()
  selected = false;

  @Input() tab!: TabComponent;

  @Output() selectedChange = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();

  parent: TabGroup = inject(TAB_GROUP);

  @HostBinding('attr.disabled')
  get disabled(): boolean {
    return this.tab.disabled;
  }

  // to make element focusable
  @HostBinding('attr.tabindex')
  get tabIndex(): number {
    return this.disabled ? -1 : 0;
  }

  get bodyLevel(): BodyLevel {
    return TAB_GROUP_SIZE_TO_BODY_LEVEL[this.parent.size];
  }

  get iconSize(): IconSize {
    return TAB_GROUP_SIZE_TO_ICON_SIZE[this.parent.size];
  }

  @HostListener('click')
  onSelectedChange(): void {
    if (this.disabled) {
      return;
    }

    this.selectedChange.emit();
  }

  onRemove(event: MouseEvent): void {
    event.stopPropagation();
    if (this.disabled) {
      return;
    }

    this.remove.emit();
  }
}
