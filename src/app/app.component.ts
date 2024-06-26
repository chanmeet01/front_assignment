import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment_frontend';

  allItems = [{
    name: "PLA (polylactic acid)",
    tags: ["3D Printing", "FDM", "Medical", "Standard Plastic"],
    imageUrl: "https://img.freepik.com/free-photo/beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds_181624-21317.jpg",

    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    availableColor: ["black", "red", "white", "yellow"],
    moreInfo: {
      pros: [{
        description: "pros of the items"
      }],
      cons: [{
        description: "cons of the items"
      }],
      others: [{
        description: "lorem ipsum"
      }]
    }
  },
  {
    name: "PLA (polylactic acid)",
    tags: ["3D Printing", "FDM", "Medical", "Standard Plastic"],
    imageUrl: "https://img.freepik.com/free-photo/beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds_181624-21317.jpg",

    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    availableColor: ["black", "red", "white", "yellow"],
    moreInfo: {
      pros: [{
        description: "pros of the items"
      }],
      cons: [{
        description: "cons of the items"
      }],
      others: [{
        description: "lorem ipsum"
      }]
    }
  },
  {
    name: "PLA (polylactic acid)",
    tags: ["3D Printing", "FDM", "Medical", "Standard Plastic"],
    imageUrl: "https://img.freepik.com/free-photo/beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds_181624-21317.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    availableColor: ["black", "red", "white", "yellow"],
    moreInfo: {
      pros: [{
        description: "pros of the items"
      }],
      cons: [{
        description: "cons of the items"
      }],
      others: [{
        description: "lorem ipsum"
      }]
    }
  },
  {
    name: "ABS (acrylonitrile butadiene styrene",
    tags: ["3D Printing", "FDM", "Medical", "Standard Plastic"],
    imageUrl: "https://img.freepik.com/free-photo/beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds_181624-21317.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    availableColor: ["black", "red", "white", "yellow"],
    moreInfo: {
      pros: [{
        description: "pros of the items"
      }],
      cons: [{
        description: "cons of the items"
      }],
      others: [{
        description: "lorem ipsum"
      }]
    }
  },
  {
    name: "PETG",
    tags: ["3D Printing", "FDM", "Medical", "Standard Plastic"],
    imageUrl: "https://img.freepik.com/free-photo/beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds_181624-21317.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    availableColor: ["black", "red", "white", "yellow"],
    moreInfo: {
      pros: [{
        description: "pros of the items"
      }],
      cons: [{
        description: "cons of the items"
      }],
      others: [{
        description: "lorem ipsum"
      }]
    },
  }
  ];
  
  items = this.allItems; 
  tagtag = this.allItems;


  onSearchTextChange($event) {
    console.log("from parent component");
    if($event) {
      this.items = this.items.filter(item => item.name.includes($event));  
    } else {
      this.items = this.allItems;
    }
    
  }

  onCheckedElement($event){
    console.log("from parent component");
    if ($event){
      this.items = this.filter(item=> item.tags.includes($event));
    } else {
      this.items= this.allItems;

    }
  }
  filter(arg0: (item: any) => any): { name: string; tags: string[]; imageUrl: string; description: string; availableColor: string[]; moreInfo: { pros: { description: string; }[]; cons: { description: string; }[]; others: { description: string; }[]; }; }[] {
    throw new Error('Method not implemented.');
  }
}


