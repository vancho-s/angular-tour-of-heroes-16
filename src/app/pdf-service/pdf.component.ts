import { Component, OnInit } from '@angular/core';
import { PdfService } from './pdf.service';

@Component({
  selector: 'app-pdf-opener',
  templateUrl: './pdf.component.html',
})
export class PdfOpenerComponent {
  pdfFiles = [
    { title: 'pdf file 1', fileName: 'sample-1' },
    { title: 'pdf file 2', fileName: 'sample-2' },
    { title: 'pdf file 3', fileName: 'sample-3' }
    // Add more items as needed
  ];
  constructor(private pdfService: PdfService) {
  }


  openPdf(fileName: string) {
    this.pdfService.getPdf(fileName).subscribe((pdfBlob: Blob) => {
      const blob = new Blob([pdfBlob],  { type: 'application/pdf; charset=utf-8' });
      const pdfUrl = URL.createObjectURL(blob);
      window.open(pdfUrl);
    });
  }

  openInNewWindow(fileName: string) {
    window.open(this.calculateHref(fileName), "_blank");
  }

  calculateHref(fileName: string) {
    return 'http://localhost:8080/api/pdf/download/' + fileName
  }
}
