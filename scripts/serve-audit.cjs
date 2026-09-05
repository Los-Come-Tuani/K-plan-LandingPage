// Local-only production preview with opt-in, visible diagnostics. Not included in dist.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../dist');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff' };
http.createServer((req, res) => {
  const url = new URL(req.url, 'http://127.0.0.1');
  if (url.pathname === '/__audit.js') {
    res.setHeader('Content-Type', 'text/javascript');
    return res.end(fs.readFileSync(path.join(__dirname, 'visual-audit.js')));
  }
  let file;
  try { file = path.resolve(root, '.' + decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname)); }
  catch { res.writeHead(400); return res.end(); }
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404); return res.end(); }
  res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
  res.setHeader('Cache-Control', 'no-store');
  if (path.extname(file) === '.html' && url.searchParams.has('audit')) {
    const html = fs.readFileSync(file, 'utf8').replace('</head>', '<script src="/__audit.js"></script></head>');
    return res.end(html);
  }
  fs.createReadStream(file).pipe(res);
}).listen(4173, '127.0.0.1', () => console.log('Production preview: http://127.0.0.1:4173/ · diagnostics: /?audit'));
