import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { MyThirdApplicationSharedLibsModule, MyThirdApplicationSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [MyThirdApplicationSharedLibsModule, MyThirdApplicationSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [MyThirdApplicationSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyThirdApplicationSharedModule {}
