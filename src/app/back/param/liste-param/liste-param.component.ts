import { Component, OnInit } from '@angular/core';
import { ParamService } from '../../../service/param.service';

@Component({
  selector: 'app-liste-parametre',
  templateUrl: './liste-param.component.html',
  styleUrls: ['./liste-param.component.css']
})
export class ListeParamComponent implements OnInit {
  parametres;

  constructor(private service: ParamService) {}

  ngOnInit(): void {
    this.service.getAllParam().subscribe((response: Response) => {
      this.parametres = response;
    });
  }
}
