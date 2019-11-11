import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/Services/reports.service';
import { BudgetLine } from 'src/app/Models/budget-line.model';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
//declare let pdfMake: any ;
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-budget-pdf',
  templateUrl: './budget-pdf.component.html',
  styleUrls: ['./budget-pdf.component.css']
})
export class BudgetPdfComponent implements OnInit {

  constructor(private service: ReportsService) { }

  ngOnInit() {
    this.service.getBudgetReport();
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
    this.service.report.forEach(Project => {
      proj.push(
        [
          {
            columns: [
              [
                {
                  text: Project.project,
                  style: 'jobTitle'
                },
                this.getDetailts(Project.lines)
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

  getDetailts(lines: BudgetLine[]) {
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
                  text: line.budget,
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
