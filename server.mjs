import  express  from "express";
import {join} from "path";

const app = express();
const port = 3004;



app.get('/', (req, res) => {
  res.sendFile(join(process.cwd(), 'index.html'));
});


app.get('/about', (req, res) => {
  res.sendFile(join(process.cwd(), 'about.html'));
});

app.get('/contact-me', (req, res) => {
    res.sendFile(join(process.cwd(), 'contact-me.html'));
  });

  app.get('/404', (req, res) => {
    res.sendFile(join(process.cwd(), '404.html'));
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

