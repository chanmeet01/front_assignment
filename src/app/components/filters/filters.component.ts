import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-filter',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements  AfterViewInit{

  technologies = ['FDM', 'SLA', 'SLS', 'MJF', 'Polyjet', 'DMLS', 'SLM', 'Vacuum Casting', 'CNC'];
  industries = ['Automotive', 'Aerospace', 'Consumer Electronics', 'Robotics and Animation', 'Medical and Dental', 'Hobbyists', 'Architectural', 'Jewellery'];
  properties = ['Property 1', 'Property 2', 'Property 3']; 
  applications = ['Application 1', 'Application 2', 'Application 3'];

  selectedTechnologies: string[] = [];
  selectedIndustries: string[] = [];
  selectedProperties: string[] = [];
  selectedApplications: string[] = [];

  ngAfterViewInit() {
   
  }

  toggleSelection(array: string[], item: string) {
    const index = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    } else {
      array.push(item);
    }
  }

  applyFilters() {
    console.log('Selected Technologies:', this.selectedTechnologies);
    console.log('Selected Industries:', this.selectedIndustries);
    console.log('Selected Properties:', this.selectedProperties);
    console.log('Selected Applications:', this.selectedApplications);
  }

  resetFilters() {
    this.selectedTechnologies = [];
    this.selectedIndustries = [];
    this.selectedProperties = [];
    this.selectedApplications = [];
  }


  //ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
  //}

  @Output() CheckedElementEvent = new EventEmitter<any>();

  onCheckedElement(event: any){
    console.log("login from app-filter");

    debugger
    this.CheckedElementEvent.emit(event.target.value);

  }

  

}
