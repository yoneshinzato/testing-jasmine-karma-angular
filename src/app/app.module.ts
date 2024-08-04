import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StubComponent } from './stub/stub.component';
import { SpyComponent } from './spy/spy.component';
import { AsyncComponent } from './async/async.component';
import { BindingsComponent } from './bindings/bindings.component';
import { TestHostComponent } from './test-host/test-host.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ListPipe } from './pipes/list.pipe';
import { CopyrightDirective } from './directives/copyright.directive';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppErrorHandler } from './app-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    StubComponent,
    SpyComponent,
    AsyncComponent,
    BindingsComponent,
    TestHostComponent,
    ListPipe,
    CopyrightDirective,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,

  ],
  providers: [
    provideAnimationsAsync(),
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
