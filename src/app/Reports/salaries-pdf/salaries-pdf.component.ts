import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ReportsService } from 'src/app/Services/reports.service';
import { StateLine } from 'src/app/Models/state-line.model';
import { EmployeeSalaryLine } from 'src/app/Models/employee-salary-line.model';
import { SalariesLine } from 'src/app/Models/salaries-line.model';
//declare let pdfMake: any ;
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-salaries-pdf',
  templateUrl: './salaries-pdf.component.html',
  styleUrls: ['./salaries-pdf.component.css']
})
export class SalariesPdfComponent implements OnInit {

  constructor(private service: ReportsService) { }

  year : number = 2019;

  ngOnInit() {
    this.service.getSalariesReport(this.year);
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
          text: 'Reporte de planilla',
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
    this.service.salaryReport.forEach(week => {
      proj.push(
        [
          {
            columns: [
              [
                {
                  text: "Semana " + week.week + " del " + this.year
                },
                this.getDetailts(week.employeesToPay),
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

  getDetailts(lines: EmployeeSalaryLine[]) {
    const proj = [];
    lines.forEach(line => {
      proj.push(
        [
          {
            columns: [
              [
                {
                  text: line.name,
                  alignment: 'left'
                },
                this.getSalaryDetails(line.salaryLines)
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

  getSalaryDetails(lines: SalariesLine[]) {
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
                  text: "Total: " + line.total,
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
