const app =require('./01-requestcount');
const PORT =6000;
app.listen(PORT ,() => {
    console.log(`server runnung on http://localhost 
        : ${PORT}`);

});