const putIntoLayout = (totalItems) => {
  const mainLayout = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.1.2/dist/tailwind.min.css">
        <title>Sketch2Site</title>
    </head>
    <body>
    
    ${totalItems}
                
        
    </body>
    </html>
    `;

  return mainLayout;
};

module.exports = { putIntoLayout };
