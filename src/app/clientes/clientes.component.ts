import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { EnderecoService } from '../services/endereco-service.service';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { Cliente } from '../interfaces/cliente';
import { ClienteService } from '../services/cliente.service';
import * as _ from "lodash";

@Component({
  selector: 'app-clientes',
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  providers: [
    provideNgxMask(),
  ],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})

export class ClientesComponent  implements OnInit {
  clienteForm!: FormGroup;
  dynamicMask: string = '';
  clientesCadastrados: Cliente[] = [];
  erroIsencao = false;
  clienteCadastradoSucesso = false;

  constructor(private fb: FormBuilder, private enderecoService: EnderecoService, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      nomeRazaoSocial: ['', Validators.required],
      cpfCnpj: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cep: ['', [Validators.required]],
      endereco: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      pessoaFisica: false,
      inscricaoEstadual: ['']
    });
  }

  getEndereco(): void {
    this.enderecoService.getEnderecoByCep(this.clienteForm.controls['cep'].value).subscribe({
      next: (response) => {
        this.clienteForm.controls['cep'].setValue(response.cep);
        this.clienteForm.controls['endereco'].setValue(response.logradouro);
        this.clienteForm.controls['bairro'].setValue(response.bairro);
        this.clienteForm.controls['cidade'].setValue(response.localidade);
        this.clienteForm.controls['estado'].setValue(response.uf);
      },
      error: (err) => {
        console.error('Erro ao consultar endereço:', err);
        alert('Erro ao consultar endereço.');
      }
    });
  }

  onSubmit(): void {
    if (this.clienteForm.valid) {
      const cliente: Cliente = this.clienteForm.value;
      console.log("CLIENTE: ", cliente);
      // Simulação da lógica para Pessoa Jurídica
      if (cliente.cpfCnpj.length === 14 && (!cliente.inscricaoEstadual || cliente.inscricaoEstadual.toLowerCase() !== 'isento')) {
        console.log("if pessoa juridica: ", cliente.inscricaoEstadual);
        this.erroIsencao = true;
        this.clienteForm.controls['inscricaoEstadual'].setValidators([Validators.required]);
        this.clienteForm.controls['inscricaoEstadual'].updateValueAndValidity();
        return;
      } else {
        this.erroIsencao = false;
        this.clienteForm.controls['inscricaoEstadual'].clearValidators();
        this.clienteForm.controls['inscricaoEstadual'].updateValueAndValidity();
      }

      if (this.clienteForm.controls['cpfCnpj'].value < 14)
        this.clienteForm.controls['pessoaFisica'].setValue(true);
      else
        this.clienteForm.controls['pessoaFisica'].setValue(false);

      console.log("DEPOIS:", this.clienteForm.controls['pessoaFisica'].value)

      this.clienteService.addUser(this.clienteForm.value).subscribe({
        next: (response) => {
          console.log("response:: ", response);
          this.clientesCadastrados.push(cliente);
          this.clienteForm.reset();

          this.clienteCadastradoSucesso = true;
          setTimeout(() => {
            this.clienteCadastradoSucesso = false;
          }, 5000);
        },
        error: (errorResponse) => {
          console.log("error:: ", errorResponse.error);
          this.mapBackendErrorsToFormControls(errorResponse.error);
        }
      });
    } else {
      // Marcar todos os controles como "touched" para exibir todas as mensagens de erro
      Object.values(this.clienteForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsTouched();
          control.updateValueAndValidity();
        }
      });
    }
  }

  private mapBackendErrorsToFormControls(errors: any): void {
    console.log("errors: ", errors);
    for (let field in errors) {
      let fieldName = '';
      fieldName = _.camelCase(field)

      console.log("field pós!: ", fieldName);
      if (errors.hasOwnProperty(field) || this.clienteForm.controls[field]) {
        // Define o erro personalizado no controle correspondente
        const control = this.clienteForm.controls[fieldName];
        console.log("control: ", control);
        const errorMessages = errors[field]; // Assume que é um array de mensagens
        control.setErrors({
          backend: errorMessages.join(' ') // Junta todas as mensagens do backend em uma string
        });
        control.markAsTouched(); // Garante que a mensagem de erro será exibida no template
      }
    }
  }
}

