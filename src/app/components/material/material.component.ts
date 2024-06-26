import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent {
  @Input() item: {

    name: string;
    tags: string[];
    imageUrl: string;
    description: string;
    availableColor: string[];
    moreInfo: {
      pros: {
        description: string;
      }[];
      cons: {
        description: string;
      }[];
      others: {
        description: string;
      }[];

    }
    

  }

  searchText: string= '';
}
