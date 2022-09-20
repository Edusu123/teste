import { Injectable } from '@angular/core';
import { Calculadora } from './calculadora.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CalculadoraService {

    constructor(private http: HttpClient) { }

    readonly baseURL = 'http://localhost:30257/api/calculadora';

    formData: Calculadora = new Calculadora();

    soma() {
        return this.http.post(this.baseURL + '/soma', { Num1: this.formData.Num1, Num2: this.formData.Num2 });
    }

    subtracao() {
        return this.http.post(this.baseURL + '/subtracao', this.formData);
    }

    multiplicacao() {
        return this.http.post(this.baseURL + '/multiplicacao', this.formData);
    }

    divisao() {
        return this.http.post(this.baseURL + '/divisao', this.formData);
    }
}
