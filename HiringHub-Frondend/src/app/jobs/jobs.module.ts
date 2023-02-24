import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobcardComponent } from './jobcard/jobcard.component';
import { JoblistComponent } from './joblist/joblist.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { JobsRoutingModule } from './jobs-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { JobviewComponent } from './jobview/jobview.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeModule } from '../home/home.module';
import { AdminModule } from '../admin/admin.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ApplyComponent } from './apply/apply.component';
import { MyjobsComponent } from './myjobs/myjobs.component';


@NgModule({
    declarations: [
        JobcardComponent,
        JoblistComponent,
        JobviewComponent,
        ApplyComponent,
        MyjobsComponent,

    ],

    imports: [
        CommonModule,
        MatCardModule,
        MatTableModule,
        FormsModule,
        JobsRoutingModule,
        HttpClientModule,
        MatFormFieldModule,
        HomeModule,
        AdminModule,
        Ng2SearchPipeModule        //searching module
    ],
    exports: [
        JobcardComponent,
        JoblistComponent,
        JobviewComponent,
        ApplyComponent,
        MyjobsComponent,
    ],
})
export class JobsModule { }
