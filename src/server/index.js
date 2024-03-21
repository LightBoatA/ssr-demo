import express from 'express';
import React from 'react';
// react-dom 提供的一个方法，用来把 React 组件转为普通的 html 字符串
// 使用方法就是直接把组件放入这个方法里即可
import { renderToString } from 'react-dom/server';
import Home from '../containers/Home';
import routes from '../routes';
import { StaticRouter } from 'react-router-dom';
import Header from '../components/Header';
const app = express();
const PORT = 3000;
app.use(express.static('public'));
app.get('*', (req, res) => {
    // let domContent = renderToString(<Home />);
    let context = {};
    let domContent = renderToString(
        <StaticRouter context={context} location={req.path}>
            <>
                <Header />
                <>
                    {routes}
                </>
            </>
        </StaticRouter>
    )
    let html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>holiday-react-ssr</title>
  </head>
  <body>
  <div id="root">${domContent}</div>
  <script src="/client.js"></script>
  </body>
  </html>
  `;
    res.send(html);
});
app.listen(PORT, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running at http://localhost:${PORT}`);
    }
});