import { Component, OnInit } from '@angular/core';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ReportsService } from 'src/app/Services/reports.service';
import { StateLine } from 'src/app/Models/state-line.model';
//declare let pdfMake: any ;
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-state-pdf',
  templateUrl: './state-pdf.component.html',
  styleUrls: ['./state-pdf.component.css']
})
export class StatePdfComponent implements OnInit {


  constructor(private service: ReportsService) { }

  ngOnInit() {
    this.service.getStateReport();
  }

  generatePdf() {
    const documentDefinition = this.getDocumentDefinition();
    pdfMake.createPdf(documentDefinition).open();
  }
  //Código tomado de: https://www.ngdevelop.tech/angular-8-export-to-pdf-using-pdfmake/
  getDocumentDefinition() {
    return {
      content: [
        {
          text: 'Reporte de presupuestos',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        this.getRows()
      ],
      styles: {
        name: {
          fontSize: 16,
          bold: true
        }
      }
    };
  }

  getRows() {
    const proj = [];
    this.service.statereport.forEach(Project => {
      proj.push(
        [
          {
            columns: [
              [
                {
                  text: Project.project
                },
                this.getDetailts(Project.lines),
                {
                  text: 'Total budget: ' + Project.totals.total_budget
                },
                {
                  text: 'Total expenses: ' +  Project.totals.total_expenses
                }
              ]
            ]
          }
        ]
      );
    });
    return {
      table: {
        widths: ['*'],
        body: [
          ...proj
        ],
        alignment: 'right'
      }
    };
  }

  getDetailts(lines: StateLine[]) {
    const proj = [];
    lines.forEach(line => {
      proj.push(
        [
          {
            columns: [
              [
                {
                  text: line.stage,
                  alignment: 'left'
                },
                {
                  text: "Budget: " + line.budget,
                  alignment: 'center'
                },
                {
                  text: "Expenses: " + line.expenses,
                  alignment: 'right'
                }
              ]
            ]
          }
        ]
      );
    });
    return {
      table: {
        widths: ['*'],
        body: [
          ...proj
        ]
      }
    };
  }

}
