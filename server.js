require('dotenv').config()
const express = require('express')
const morgan = require('morgan');
const { log } = require('mercedlogger');
const cors = require('cors');
path = require('path');
const port = process.env.PORT || 3305;
const app = express();
const db = require('./db/connection');
db();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const userRouter = require('./routes/user/user.route');
const basicAuth = require('./encryption_server/basic_auth');
const productRouter = require('./routes/product/product.route');


app.use('/user',basicAuth ,userRouter);
app.use('/product', productRouter);

app.listen(port, () => {
    log.green('Server running on port', port);
}
);