import { NgModule } from '@angular/core';
import { 
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
 } from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatGridListModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule
    ],
    exports: [
        MatToolbarModule,
        MatGridListModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule
    ]
})

export class MaterialModule{}