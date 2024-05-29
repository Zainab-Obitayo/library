const express= require('express');
const bookRoute= require('./routes/bookRoute')
const swaggerUi=require('swagger-ui-express');
const swaggerJsDoc=require('swagger-jsdoc');





//express app
const app = express();
//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

//routes
app.use('/api/books', bookRoute);




const options ={
    definition:{
        openapi: "3.0.0",
        info: {
            title:"libraryAPI",
            description:"CRUD API for managing library",
            version:"1.0",
        },
        servers:[
            {
                url:"http://localhost:3000/"
            },
        ],
    },

    apis: ['./routes/*.js','./models/*.js','./controller/*.js'],
};

const swaggerSpec=swaggerJsDoc(options);
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));



const port= 3000;
app.listen(3000,() => {
    console.log('server running on port 3000')
})