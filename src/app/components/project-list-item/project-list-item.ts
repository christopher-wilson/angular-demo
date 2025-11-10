import {Component, input} from '@angular/core';
import {Project} from '../../pages/projects/projects';
import {Card} from 'primeng/card';

@Component({
  selector: 'app-project-list-item',
  imports: [
    Card
  ],
  templateUrl: './project-list-item.html',
  styleUrl: './project-list-item.css',
})
export class ProjectListItem {
  project = input<Project|undefined|any>();
}
