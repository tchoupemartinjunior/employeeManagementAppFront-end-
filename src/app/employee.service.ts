
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root' // define the service in the provider array in the aoo.module
})

export class EmployeeService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

  public getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employees`);
  }
  public addEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.apiServerUrl}/employees`, employee);
  }
  public updateEmployee(employee:Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.apiServerUrl}/employees`, employee);
  }
  public deleteEmployee(employeeId:number):Observable<Employee>{
    return this.http.delete<Employee>(`${this.apiServerUrl}/employees/${employeeId}`);
  }
}

