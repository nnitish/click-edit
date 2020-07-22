import {NgModule} from '@angular/core';
import {ClickEditDirective} from './click-edit.directive';

@NgModule({
    declarations: [ClickEditDirective],
    exports: [ClickEditDirective]
})
export class ClickEditModule {}
