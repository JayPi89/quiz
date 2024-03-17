import { NgModule } from "@angular/core";
import { MyLineChartComponent } from "./my-line-chart.component";
import {  NgChartsModule } from "ng2-charts";

@NgModule({
    imports: [NgChartsModule],
    exports: [MyLineChartComponent],
    declarations: [MyLineChartComponent],
    providers: [],
 })
 
 export class MyLineChartModule {
 }