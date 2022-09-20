import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalculadoraService } from './calculadora.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'testeApp';

    constructor(public service: CalculadoraService) { }

    ngOnInit(): void { }

    onSoma(form: NgForm) {
        this.service.soma().subscribe(res => {
            this.exibeResult(res);
        })
    }

    onSubtracao(form: NgForm) {
        this.service.subtracao().subscribe(res => {
            this.exibeResult(res);
        })
    }

    onMultiplicacao(form: NgForm) {
        this.service.multiplicacao().subscribe(res => {
            this.exibeResult(res);
        })
    }

    onDivisao(form: NgForm) {
        this.service.divisao().subscribe(res => {
            this.exibeResult(res);
        })
    }

    exibeResult(res: Object) {
        let result = document.getElementById("result");

        if (result != null)
            result.innerHTML = String(res).replace('.', ',');
    }
}
