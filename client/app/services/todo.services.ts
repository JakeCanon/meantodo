import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService{
  constructor(private http:Http){
    
  }
  getTodos(){
    return this.http.get('/api/v1/todos')
    .map(res => res.json());
  }

  addTodos(newTodo){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/v1/todos', JSON.stringify(newTodo), {headers: headers})
    .map(res => res.json());
  }

  deleteTodos(id){
      return this.http.delete('/api/v1/todos'+id)
      .map(res => res.json());
  }

  updateStatus(task){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('/api/v1/todos'+task._id, JSON.stringify(task), {headers: headers})
    .map(res => res.json());

  }

}