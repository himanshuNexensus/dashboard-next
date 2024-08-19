import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const exportToPDF = (data: any[], filename: string) => {
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  const margin = 20;

  // Add title
  doc.setFontSize(18);
  doc.text('Data Table Report', pageWidth / 2, margin, { align: 'center' });

  // Add dummy text
  doc.setFontSize(12);
  const dummyText = 'This report contains the exported data from our application. The table below shows the detailed information of each entry.';
  doc.text(dummyText, margin, margin + 10, { maxWidth: pageWidth - 2 * margin });

  // Add table
  const headers = Object.keys(data[0]);
  const rows = data.map(row => headers.map(header => row[header]));

  doc.autoTable({
    head: [headers],
    body: rows,
    startY: margin + 30,
    margin: { top: margin, right: margin, bottom: margin, left: margin },
    styles: { overflow: 'linebreak' },
    headStyles: { fillColor: [41, 128, 185], textColor: 255 },
    alternateRowStyles: { fillColor: [245, 245, 245] },
  });

 // @ts-ignore
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.text(`Page ${i} of ${pageCount}`, pageWidth - margin, pageHeight - 10, { align: 'right' });
  }

  doc.save(filename);
};
