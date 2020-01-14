import {Component, ComponentFactoryResolver, Inject, Injector, OnInit} from '@angular/core';
import {Course} from '../../model/course';
import {ResolverService} from 'commons-lib';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent implements OnInit {

  courses: Course[] = [];

  constructor(private resolverService: ResolverService, private resolver: ComponentFactoryResolver, private injector: Injector) {
    console.log("Construyendo ...." + resolverService.n);
    resolverService.receiveContext(resolver, injector);
  }

  ngOnInit() {
  }

}
