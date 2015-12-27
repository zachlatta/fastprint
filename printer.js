import printer from 'printer';

export function printFile(filename, printerName) {
  return new Promise((resolve, reject) => {
    printer.printFile({
      filename: filename,
      printer: printerName,
      success: resolve,
      error: reject
    });
  });
};
