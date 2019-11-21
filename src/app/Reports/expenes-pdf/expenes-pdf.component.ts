import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ReportsService } from 'src/app/Services/reports.service';
import { ExpensesLine } from 'src/app/Models/expenses-line.model';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-expenes-pdf',
  templateUrl: './expenes-pdf.component.html',
  styleUrls: ['./expenes-pdf.component.css']
})
export class ExpenesPdfComponent implements OnInit {

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
          text: 'Reporte de gastos',
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
    this.service.expensesReport.forEach(week => {
      proj.push(
        [
          {
            columns: [
              [
                {
                  text: "Semana " + week.week
                },
                this.getDetailts(week.lines)
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

  getDetailts(lines: ExpensesLine[]) {
    const proj = [];
    lines.forEach(line => {
      proj.push(
        [
          {
            columns: [
              [
                {
                  text: "Proyecto: " + line.project,
                  alignment: 'center'
                },
                {
                  text: "Gastos: " + line.expenses,
                  alignment: 'center'
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
