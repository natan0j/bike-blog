import { Team } from './../team';
import { TEAMS } from './../list-cyclers';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogContent, MatDialogConfig } from '@angular/material/dialog';
import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';

const DEFAULT_DURATION = 1000;
@Component({
  selector: 'app-cyclers',
  templateUrl: './cyclers.component.html',
  styleUrls: ['./cyclers.component.css'],
  animations: [
    trigger('container', [
      state('false', style({height: AUTO_STYLE, visibility: AUTO_STYLE})),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
    ])
  ],
})
export class CyclersComponent implements OnInit {
  @ViewChild ('riderDescription') riderDescription: TemplateRef<any>;
  Height = 25 + '%';
  teams = TEAMS;
  selectedTeam?: Team;
  toggleExpand = true;
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }
  expandRiders(team: Team){
    this.selectedTeam = team;
    console.log(this.selectedTeam);
    }
}
