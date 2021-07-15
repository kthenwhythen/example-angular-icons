import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
} from '@angular/core';
import { testIcons } from './test-icons';

@Component({
  selector: 'test-icons',
  template: ` <ng-content></ng-content> `,
  styles: [':host::ng-deep svg{width: 50px; height: 50px}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestIconsComponent {
  @Input()
  set name(iconName: string) {
    this.element.nativeElement.innerHTML = testIcons[iconName] || null;
  }

  constructor(private element: ElementRef) {}
}
