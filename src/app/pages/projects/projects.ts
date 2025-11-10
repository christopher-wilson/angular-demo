import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
    projects: Project[] = [
      {
        name: 'Bespoke Steel Chicken',
        description: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
        thumbnailUrl: 'https://loremflickr.com/640/480?lock=1092830688706560',
        url: 'https://nocturnal-teepee.info'
      },
      {
        name: 'Refined Steel Keyboard',
        description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
        thumbnailUrl: 'https://loremflickr.com/640/480?lock=2232779326619648',
        url: 'https://broken-hunter.net/'
      },
      {
        name: 'Small Bronze Table',
        description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
        thumbnailUrl: 'https://picsum.photos/seed/hlFuAU/640/480',
        url: 'https://smart-microphone.org/'
      },
      {
        name: 'Incredible Plastic Shirt',
        description: 'The Football Is Good For Training And Recreational Purposes',
        thumbnailUrl: 'https://loremflickr.com/640/480?lock=2759451211726848',
        url: 'https://old-fashioned-hunger.biz'
      }
    ]
}

export interface Project {
  name: string;
  description: string;
  thumbnailUrl: string;
  url: string;
}
