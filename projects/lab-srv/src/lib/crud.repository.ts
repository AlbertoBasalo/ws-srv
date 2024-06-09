import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CrudRepository {
  #http: HttpClient = inject(HttpClient);
  #api = 'http://localhost:3000'; // ToDo: Make environment an injectable token

  getAll<T>(resource: string) {
    const url = `${this.#api}/${resource}`;
    return this.#http.get<T[]>(url);
  }

  getById<T>(resource: string, id: number) {
    const url = `${this.#api}/${resource}/${id}`;
    return this.#http.get<T>(url);
  }

  getByQuery<T>(resource: string, query: string) {
    const url = `${this.#api}/${resource}?${query}`;
    return this.#http.get<T[]>(url);
  }

  post<T>(resource: string, data: T) {
    const url = `${this.#api}/${resource}`;
    return this.#http.post<T>(url, data);
  }

  put<T>(resource: string, id: number, data: T) {
    const url = `${this.#api}/${resource}/${id}`;
    return this.#http.put<T>(url, data);
  }

  delete<T>(resource: string, id: number) {
    const url = `${this.#api}/${resource}/${id}`;
    return this.#http.delete<T>(url);
  }
}
