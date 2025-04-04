import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'https://localhost:7254/api/Clientes';

  constructor(private http: HttpClient) {}

  addUser(userPayload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, {...userPayload });
  }
  
  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get-users`);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-user/${userId}`);
  }

  updateUser(userId: string, userUpdates: { name: string; role: string }): Observable<any> {
    return this.http.patch(`${this.baseUrl}/alter-user`, { userId, ...userUpdates });
  }
}

