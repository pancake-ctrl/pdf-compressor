var sh = require('shelljs');
const gs = require("ghostscript-node");

sh.chmod('+x', './shrinkpdf.sh')

// sh.exec('shrinkpdf.sh -g -r 90 -o dummy.pdf > out.pdf')

const inputFile = 'dummy.pdf';
const outputFile = 'dummy_compressed.pdf';

// Ghostscript command to compress the PDF
const shrinkPdf = `shrinkpdf.sh ${inputFile} > ${outputFile}`;

// Execute the Ghostscript command
const result = sh.exec(shrinkPdf);

// Check the result
if (result.code !== 0) {
  console.error(`Error: ${result.stderr}`);
} else {
  console.log('PDF compression successful');
}