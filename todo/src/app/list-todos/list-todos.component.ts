import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos=[
    new Todo(1, 'learn to dance', false, new Date()),
    new Todo(2, 'visit india, false', false, new Date()),
    new Todo(3, 'expert at angular', false, new Date())
  ]

  // todos =[
  //   {id:1, description:'learn to dance'}
  //   {id:2, description:'visit india'}
  //   {id:3, description:'expert at angular'}
  // ]

  // todo={
  //   id : 1,
  //   description : 'learn to dance'
  // }

  constructor() {}

  ngOnInit() {
  }

}
