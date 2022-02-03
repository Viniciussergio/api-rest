import app from './app';

const port = 3001;
app.listen(process.env.PORT || port, () => {
  console.log();
  console.log(`Escutando no link http://localhost:${port}`);
});
