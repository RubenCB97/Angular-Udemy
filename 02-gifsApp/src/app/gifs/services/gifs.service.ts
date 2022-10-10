import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'O2Sz8VT7Up6drYgp5u896v2fXutPabUm';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'
  private _historial: string[] = [];
  
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []; //Signo de exclamación para forzar
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
      
  }

  buscarGifs(query: string) {
    // if (this._historial.length > 9) 
    //   this._historial.pop();

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial)); //Guardar en el historial
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', query)
    
    console.log(params);
    
    this.http.get<SearchGifsResponse>(`${this.serviceUrl}/search`, {params})
      .subscribe( resp  => {
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
          })
    

    console.log(this._historial);
  }
}
 