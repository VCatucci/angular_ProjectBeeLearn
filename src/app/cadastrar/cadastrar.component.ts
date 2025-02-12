import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { UserModel } from '../model/UserModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: UserModel = new UserModel
  confirmarSenha: string


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  cadastrar() {
 
    if (this.user.senha != this.confirmarSenha){
      alert('As senhas são diferentes')
 
    } else{
      this.authService.cadastrar(this.user).subscribe ((resp : UserModel) =>{
      this.user = resp
      this.router.navigate (['/entrar'])
      alert('Usuário cadastrado com sucesso!')}
 
    )}
 
    }
  }
