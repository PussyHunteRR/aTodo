import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { InputFormComponent } from './input-form/input-form.component';
import { FormsModule } from '@angular/forms';
import { SearchTodo } from './shared/searvch.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    InputFormComponent,
    SearchTodo
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
