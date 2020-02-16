import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from "@angular/forms";
import { ApiService } from "./../core/api.service";
import { ValidarCamposService } from "./../core/validar-campos.service";
import { Contato } from "./../shared/models/contato";

@Component({
  selector: "app-contato",
  templateUrl: "./contato.component.html",
  styleUrls: ["./contato.component.css"]
})
export class ContatoComponent implements OnInit {
  cadastro: FormGroup;

  constructor(
    public validacao: ValidarCamposService,
    private apiService: ApiService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.criarFormulario(this.criarFormularioEmBranco());
  }

  formControl(nome: string): AbstractControl {
    return this.cadastro.controls[nome];
  }

  reiniciarForm(): void {
    this.cadastro.reset();
  }

  submit(): void {
    this.cadastro.markAllAsTouched();
    if (this.cadastro.invalid) {
      alert("Por favor verifique os dados informados!");
      return;
    }

    const contato = this.cadastro.getRawValue() as Contato;
    this.salvar(contato);
  }

  private salvar(contato: Contato): void {
    this.apiService.contato(contato).subscribe(
      () => {
        alert("Mensagem enviada com sucesso");
        this.reiniciarForm();
      },
      () => {
        alert(
          "Houve um problema ao enviar os seus dados, por favor tente novamente mais tarde!"
        );
      }
    );
  }

  private criarFormulario(contato: Contato): void {
    this.cadastro = this.fb.group({
      nome: [
        contato.nome,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(256)
        ]
      ],
      email: [
        contato.email,
        [
          Validators.minLength(10),
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
        ]
      ],
      telefone: [contato.telefone, [Validators.required]],
      mensagem: [contato.mensagem, [Validators.required]]
    });
  }

  private criarFormularioEmBranco(): Contato {
    return {
      nome: null,
      email: null,
      telefone: null,
      mensagem: null
    } as Contato;
  }
}
